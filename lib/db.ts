import { Pool } from "pg";
import { seedStudents } from "./seed-data";

declare global {
  var pgPool: Pool | undefined;
}

const pool =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,

    ssl: {
      rejectUnauthorized: false
    }
  });

if (process.env.NODE_ENV !== "production") {
  global.pgPool = pool;
}

let initialized = false;

export async function initializeDatabase() {
  if (initialized) return;

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      branch TEXT NOT NULL,
      cgpa DECIMAL(4,2) NOT NULL,
      skills JSONB NOT NULL DEFAULT '[]',
      projects JSONB NOT NULL DEFAULT '[]',
      internships JSONB NOT NULL DEFAULT '[]',
      certifications JSONB NOT NULL DEFAULT '[]'
    )
  `);

  const countResult = await pool.query(
    "SELECT COUNT(*)::int AS count FROM students"
  );

  const count = countResult.rows[0].count;

  if (count === 0) {
    for (const student of seedStudents) {
      await pool.query(
        `
        INSERT INTO students
        (
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
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        `,
        [
          student.id,
          student.name,
          student.email,
          student.phone,
          student.branch,
          student.cgpa,
          JSON.stringify(student.skills),
          JSON.stringify(student.projects),
          JSON.stringify(student.internships),
          JSON.stringify(student.certifications)
        ]
      );
    }

    console.log("Database seeded with student data.");
  }

  initialized = true;
}

export { pool };