"use client";

import { ScoreBreakdown } from "@/lib/scoring";

type Student = {
  id: number;
  name: string;
  email: string;
  phone: string;
  branch: string;
  cgpa: number;
  skills: string[];
  projects: string[];
  internships: string[];
  certifications: string[];
  score: ScoreBreakdown;
};

export default function CandidateTable({
  students,
  onSelect
}: {
  students: Student[];
  onSelect: (student: Student) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-4 font-semibold">
                Student
              </th>

              <th className="px-5 py-4 font-semibold">
                Branch
              </th>

              <th className="px-5 py-4 font-semibold">
                CGPA
              </th>

              <th className="px-5 py-4 font-semibold">
                Skills
              </th>

              <th className="px-5 py-4 font-semibold">
                Projects
              </th>

              <th className="px-5 py-4 font-semibold">
                Internship
              </th>

              <th className="px-5 py-4 font-semibold">
                Score
              </th>

              <th className="px-5 py-4 font-semibold">
                Category
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {students.map((student) => (
              <tr
                key={student.id}
                onClick={() => onSelect(student)}
                className="cursor-pointer hover:bg-slate-50"
              >
                <td className="px-5 py-4">
                  <p className="font-semibold">
                    {student.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {student.email}
                  </p>
                </td>

                <td className="px-5 py-4">
                  {student.branch}
                </td>

                <td className="px-5 py-4 font-semibold">
                  {student.cgpa.toFixed(2)}
                </td>

                <td className="px-5 py-4">
                  {student.skills.length}
                </td>

                <td className="px-5 py-4">
                  {student.projects.length}
                </td>

                <td className="px-5 py-4">
                  {student.internships.length > 0
                    ? "Yes"
                    : "No"}
                </td>

                <td className="px-5 py-4">
                  {student.score.total}/11
                </td>

                <td className="px-5 py-4">
                  <CategoryBadge
                    category={student.score.category}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {students.length === 0 && (
        <div className="p-12 text-center text-slate-500">
          No students match the selected filters.
        </div>
      )}
    </div>
  );
}

function CategoryBadge({
  category
}: {
  category: string;
}) {
  const classes =
    category === "Strong"
      ? "bg-green-100 text-green-700"
      : category === "Average"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${classes}`}
    >
      {category}
    </span>
  );
}