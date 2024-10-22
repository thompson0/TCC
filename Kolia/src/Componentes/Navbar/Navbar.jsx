import { useState } from "react";
import Link from "../Link/Link";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav>
        <section className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-60 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="produtos">Produtos</Link>
          </li>
          <li>
          <Link to="sobre">Sobre Nós</Link>
          </li>
          <li>
          <Link to="contato">Contato</Link>
          </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 xl:flex">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="produtos">Produtos</Link>
          </li>
          <li>
          <Link to="sobre">Sobre Nós</Link>
          </li>
          <li>
          <Link to="contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
}

export default Navbar;
