import { getSuggestions } from '@/app/lib/actions';
import { lusitana } from '@/app/ui/fonts';

export default async function SuggestionCard() {
    const suggestions = await getSuggestions();

    return (
        <div>
            {suggestions?.map((suggestion) => (
                <div
                    key={suggestion.suggestion_id}
                >
                    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                        <div className="flex p-4">
                            <h3 className="ml-2 text-sm font-medium">{suggestion.suggestion_id}</h3>
                        </div>
                        <p
                            className={`${lusitana.className}
                            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
                        >
                            {suggestion.suggestion_details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}