import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, Github, ExternalLink, FileText } from 'lucide-react';
import { projects } from '../data/projects';

const readmes = import.meta.glob('../../projects/*/README.md', {
  query: '?raw', import: 'default', eager: true,
}) as Record<string, string>;

export default function ProjectPage() {
  const slug = window.location.pathname.split('/')[2];
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <main className="p-8"><h1>Project not found</h1><a href="/#projects">Back to projects</a></main>;
  const index = projects.indexOf(project);
  const readme = readmes[`../../projects/${slug}/README.md`];
  const readmeUrl = `${project.github}#readme`;

  return (
    <main className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        <a href="/#projects" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
          <ArrowLeft size={16} /> All projects
        </a>
        <header className="py-10 border-b border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 mb-3">{project.subtitle}</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight break-words">{project.title}</h1>
          <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">{project.description}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-sm">
            <a href={readmeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><FileText size={16} /> README on GitHub</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><Github size={16} /> Repository</a>
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><ExternalLink size={16} /> Live demo</a>}
          </div>
          {project.private && <p className="text-sm text-neutral-500 mt-4">Private repository. GitHub access is required to view the source README.</p>}
        </header>
        <section className="py-8 border-b border-neutral-200 dark:border-neutral-800" aria-labelledby="stack-heading">
          <h2 id="stack-heading" className="text-lg font-semibold mb-4">Tech Stack</h2>
          <ul className="flex flex-wrap gap-2">{project.tech.map((tech) => <li key={tech} className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-900 rounded">{tech}</li>)}</ul>
        </section>
        <section className="py-8" aria-labelledby="readme-heading">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 id="readme-heading" className="text-lg font-semibold">README</h2>
            <a href={`/projects/${slug}/README.md`} download className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:underline"><FileText size={16} /> Download .md</a>
          </div>
          <article className="project-readme">
            <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={(url, key) => {
              const safe = defaultUrlTransform(url);
              if (!safe || /^(https?:|mailto:|#)/i.test(safe)) return safe;
              const repo = project.github.replace('https://github.com/', '');
              return key === 'src'
                ? new URL(safe, `https://raw.githubusercontent.com/${repo}/main/`).href
                : new URL(safe, `${project.github}/blob/main/`).href;
            }} components={{
              h1: ({ children }) => <h2>{children}</h2>,
              a: ({ children, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>,
            }}>
              {readme || project.description}
            </ReactMarkdown>
          </article>
        </section>
        <nav aria-label="Project navigation" className="flex justify-between gap-6 border-t border-neutral-200 dark:border-neutral-800 pt-6 text-sm">
          {index > 0 ? <a className="inline-flex items-center gap-2 min-w-0" href={`/projects/${projects[index - 1].slug}/`}><ArrowLeft size={16} className="shrink-0" /><span>{projects[index - 1].title}</span></a> : <span />}
          {index < projects.length - 1 && <a className="inline-flex items-center gap-2 text-right min-w-0" href={`/projects/${projects[index + 1].slug}/`}><span>{projects[index + 1].title}</span><ArrowRight size={16} className="shrink-0" /></a>}
        </nav>
      </div>
    </main>
  );
}
