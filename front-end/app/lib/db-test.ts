import sql from './data';

async function getSuggestions() {
    const suggestions = await sql`
      SELECT
        suggestion_id,
        suggestion_details
      FROM
        suggestions;
    `

    return suggestions
}

console.log("Testing... ")
console.log(getSuggestions())
console.log("Test end")