import sql from '@/app/lib/data';

export async function getSuggestions() {
    
    const query = `
        SELECT
          *
        FROM
          suggestions;
    `

    const data = await sql`${query}`
    
    return data
}