'use server';

import sql from '@/app/lib/data';
import { Suggestion } from '@/app/lib/definitions';

export async function getSuggestions() {
    
    const data = await sql`
        SELECT
          *
        FROM
          suggestions;
    `

    return data
};

export async function createSuggestion(newSuggestion: Suggestion) {
    await sql`
      INSERT INTO suggestions ( suggestion_id, suggestion_details, involvement_flag, suggester_email, suggester_name, votes )
      VALUES
        ( ${newSuggestion.suggestion_id}, ${newSuggestion.suggestion_details}, ${newSuggestion.involvement_flag}, ${newSuggestion.suggester_email}, ${newSuggestion.suggester_name}, 0 );
    `
};