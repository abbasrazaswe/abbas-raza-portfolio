import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const sections = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/abbasrazaswe', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abbasrazaswe', icon: Linkedin },
  { label: 'Email', href: 'mailto:sabbasraza001@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1.2fr] md:gap-8 md:py-14">
          <div>
            <a href="/#home" className="inline-block text-2xl font-semibold hover:text-neutral-500 transition-colors">Abbas Raza</a>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Polyglot Engineer</p>
            <p className="mt-5 text-sm text-neutral-600 dark:text-neutral-400">Products. Systems. Software.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-xs font-semibold uppercase text-neutral-500">Explore</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {sections.map(({ label, href }) => (
                <li key={label}><a href={href} className="hover:underline underline-offset-4">{label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase text-neutral-500">Connect</h2>
            <a href="mailto:sabbasraza001@gmail.com" className="text-sm break-all hover:underline underline-offset-4">sabbasraza001@gmail.com</a>
            <div className="mt-4 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-500 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 transition-colors"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-neutral-200 py-5 dark:border-neutral-800">
          <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Abbas Raza. All rights reserved.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" title="Back to top" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 transition-colors">
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
