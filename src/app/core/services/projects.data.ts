import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Expense Tracker',
    description:
      'Personal finance tracker to monitor expenses with clean UI and hosted backend.',
    role: 'Full Stack Developer',
    techStack: ['ASP.NET Core', 'Web API', 'Angular','Flutter','EF','NeonDb (PostgreSQL)'],
    highlights: [
      'Backend Hosted on Render',
      'Frontend Hosted on Firebase',
      'Cloud NeonDb Database',
      'JWT Authentication',
      'Layered / Onion architecture',
      'Real World daily-use app'
    ],
    githubLink: 'https://github.com/SMDTANZIMS173/ExpenseTracker',
    liveLink: 'https://expensetrackertan.web.app/'
  },
  {
    title: 'Personal Portfolio',
    description:
      'My personal developer portfolio showcasing my projects, skills, and work experience, fully built using Angular.',
    role: 'Frontend Developer',
    techStack: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
    highlights: [
      'Responsive and interactive UI',
      'Showcases all my projects and skills',
      'Downloadable Resume feature',
      'GitHub and Live project links integrated',
      'Animations and Netflix-style buttons'
    ],
    liveLink: 'http://localhost:4200/', // replace with deployed URL when live
    githubLink: 'https://github.com/SMDTANZIMS173/tanzim-portfolio'
  },
  {
    title: 'Online Job Search Application',
    description:
      'A full-stack job portal enabling users to search, apply, and manage job postings.',
    role: 'Full Stack Developer',
    techStack: ['ASP.NET Core MVC', 'SQL Server', 'Angular'],
    highlights: [
      'End-to-end application development',
      'Authentication & role-based access',
      'Deployed and tested in real scenarios'
    ],
    githubLink: 'https://github.com/your-link'
  },
  {
    title: 'AI Chatbot (RAG Based)',
    description:
      'AI-powered chatbot to handle school admission queries using Retrieval Augmented Generation.',
    role: 'Backend & AI Integration',
    techStack: ['ASP.NET Core', 'Web API', 'AI/ML'],
    highlights: [
      'Context-aware responses',
      'Reduced manual query handling',
      'Real-world use case'
    ]
  }
];
