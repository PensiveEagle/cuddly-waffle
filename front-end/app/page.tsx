import { Suspense } from "react";
import SuggestionList from "./ui/suggestions/SuggestionList";
import SuggestionForm from "@/app/ui/suggestions/SuggestionForm";

export default function Home() {
  return (
    <div className="inline-flex flex-row bg-gray-200">
      <div className="w-1/3 mr-2">
        <SuggestionForm />
      </div>
      <div className="w-2/3 ml-2">
        <Suspense fallback={<p>Loading...</p>}>
          <SuggestionList />
        </Suspense>
      </div>
    </div>
  );
}
