import postgres from 'postgres';
import dotenv from 'dotenv';
import { SuggestionField } from './definitions';

dotenv.config()

const sql = postgres( {
    host: `${process.env.POSTGRES_HOST}`,
    port: Number(process.env.POSTGRES_PORT),
    username: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`,
    database: `${process.env.POSTGRES_DB}`
});

export async function fetchSuggestions() {
    try {
        const suggestionDetails = await sql<SuggestionField[]>`
            SELECT
                suggestion_id,
                suggestion_details
            FROM
                suggestions`;
        
        return suggestionDetails;
    } catch (error) {
        console.error('Database Error', error);
        throw new Error('Failed to fetch suggestion data');
    }
}