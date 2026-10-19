import SuggestionCard from "@/app/ui/suggestions/SuggestionCard";
import { getSuggestions } from '@/app/lib/actions';

export default async function SuggestionList() {
    const suggestion = await getSuggestions();

    return (
        <div className="w-full h-full">
            {suggestion.map(suggestion => (
                <SuggestionCard key={suggestion.suggestion_id} suggestion={suggestion} />
            ))}
        </div>
    )
};
