import { useEffect, useRef } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <section>
      <NavBar />
      <HeroSection />
    </section>
  );
}

export default App;

function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const textNode = textRef.current;
      const text = textNode.textContent;
      const modifiedText = text
        .split("")
        .map(
          (char, i) => `<span 
        style="transform:rotate(${i * 9}deg)">${char}</span>`
        )
        .join("");
      textNode.innerHTML = modifiedText;
    }
  }, []);

  return (
    <div className="container">
      <div className="title__text">anime quote generator</div>
      <div className="side__image">image</div>
      <div className="main__image">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
        praesentium veritatis eum non, corrupti at id cupiditate eveniet
        excepturi molestias. Laborum deleniti magni illum dignissimos quo
        cupiditate ratione fugit eveniet.
      </div>
      <div className="rounded__text">
        <div className="inner__image"></div>
        <p ref={textRef}>- Anime Quote Generator - Platform - </p>
      </div>
      <div className="quote__text">quote text</div>
    </div>
  );
}
