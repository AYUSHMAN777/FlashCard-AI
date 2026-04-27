type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const safeTotal = total > 0 ? total : 1;
  const safeCurrent = Math.min(Math.max(current, 0), safeTotal);
  const percentage = (safeCurrent / safeTotal) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>Progress</span>
        <span>
          {safeCurrent} / {safeTotal}
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-zinc-800 h-2 rounded-full">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

