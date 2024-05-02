"use client";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function Projects() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div>
      <h1>Projects</h1>
      <main>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <button
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            <div>This is the front of the card.</div>
          </button>

          <button
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            <div>This is the back of the card.</div>
          </button>
        </ReactCardFlip>
      </main>
    </div>
  );
}
