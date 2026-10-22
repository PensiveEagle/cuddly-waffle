import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

type Suggestion = {
    suggestion_id: string,
    suggestion_details: string,
    involvement_flag: string,
    suggester_email: string,
    suggester_name: string,
    votes: number
}

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

async function createSuggestion(newSuggestion: Suggestion) {
    await sql`
      INSERT INTO suggestions ( suggestion_id, suggestion_details, involvement_flag, suggester_email, suggester_name, votes )
      VALUES
        ( ${newSuggestion.suggestion_id}, ${newSuggestion.suggestion_details}, ${newSuggestion.involvement_flag}, ${newSuggestion.suggester_email}, ${newSuggestion.suggester_name}, 0 );
    `
};

const testSuggestion: Suggestion = {
  "suggestion_id": "testXXX",
  "suggestion_details": "test test test test test",
  "involvement_flag": "Yes",
  "suggester_email": "test@example.co.uk",
  "suggester_name": "Test Test",
  "votes": 0
}

console.log(`Database connection details...`)
console.log(`Host: ${process.env.POSTGRES_HOST}`)
console.log(`Port: ${process.env.POSTGRES_PORT}`)
console.log(`Database: ${process.env.POSTGRES_DB}`)
console.log(`Username: ${process.env.POSTGRES_USER}`)
console.log(`Password: ${process.env.POSTGRES_PASSWORD}`)

console.log(`Testing fetching data...`)
console.log(await getSuggestions())

console.log(`Inserting new test record...`)
await createSuggestion( testSuggestion )

console.log(`Testing data fetch with new record...`)
console.log(await getSuggestions())

sql.end();