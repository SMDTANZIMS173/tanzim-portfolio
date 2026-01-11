import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
    {
        title: 'Expense Tracker',
        description:
          'Personal finance tracker to monitor expenses with clean UI and hosted backend.',
        role: 'Full Stack Developer',
        techStack: ['ASP.NET Core', 'Web API', 'Angular','Flutter','EF','NeonDb (PostgreSql)'],
        highlights: [
          'Backend Hosted on Render',
          'Frontend Hosted on Firebase',
          'Cloud NeonDb Database ',
          'JWT Authentication',
          'Layered or Onion architecture',
          'Real World daily-use app'
        ],
        liveLink: 'https://expensetrackertan.web.app/'
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
