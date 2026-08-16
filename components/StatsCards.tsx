type Stats = {
  total: number;
  strong: number;
  average: number;
  needsImprovement: number;
};

export default function StatsCards({
  stats
}: {
  stats: Stats;
}) {
  const cards = [
    {
      title: "Total Students",
      value: stats.total
    },
    {
      title: "Strong",
      value: stats.strong
    },
    {
      title: "Average",
      value: stats.average
    },
    {
      title: "Needs Improvement",
      value: stats.needsImprovement
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {card.title}
          </p>

          <p className="mt-2 text-3xl font-bold">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}