export type Category =
  | "Strong"
  | "Average"
  | "Needs Improvement";

export type ScoreBreakdown = {
  cgpa: number;
  skills: number;
  projects: number;
  internship: number;
  certifications: number;
  total: number;
  category: Category;
};

type StudentForScoring = {
  cgpa: number;
  skills: string[];
  projects: string[];
  internships: string[];
  certifications: string[];
};

export function calculateScore(
  student: StudentForScoring
): ScoreBreakdown {
  let cgpaScore = 0;

  if (student.cgpa >= 8.5) {
    cgpaScore = 3;
  } else if (student.cgpa >= 7.5) {
    cgpaScore = 2;
  } else {
    cgpaScore = 1;
  }

  let skillsScore = 0;

  if (student.skills.length >= 4) {
    skillsScore = 2;
  } else if (student.skills.length >= 2) {
    skillsScore = 1;
  }

  let projectsScore = 0;

  if (student.projects.length >= 2) {
    projectsScore = 2;
  } else if (student.projects.length === 1) {
    projectsScore = 1;
  }

  const internshipScore =
    student.internships.length > 0 ? 2 : 0;

  let certificationScore = 0;

  if (student.certifications.length >= 2) {
    certificationScore = 2;
  } else if (student.certifications.length === 1) {
    certificationScore = 1;
  }

  const total =
    cgpaScore +
    skillsScore +
    projectsScore +
    internshipScore +
    certificationScore;

  let category: Category;

  if (total >= 8) {
    category = "Strong";
  } else if (total >= 5) {
    category = "Average";
  } else {
    category = "Needs Improvement";
  }

  return {
    cgpa: cgpaScore,
    skills: skillsScore,
    projects: projectsScore,
    internship: internshipScore,
    certifications: certificationScore,
    total,
    category
  };
}