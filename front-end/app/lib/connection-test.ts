import postgres from 'postgres';

const sql = postgres( {
    host: `${process.env.POSTGRES_HOST}`,
    port: 5432,
    database: `${process.env.POSTGRES_DB}`,
    username: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`
});

export default sql;

export async function getSuggestions() {
    try {
        const suggestions = await sql`
        SELECT
            suggestion_id,
            suggestion_details
        FROM
            suggestions
        `;

        return suggestions;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

console.log("Running database connections test... ");
console.log(`${process.env.POSTGRES_HOST}`);
console.log(`${process.env.POSTGRES_USER}`);
console.log(`${process.env.POSTGRES_PASSWORD}`);
console.log(`${process.env.POSTGRES_DB}`);
console.log( await getSuggestions() );
console.log("Test done");