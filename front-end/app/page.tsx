import { Suspense } from "react";
import SuggestionList from "./ui/suggestions/SuggestionList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <SuggestionList />
      </Suspense>
    </div>
  );
}
