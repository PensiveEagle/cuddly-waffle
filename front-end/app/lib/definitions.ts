export type SuggestionField = {
    suggestion_id: string,
    suggestion_details: string
}

export type Suggestion = {
    suggestion_id: string,
    suggestion_details: string,
    involvement_flag: string,
    suggester_email: string,
    suggester_name: string,
    votes: number
}