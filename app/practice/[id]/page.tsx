"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FlipFlashcard from "@/components/flashcards/flipanimation";
import { ProgressBar } from "@/components/flashcards/ProgressBar";
import { RatingButtons, type FlashcardRating } from "@/components/flashcards/RatingButton";

type Card = {
  id: string;
  question: string;
  answer: string;
};

export default function PracticePage() {
  const params = useParams<{ id: string }>();
  const [cards, setCards] = useState<Card[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!params?.id) return;

    fetch(`/api/deck/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load deck");
        return res.json();
      })
      .then((data) => {
        const loaded = Array.isArray(data.cards) ? data.cards : [];
        setCards(loaded);
        setIndex(0);
        setFlipped(false);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Failed to load deck");
      });
  }, [params?.id]);

  const currentCard = cards[index] ?? null;
  const current = index + 1;
  const total = cards.length;

  const goNext = useCallback(() => {
    if (cards.length === 0) return;
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const handleRate = useCallback(
    async (rating: FlashcardRating) => {
      if (loading || !currentCard) return;
      if (!flipped) return;

      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cardId: currentCard.id, rating }),
        });

        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(body?.error || "Failed to save review");
        }

        goNext();
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to save review");
      } finally {
        setLoading(false);
      }
    },
    [currentCard, flipped, goNext, loading]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (loading || !currentCard) return;
      if (!flipped) return;

      if (e.key === "1") handleRate("again");
      if (e.key === "2") handleRate("hard");
      if (e.key === "3") handleRate("good");
      if (e.key === "4") handleRate("easy");
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentCard, flipped, handleRate, loading]);

  if (error) return <p className="p-6 text-red-500">{error}</p>;

  if (cards.length === 0 || !currentCard) return <p>Loading...</p>;


  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        <ProgressBar current={current} total={total} />

        <FlipFlashcard
          question={currentCard.question}
          answer={currentCard.answer}
          flipped={flipped}
          onToggle={() => setFlipped((v) => !v)}
        />

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setFlipped((v) => !v)}
            className="border px-3 py-1 rounded"
            disabled={loading}
          >
            {flipped ? "Show Question" : "Show Answer"}
          </button>

          <button onClick={goNext} className="border px-3 py-1 rounded" disabled={loading}>
            Next
          </button>
        </div>

        <RatingButtons onRate={handleRate} disabled={!flipped || loading} />

        <p className="text-center text-xs text-gray-500 mt-4">
          Tip: flip the card, then rate it. Shortcuts: 1=Again, 2=Hard, 3=Good, 4=Easy
        </p>
      </div>
    </div>
  );
}