export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  private?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'hirefly',
    title: 'HireFly.ai',
    subtitle: 'AI Interview & Recruitment Platform',
    description: 'Flutter recruitment demo with applicant and recruiter workflows, simulated interviews, candidate scoring, and local JSON data.',
    tech: ['Flutter', 'Dart', 'JSON', 'Local State Management'],
    github: 'https://github.com/abbasrazaswe/HireFly.ai',
  },
  {
    slug: 'cash-pilot',
    title: 'Cash Pilot',
    subtitle: 'Personal Finance & Expense Tracker',
    description: 'Cross-platform mobile application for personal finance management, income and expense tracking, and interactive analytics.',
    tech: ['Flutter', 'Dart', 'Provider', 'FL Chart'],
    github: 'https://github.com/abbasrazaswe/CashPilot',
    private: true,
  },
  {
    slug: 'face-recognition',
    title: 'ML Based Face Recognition Attendance System',
    subtitle: 'Facial Recognition Attendance System',
    description: 'Real-time biometric attendance system using FaceNet embeddings, an SVM classifier, webcam capture, and SQLite logging with a Tkinter viewer.',
    tech: ['Python', 'FaceNet', 'OpenCV', 'MTCNN', 'Scikit-Learn', 'SQLite', 'Tkinter'],
    github: 'https://github.com/abbasrazaswe/face-recognition',
  },
  {
    slug: 'memoir',
    title: 'Memoir AI Backend',
    subtitle: 'Layered Backend Architecture',
    description: 'FastAPI backend reference template separating API routes, domain logic, schema validation, and external service integrations.',
    tech: ['FastAPI', 'Python', 'Pydantic', 'REST APIs'],
    github: 'https://github.com/abbasrazaswe/memoirproject-ai-backend',
  },
  {
    slug: 'tradex',
    title: 'TradeX',
    subtitle: 'Stock Trading Simulator',
    description: 'Web application for simulated stock trading with authentication, dynamic pricing, portfolio tracking, and interactive analytics.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Recharts', 'Tailwind CSS'],
    github: 'https://github.com/abbasrazaswe/TradeX',
    live: 'https://trade-x-beta-plum.vercel.app',
  },
  {
    slug: 'boring-weather',
    title: 'Boring Weather App',
    subtitle: 'Interactive Weather & Forecast',
    description: 'Responsive weather dashboard with current conditions, five-day forecasts, and locally saved city search history.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
    github: 'https://github.com/abbasrazaswe/Boring-Weather-App',
    live: 'https://abbasrazaswe.github.io/Boring-Weather-App/',
  },
];
