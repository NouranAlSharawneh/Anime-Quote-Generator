import { useState } from "react";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <header>
      <div className="logo">nunu quotable&apos;s🎔</div>
      <nav className={`links ${showMenu ? "show" : ""}`}>
        <ul>
          <li>
            <a href="https://github.com/NouranAlSharawneh" target="_">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nouran-alsharawneh-1b5a7824b/?originalSubdomain=sa"
              target="_"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/NouranAlSharawneh/Anime-Quote-Generator"
              target="_"
            >
              Repo Link
            </a>
          </li>
        </ul>
      </nav>
      <div className="logo hidden">nunu quotable&apos;s🎔</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${showMenu ? "open" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </header>
  );
}
