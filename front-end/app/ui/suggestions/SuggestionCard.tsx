import type { Suggestion } from '@/app/lib/definitions';
import { Card } from '@mui/material';

type Props = {
    suggestion: Suggestion,
};

export default function SuggestionCard( {suggestion}: Props ) {
    return (
        <div>
            <Card>
                <h1>{suggestion.suggestion_id}</h1>
                <p>{suggestion.suggestion_details}</p>
                <p>{suggestion.votes}</p>
            </Card>
        </div>
    )
};

