import Image from "next/image";
import SuggestionCard  from '@/app/ui/suggestion-card'

export default function Home() {
  return (
    <div>
      <h1>Cuddly Waffle</h1>
      <SuggestionCard />
    </div>
  );
}
