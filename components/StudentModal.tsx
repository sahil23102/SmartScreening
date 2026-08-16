"use client";

import { ScoreBreakdown } from "@/lib/scoring";

type Student = {
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

export default function StudentModal({
  student,
  onClose
}: {
  student: Student;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {student.name}
            </h2>

            <p className="mt-1 text-slate-500">
              {student.branch}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-xl hover:bg-slate-100"
          >
            ×
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-500">
              CGPA
            </p>
            <p className="font-semibold">
              {student.cgpa.toFixed(2)}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Category
            </p>

            <p className="font-semibold">
              {student.score.category}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="font-semibold">
              {student.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Phone
            </p>

            <p className="font-semibold">
              {student.phone}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold">
            Score Breakdown
          </h3>

          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              ["CGPA", student.score.cgpa],
              ["Skills", student.score.skills],
              ["Projects", student.score.projects],
              ["Internship", student.score.internship],
              [
                "Certifications",
                student.score.certifications
              ]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg bg-slate-50 p-3"
              >
                <p className="text-xs text-slate-500">
                  {label}
                </p>
                <p className="mt-1 text-lg font-bold">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-lg bg-slate-900 p-4 text-white">
            <div className="flex justify-between">
              <span>Total Score</span>
              <strong>
                {student.score.total}/11
              </strong>
            </div>
          </div>
        </div>

        <DetailSection
          title="Skills"
          items={student.skills}
        />

        <DetailSection
          title="Projects"
          items={student.projects}
        />

        <DetailSection
          title="Internships"
          items={student.internships}
        />

        <DetailSection
          title="Certifications"
          items={student.certifications}
        />
      </div>
    </div>
  );
}

function DetailSection({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold">{title}</h3>

      {items.length === 0 ? (
        <p className="mt-2 text-sm text-slate-400">
          None listed
        </p>
      ) : (
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}