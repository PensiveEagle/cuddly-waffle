'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dotenv from 'dotenv';
import {v7 as uuidv7 } from 'uuid';

dotenv.config()

const sql = postgres( {
    host: `${process.env.POSTGRES_HOST}`,
    port: Number(process.env.POSTGRES_PORT),
    username: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`,
    database: `${process.env.POSTGRES_DB}`
});

const FormSchema = z.object({
    suggestion_id: z.string(),
    suggestion_details: z.string(),
    involvement_flag: z.enum(['Yes', 'No', 'Maybe'], {
        error: 'Please select a value involvement statement.'
    }),
    suggester_email: z.string(),
    suggester_name: z.string()
});

const CreateSuggestion = FormSchema.omit({ suggestion_id: true });

export type State = {
    errors?: {
        suggestion_details?: string[];
        involvement_flag?: string[];
        suggester_email?: string[];
        suggester_name?: string[];
    };
    message?: string | null
};

export async function createSuggestion(prevState: State, formData: FormData) {
    // Validate form usig zod
    const validatedFields = CreateSuggestion.safeParse({
        suggestion_details: formData.get('suggestion_details'),
        involvement_flag: formData.get('involvement_flag'),
        suggester_email: formData.get('suggester_email'),
        suggester_name: formData.get('suggster_name')
    });

    // Fail validation early
    if (!validatedFields.success) {
        return {
            errors: z.flattenError(validatedFields.error),
            message: 'Missing fields. Failed to create suggestion'
        };
    };

    // Extract data for sending to query
    const { suggestion_details, involvement_flag, suggester_email, suggester_name } = validatedFields.data;
    const suggestion_uuid = uuidv7()

    try {
        await sql`
            INSERT INTO suggestions ( suggestion_id, suggestion_details, involvement_flag, suggester_email, suggester_name )
            VALUES ( ${suggestion_uuid}, ${suggestion_details}, ${involvement_flag}, ${suggester_email}, ${suggester_name} )`;
    } catch (error) {
        return {
            errors: error,
            message: 'Database error: Failed to create suggestion'
        }
    }

    revalidatePath('/');
    redirect('/');
};