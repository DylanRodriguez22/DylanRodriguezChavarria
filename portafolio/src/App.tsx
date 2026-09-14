import { GithubIcon } from "./assets/githubIcon";
import { LinkedinIcon } from "./assets/linkedinIcon";
function App() {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/*Este div padre es el de la izquierda en pantallas grandes y el de arriba en móviles*/}

        <div className="mt-15 ml-15">
          {/*Este es donde va el nombre y que soy*/}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Dylan Rodríguez Chavarría
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Algo de Developer
            </h2>
          </div>
          {/*Este es la lista de contenidos de la página*/}
          <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
              <li>About</li>
              <li>Experience</li>
              <li>Projects</li>
            </ul>
          </nav>
          {/* Aquí las redes */}
          <div>
            <ul className="ml-1 mt-8 flex items-center gap-4">
              <li>
                <a
                  href="https://github.com/DylanRodriguez22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/dylan-rodriguez-chavarria-5ab69a353"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-6 h-6 text-gray-700 hover:text-[#0A66C2] transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*Div del contenido*/}
        <div className="pt-24 lg:w-[52%] lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            sección de about
          </section>
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            sección de experience
          </section>
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            sección de projects
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
