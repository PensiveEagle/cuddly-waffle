import SuggestionCard from "@/app/ui/suggestions/SuggestionCard";
import { getSuggestions } from '@/app/lib/actions';
import { Box } from '@mui/material';

export default async function SuggestionList() {
    const suggestion = await getSuggestions();

    return (
        <Box>
            {suggestion.map(suggestion => (
                <SuggestionCard key={suggestion.suggestion_id} suggestion={suggestion} />
            ))}
        </Box>
    )
};
