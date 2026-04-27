import { Button } from "@/components/ui/button";

export type FlashcardRating = "again" | "hard" | "good" | "easy";

type RatingButtonsProps = {
  onRate: (rating: FlashcardRating) => void;
  disabled?: boolean;
};

export function RatingButtons({ onRate, disabled }: RatingButtonsProps) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <Button
        variant="destructive"
        onClick={() => onRate("again")}
        disabled={disabled}
      >
        Again
      </Button>

      <Button
        className="bg-yellow-500 hover:bg-yellow-600"
        onClick={() => onRate("hard")}
        disabled={disabled}
      >
        Hard
      </Button>

      <Button
        className="bg-blue-500 hover:bg-blue-600"
        onClick={() => onRate("good")}
        disabled={disabled}
      >
        Good
      </Button>

      <Button
        className="bg-green-500 hover:bg-green-600"
        onClick={() => onRate("easy")}
        disabled={disabled}
      >
        Easy
      </Button>
    </div>
  );
}

