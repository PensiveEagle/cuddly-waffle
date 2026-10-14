"use server";

import sql from '@/app/lib/data';
import { Suggestion } from './definitions';


export async function getSuggestions() {
    try {
        const suggestions = await sql<Suggestion[]>`
        SELECT
            suggestion_id,
            suggestion_details
        FROM
            suggestions;
        `

        return suggestions
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}