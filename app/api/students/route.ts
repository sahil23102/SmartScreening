import { NextRequest, NextResponse } from "next/server";
import { initializeDatabase, pool } from "@/lib/db";
import { calculateScore } from "@/lib/scoring";

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();

    const { searchParams } = new URL(request.url);

    const search =
      searchParams.get("search")?.trim().toLowerCase() || "";

    const minCgpaParam = searchParams.get("minCgpa");

    const minCgpa = minCgpaParam
      ? Number(minCgpaParam)
      : 0;

    const skill =
      searchParams.get("skill")?.trim().toLowerCase() || "";

    const category =
      searchParams.get("category") || "All";

    const result = await pool.query(`
      SELECT
        id,
        name,
        email,
        phone,
        branch,
        cgpa,
        skills,
        projects,
        internships,
        certifications
      FROM students
      ORDER BY cgpa DESC
    `);

    const students = result.rows.map((student) => {
      const normalizedStudent = {
        ...student,
        cgpa: Number(student.cgpa),
        skills: Array.isArray(student.skills)
          ? student.skills
          : [],
        projects: Array.isArray(student.projects)
          ? student.projects
          : [],
        internships: Array.isArray(student.internships)
          ? student.internships
          : [],
        certifications: Array.isArray(student.certifications)
          ? student.certifications
          : []
      };

      const score = calculateScore(normalizedStudent);

      return {
        ...normalizedStudent,
        score
      };
    });

    const filtered = students.filter((student) => {
      const matchesSearch =
        !search ||
        student.name.toLowerCase().includes(search) ||
        student.branch.toLowerCase().includes(search);

      const matchesCgpa =
        student.cgpa >= minCgpa;

      const matchesSkill =
        !skill ||
        student.skills.some((item: string) =>
          item.toLowerCase().includes(skill)
        );

      const matchesCategory =
        category === "All" ||
        student.score.category === category;

      return (
        matchesSearch &&
        matchesCgpa &&
        matchesSkill &&
        matchesCategory
      );
    });

    const stats = {
      total: students.length,
      strong: students.filter(
        (s) => s.score.category === "Strong"
      ).length,
      average: students.filter(
        (s) => s.score.category === "Average"
      ).length,
      needsImprovement: students.filter(
        (s) => s.score.category === "Needs Improvement"
      ).length
    };

    return NextResponse.json({
      students: filtered,
      stats
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load students"
      },
      {
        status: 500
      }
    );
  }
}