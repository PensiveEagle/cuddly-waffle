import { fetchSuggestions } from "@/app/lib/data";
import { Box, Button } from "@mui/material";
import SuggestionCard from "./SuggestionCard";
import RefreshIcon from "@mui/icons-material/Refresh"

export default async function SuggestionList() {
    const suggestions = await fetchSuggestions()

    return (
        <main>
            <Box className="m-4 grid justify-items-end">
                <Button variant="outlined" color="hero" startIcon={<RefreshIcon />}>Refresh</Button>
            </Box>
            <Box className="m-4 overscroll-auto">
                {suggestions.map((suggestion) => (
                    <SuggestionCard key={suggestion.suggestion_id} suggestion={suggestion} />
                ))}
            </Box>
        </main>
    )
}