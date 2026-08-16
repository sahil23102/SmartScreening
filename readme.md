# Smart Candidate Screening System

A simple and explainable candidate screening system for college placement cells.

## Features

- View all students
- Search students
- Filter by minimum CGPA
- Filter by skill
- Filter by category
- Automatically categorize candidates
- View score breakdown
- View student details
- Dashboard statistics
- PostgreSQL persistence
- Handles missing internships, projects and certifications

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- PostgreSQL
- node-postgres

## Categorization Logic

Each candidate receives a score out of 11.

### CGPA

- 8.5 or above = 3 points
- 7.5–8.49 = 2 points
- Below 7.5 = 1 point

### Skills

- 4 or more = 2 points
- 2–3 = 1 point
- 0–1 = 0 points

### Projects

- 2 or more = 2 points
- 1 = 1 point
- 0 = 0 points

### Internship

- Internship present = 2 points
- No internship = 0 points

### Certifications

- 2 or more = 2 points
- 1 = 1 point
- 0 = 0 points

### Final Category

- 8–11 = Strong
- 5–7 = Average
- 0–4 = Needs Improvement

The purpose of the scoring system is not to claim that one formula perfectly measures employability. It provides a consistent and explainable framework for placement coordinators.

## Local Setup

Install dependencies:

```bash
npm install