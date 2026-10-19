import type { Suggestion } from '@/app/lib/definitions';
import { ClockIcon } from '@heroicons/react/24/outline';

type Props = {
    suggestion: Suggestion,
};

export default function SuggestionCard( {suggestion}: Props ) {
    return (
    <div className="rounded-xl bg-gray-50 px-10 py-5 m-5 shadow-sm">
      <div className="inline-flex flex-col">
        <h3 className="text-sm font-medium w-full">{suggestion.suggestion_details}</h3>
        <div className="grid grid-cols-2 justify-items-centre contents-center w-1/12 h-5">
            <ClockIcon className="h-5 w-5 text-gray-700" />
            <p className="mt-3 w-1/2">{suggestion.votes}</p>
        </div>
      </div>
    </div>
  )
};

