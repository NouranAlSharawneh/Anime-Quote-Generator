import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const textRef = useRef(null);
  const [quote, setQuote] = useState({
    anime: "...",
    character: "...",
    quote: "...",
  });

  useEffect(() => {
    if (textRef.current) {
      const textNode = textRef.current;
      const text = textNode.textContent;
      const modifiedText = text
        .split("")
        .map(
          (char, i) => `<span 
        style="transform:rotate(${i * 8}deg)">${char}</span>`
        )
        .join("");
      textNode.innerHTML = modifiedText;
    }
  }, []);

  async function fetchQuote() {
    const resp = await fetch("https://animechan.xyz/api/random");
    const data = await resp.json();
    setQuote(data);
    console.log(data);
  }

  useEffect(function () {
    fetchQuote();
  }, []);

  const handleClick = () => {
    fetchQuote();
  };

  return (
    <div className="container">
      <div className="title__text">anime quote generator</div>
      <div className="side__image">
        <img src="/public/assets/palece.png" alt="palece" />
      </div>
      <div className="main__image">
        <img src="/public/animegirl.png" alt="anime girl" />
      </div>
      <div className="rounded__text">
        <div className="inner__image"></div>
        <p ref={textRef}>Anime Quote Generator - Get a Randam Quote - </p>
      </div>
      <div className="quote__text">
        <h3>Geneter a random quote</h3>
        <p>{quote.quote}</p>
        <p>
          by
          <span>{quote.character}</span> from the anime{" "}
          <span>{quote.anime}</span>
        </p>
        <button onClick={handleClick}>click again</button>
      </div>
    </div>
  );
}
