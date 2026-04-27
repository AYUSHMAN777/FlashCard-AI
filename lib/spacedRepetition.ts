type SpacedRepetitionCard = {
  repetitions: number;
  interval: number;
  ease_factor: number;
};
export const mapRatingToQuality = (rating: string): number => {
  switch (rating) {
    case "again":
      return 1;
    case "hard":
      return 3;
    case "good":
      return 4;
    case "easy":
      return 5;
    default:
      return 4;
  }
};
export function calculateSpacedRepetition(
  card: SpacedRepetitionCard,
  quality: number
) {
  let { repetitions, interval, ease_factor } = card;
  
  // Step 1: If failed
  if (quality < 3) {
    return {
      repetitions: 0,
      interval: 1,
      ease_factor,
    };
  }
  
  // Step 2: Success
  repetitions += 1;
  
  if (repetitions === 1) {
    interval = 1;
  } else if (repetitions === 2) {
    interval = 6;
  } else {
    interval = Math.round(interval * ease_factor);
  }
  
  // Step 3: Update ease factor
  ease_factor =
    ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  
  if (ease_factor < 1.3) ease_factor = 1.3;
  
  return {
    repetitions,
    interval,
    ease_factor,
  };
}