'use server';

import sql from '@/app/lib/data';

export async function getSuggestions() {
    
    const data = await sql`
        SELECT
          *
        FROM
          suggestions;
    `

    return data
}