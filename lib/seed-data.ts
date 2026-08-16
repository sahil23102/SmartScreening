export type SeedStudent = {
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
};

export const seedStudents: SeedStudent[] = [
  {
    id: 1,
    name: "Aarav Gupta",
    email: "aarav.g@gmail.com",
    phone: "9876543210",
    branch: "Computer Science",
    cgpa: 9.3,
    skills: ["MERN", "AWS", "Next.js"],
    projects: ["E-commerce Web App", "Chat Application"],
    internships: ["SDE Intern at Amazon"],
    certifications: [
      "AWS Cloud Practitioner",
      "Meta Front-End Developer"
    ]
  },
  {
    id: 2,
    name: "Ishita Verma",
    email: "ishita.v21@gmail.com",
    phone: "8765432109",
    branch: "Information Technology",
    cgpa: 8.9,
    skills: ["React", "Node.js", "MongoDB"],
    projects: ["Task Management System"],
    internships: ["Frontend Intern at TCS"],
    certifications: ["Google UX Design"]
  },
  {
    id: 3,
    name: "Rohan Nair",
    email: "rnair.dev@gmail.com",
    phone: "7654321098",
    branch: "Computer Science",
    cgpa: 9.1,
    skills: ["Python", "Django", "React"],
    projects: ["Social Media Dashboard", "Portfolio App"],
    internships: ["Web Dev Intern at Infosys"],
    certifications: [
      "IBM Full Stack Software Developer"
    ]
  },
  {
    id: 4,
    name: "Megha Sharma",
    email: "megha.sharma99@gmail.com",
    phone: "6543210987",
    branch: "Software Engineering",
    cgpa: 8.5,
    skills: ["Java", "Spring Boot", "React"],
    projects: ["Inventory Management System"],
    internships: ["Java Developer Intern at Wipro"],
    certifications: ["Oracle Certified Associate"]
  },
  {
    id: 5,
    name: "Karthik Reddy",
    email: "karthik.r@gmail.com",
    phone: "9012345678",
    branch: "Computer Science",
    cgpa: 8.2,
    skills: ["JavaScript", "Express", "SQL"],
    projects: ["Weather App", "Blog Platform"],
    internships: ["Software Intern at Tech Mahindra"],
    certifications: ["HackerRank JavaScript (Basic)"]
  },
  {
    id: 6,
    name: "Sneha Desai",
    email: "snehad.22@gmail.com",
    phone: "8123456790",
    branch: "Electronics",
    cgpa: 7.6,
    skills: ["HTML", "CSS", "JavaScript"],
    projects: ["Personal Website"],
    internships: [],
    certifications: []
  },
  {
    id: 7,
    name: "Aditya Kumar",
    email: "aditya.k45@gmail.com",
    phone: "9123456781",
    branch: "Mechanical",
    cgpa: 7.1,
    skills: ["Python", "SQL"],
    projects: ["Data Analysis on Sales Data"],
    internships: [],
    certifications: ["Google Data Analytics"]
  },
  {
    id: 8,
    name: "Neha Singh",
    email: "nehasingh.01@gmail.com",
    phone: "7123456789",
    branch: "Information Technology",
    cgpa: 7.8,
    skills: ["Java", "HTML", "CSS"],
    projects: ["Library Management System"],
    internships: ["Trainee at WebX"],
    certifications: []
  },
  {
    id: 9,
    name: "Vivek Joshi",
    email: "vivek.j@gmail.com",
    phone: "8234567890",
    branch: "Computer Science",
    cgpa: 6.9,
    skills: ["C++", "HTML"],
    projects: ["Calculator App"],
    internships: [],
    certifications: []
  },
  {
    id: 10,
    name: "Pooja Patel",
    email: "poojap.tech@gmail.com",
    phone: "9345678901",
    branch: "Civil",
    cgpa: 7.4,
    skills: ["Python", "Excel"],
    projects: ["Student Database System"],
    internships: [],
    certifications: []
  },
  {
    id: 11,
    name: "Amit Chawla",
    email: "amit.c00@gmail.com",
    phone: "9456789012",
    branch: "Civil",
    cgpa: 5.9,
    skills: ["MS Word"],
    projects: [],
    internships: [],
    certifications: []
  },
  {
    id: 12,
    name: "Suman Rao",
    email: "suman.rao1@gmail.com",
    phone: "8567890123",
    branch: "Mechanical",
    cgpa: 6.1,
    skills: ["Windows", "Data Entry"],
    projects: ["Basic HTML Page"],
    internships: [],
    certifications: []
  },
  {
    id: 13,
    name: "Deepak Tiwari",
    email: "deepakt.77@gmail.com",
    phone: "7678901234",
    branch: "Electronics",
    cgpa: 5.4,
    skills: ["MS Excel"],
    projects: [],
    internships: [],
    certifications: []
  },
  {
    id: 14,
    name: "Meera Reddy",
    email: "meera.r3@gmail.com",
    phone: "9789012345",
    branch: "Chemical",
    cgpa: 6.3,
    skills: ["Basic Computer"],
    projects: [],
    internships: [],
    certifications: []
  },
  {
    id: 15,
    name: "Rajeev Menon",
    email: "rajeev.m9@gmail.com",
    phone: "8890123456",
    branch: "Mechanical",
    cgpa: 5.2,
    skills: ["MS Office"],
    projects: [],
    internships: [],
    certifications: []
  }
];