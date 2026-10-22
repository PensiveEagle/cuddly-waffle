import postgres from 'postgres';

const sql = postgres( {
    host: `${process.env.POSTGRES_HOST}`,
    port: Number(process.env.POSTGRES_PORT),
    username: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`,
    database: `${process.env.POSTGRES_DB}`
});

async function getSuggestions() {
    
    const data = await sql`
      SELECT
        *
      FROM
        suggestions;
      `

    return data
};

console.log(`Host: ${process.env.POSTGRES_HOST}`)
console.log(`Port: ${process.env.POSTGRES_PORT}`)
console.log(`Database: ${process.env.POSTGRES_DB}`)
console.log(`Username: ${process.env.POSTGRES_USER}`)
console.log(`Password: ${process.env.POSTGRES_PASSWORD}`)
console.log(await getSuggestions())