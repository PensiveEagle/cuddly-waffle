import type { Suggestion } from '@/app/lib/definitions';
import { ClockIcon } from '@heroicons/react/24/outline';

type Props = {
    suggestion: Suggestion,
};

export default function SuggestionCard( {suggestion}: Props ) {
    return (
    <div className="rounded-xl bg-white px-10 py-5 m-5 shadow-sm">
      <div className="inline-flex flex-col">
        <h3 className="text-sm font-medium w-full">{suggestion.suggestion_details}</h3>
      </div>
    </div>
  )
};

