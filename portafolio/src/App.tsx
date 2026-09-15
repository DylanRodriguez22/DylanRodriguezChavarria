import { useEffect, useRef, useState } from "react";
import { GithubIcon } from "./assets/githubIcon";
import { LinkedinIcon } from "./assets/linkedinIcon";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const PROJECTS = [
  {
    title: "Nombre del proyecto 1",
    description:
      "Breve descripción de qué hace el proyecto y qué problema resuelve.",
    image: "/images/projects/proyecto-1.png",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/DylanRodriguez22/proyecto-1",
  },
  {
    title: "Nombre del proyecto 2",
    description:
      "Breve descripción de qué hace el proyecto y qué problema resuelve.",
    image: "/images/projects/proyecto-2.png",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/DylanRodriguez22/proyecto-2",
  },
  {
    title: "Nombre del proyecto 3",
    description:
      "Breve descripción de qué hace el proyecto y qué problema resuelve.",
    image: "/images/projects/proyecto-3.png",
    tags: ["Next.js", "PostgreSQL"],
    link: "https://github.com/DylanRodriguez22/proyecto-3",
  },
];
function App() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-900 selection:bg-teal-300 selection:text-slate-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Columna izquierda: fija en pantallas grandes */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="#" className="hover:text-teal-300 transition-colors">
                  Dylan Rodríguez Chavarría
                </a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Desarrollador de Software
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                Construyo experiencias web accesibles y con atención al detalle.
              </p>

              {/* Nav */}
              <nav className="nav hidden lg:block" aria-label="En esta página">
                <ul className="mt-16 w-max">
                  {NAV_ITEMS.map(({ id, label }) => {
                    const isActive = activeSection === id;
                    return (
                      <li key={id} className="group">
                        <a href={`#${id}`} className="flex items-center py-3">
                          <span
                            className={`mr-4 h-px transition-all ${
                              isActive
                                ? "w-16 bg-slate-200"
                                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                              isActive
                                ? "text-slate-200"
                                : "text-slate-500 group-hover:text-slate-200"
                            }`}
                          >
                            {label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Redes */}
            <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0">
              <li>
                <a
                  href="https://github.com/DylanRodriguez22"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-6 w-6 text-slate-400 hover:text-teal-300 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/dylan-rodriguez-chavarria-5ab69a353"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-6 w-6 text-slate-400 hover:text-teal-300 transition-colors" />
                </a>
              </li>
            </ul>
          </header>

          {/* Columna derecha: contenido */}
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="leading-relaxed text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nec arcu eget elit ultrices consequat. Duis eleifend
                  tellus sed nisl consequat, vitae ultrices quam eleifend.
                  Integer accumsan diam sagittis turpis mattis, eu rutrum nulla
                  ornare. Nulla facilisi. Sed sapien turpis, ultricies vel
                  tortor nec, euismod porta enim.
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div className="group relative -mx-4 rounded-md px-4 py-4 transition-colors hover:bg-slate-800/50">
                <h3 className="font-medium text-slate-200">Puesto · Empresa</h3>
                <p className="mt-1 text-sm text-slate-500">2024 — Presente</p>
                <p className="mt-2 leading-relaxed text-slate-400">
                  Descripción breve de tus responsabilidades y logros.
                </p>
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>

              <ul className="group/list">
                {PROJECTS.map((project) => (
                  <li key={project.title} className="mb-12">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item -mx-4 grid grid-cols-8 gap-4 rounded-md px-4 py-4 transition-colors sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-slate-800/50"
                    >
                      {/* Imagen */}
                      <div className="col-span-3 sm:order-2 sm:col-span-2">
                        <img
                          src={project.image}
                          alt={`Captura de pantalla del proyecto ${project.title}`}
                          className="rounded border-2 border-slate-200/10 transition group-hover/item:border-slate-200/30 object-cover aspect-video"
                          loading="lazy"
                        />
                      </div>

                      {/* Texto */}
                      <div className="col-span-5 sm:order-1 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200 group-hover/item:text-teal-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          {project.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                          {project.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
