
import { Suspense } from 'react';
import SuggestionCard from './ui/suggestion-card';

export default function Home() {
  return (
    <div>
      <h1>Cuddly Waffle</h1>
      <Suspense>
        <SuggestionCard />
      </Suspense>
    </div>
  );
}
