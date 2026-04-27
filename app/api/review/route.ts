import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { calculateSpacedRepetition, mapRatingToQuality } from "@/lib/spacedRepetition";

export async function POST(req: Request) {
  const supabase = await getSupabaseServerClient();
  const { cardId, rating } = await req.json();

  // 1. Fetch card
  const { data: card, error } = await supabase
    .from("flashcards")
    .select("*")
    .eq("id", cardId)
    .single();

  if (error) {
    return NextResponse.json({ error: "Card not found" }, { status: 404 });
  }

  // 2. Convert rating → quality
  const quality = mapRatingToQuality(rating);

  // 3. Calculate new values
  const updated = calculateSpacedRepetition(card, quality);

  // 4. Set next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + updated.interval);

  // 5. Update DB
  const { error: updateError } = await supabase
    .from("flashcards")
    .update({
      ...updated,
      next_review: nextReview.toISOString(),
    })
    .eq("id", cardId);

  if (updateError) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}