type Filters = {
  search: string;
  minCgpa: string;
  skill: string;
  category: string;
};

export default function FilterBar({
  filters,
  setFilters
}: {
  filters: Filters;
  setFilters: React.Dispatch<
    React.SetStateAction<Filters>
  >;
}) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search name or branch..."
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              search: e.target.value
            }))
          }
          className="rounded-lg border px-3 py-2 outline-none focus:border-slate-500"
        />

        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          placeholder="Minimum CGPA"
          value={filters.minCgpa}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              minCgpa: e.target.value
            }))
          }
          className="rounded-lg border px-3 py-2 outline-none focus:border-slate-500"
        />

        <input
          type="text"
          placeholder="Skill e.g. React"
          value={filters.skill}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              skill: e.target.value
            }))
          }
          className="rounded-lg border px-3 py-2 outline-none focus:border-slate-500"
        />

        <select
          value={filters.category}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              category: e.target.value
            }))
          }
          className="rounded-lg border px-3 py-2 outline-none focus:border-slate-500"
        >
          <option value="All">All Categories</option>
          <option value="Strong">Strong</option>
          <option value="Average">Average</option>
          <option value="Needs Improvement">
            Needs Improvement
          </option>
        </select>
      </div>
    </div>
  );
}