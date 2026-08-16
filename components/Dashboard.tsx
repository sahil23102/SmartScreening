"use client";

import { useEffect, useState } from "react";
import StatsCards from "./StatsCards";
import FilterBar from "./FilterBar";
import CandidateTable from "./CandidateTable";
import StudentModal from "./StudentModal";
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

type Stats = {
  total: number;
  strong: number;
  average: number;
  needsImprovement: number;
};

export default function Dashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    strong: 0,
    average: 0,
    needsImprovement: 0
  });

  const [filters, setFilters] = useState({
    search: "",
    minCgpa: "",
    skill: "",
    category: "All"
  });

  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStudents() {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (filters.search) {
          params.set("search", filters.search);
        }

        if (filters.minCgpa) {
          params.set("minCgpa", filters.minCgpa);
        }

        if (filters.skill) {
          params.set("skill", filters.skill);
        }

        if (filters.category !== "All") {
          params.set("category", filters.category);
        }

        const response = await fetch(
          `/api/students?${params.toString()}`,
          {
            signal: controller.signal
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load students");
        }

        const data = await response.json();

        setStudents(data.students);
        setStats(data.stats);
      } catch (error) {
        if (
          error instanceof Error &&
          error.name !== "AbortError"
        ) {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    }

    const timeout = setTimeout(
      loadStudents,
      250
    );

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [filters]);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-sm font-semibold text-slate-500">
            PLACEMENT CELL
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Smart Candidate Screening
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Transparent and explainable screening of
            student placement readiness.
          </p>
        </header>

        <StatsCards stats={stats} />

        <div className="mt-6">
          <FilterBar
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Candidates
            </h2>

            <p className="text-sm text-slate-500">
              {students.length} candidates shown
            </p>
          </div>

          {loading && (
            <p className="text-sm text-slate-500">
              Loading...
            </p>
          )}
        </div>

        <div className="mt-4">
          <CandidateTable
            students={students}
            onSelect={setSelectedStudent}
          />
        </div>

        <div className="mt-6 rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="font-bold">
            How categorization works
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Candidates receive points based on CGPA,
            skills, projects, internship experience and
            certifications. A total score of 8 or more is
            Strong, 5–7 is Average, and below 5 is Needs
            Improvement.
          </p>
        </div>
      </div>

      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </main>
  );
}