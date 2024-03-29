import React from "react";

class AnimeQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        "Believe in yourself. Even when others don't.",
        "Love is a beautiful pain worth enduring.",
        "Dreams are the fuel that feeds the journey.",
        "In a world of chaos, find your own melody.",
        "Embrace the scars of your past; they make you stronger.",
        "Courage is not the absence of fear, but overcoming it.",
        "The heart knows truths the eyes cannot see.",
        "In solitude, one finds the strength to carry on.",
        "Cherish the moments that make life worth living.",
        "With every step, forge your own destiny fearlessly.",
        "Destiny weaves a tapestry only we can unravel.",
        "A kind word can brighten even the darkest day.",
        "Strength lies in protecting those we hold dear.",
        "True strength is found in accepting one's weaknesses.",
        "Let the echoes of your actions reverberate through eternity.",
        "Through tears and laughter, we find our true selves.",
        "The past shapes us, but the future defines us.",
        "In friendship, we discover the essence of true power.",
        "In the end, what we protect defines who we are.",
        "The journey may be harsh, but the destination is beautiful.",
        "With every defeat, we learn to stand taller.",
        "With every goodbye, a new journey begins.",
        "Even in darkness, the light of hope shines bright.",
        "Forgiveness is the first step to true freedom.",
        "Words have power; use them wisely and with kindness.",
        "A single moment can change the course of destiny.",
        "In love, there's both pain and joy intertwined.",
        "Every scar tells a story of battles fought and won.",
        "In solitude, one discovers the strength within.",
        "Through adversity, we find the courage to soar higher.",
        "Love knows no boundaries; it transcends time and space.",
        "In the eyes of adversity, our true character is revealed.",
        "Sometimes, the hardest battles are fought within ourselves.",
        "The path to greatness is paved with determination and perseverance.",
        "The scars of the past shape us into who we are.",
        "With every step forward, leave fear behind.",
        "Love blooms even in the harshest of winters.",
        "Strength isn't just physical; it's also found in kindness.",
        "In the darkness, find the light that guides you.",
        "Friendship is a bond that transcends time and space.",
        "Even in the face of despair, hope shines brightest.",
        "In the depths of despair, find the strength to rise.",
        "With every goodbye, a new beginning awaits.",
        "In the embrace of love, find solace and strength.",
        "The strongest warriors carry the heaviest burdens.",
        "In the symphony of life, find your own melody.",
        "Love knows no boundaries, transcending time and space.",
        "Even in the darkest night, the stars still shine.",
        "Through every trial, let love be your guiding light.",
        "Courage isn't the absence of fear, but the triumph over it.",
        "In every ending, a new beginning awaits.",
        "In the tapestry of fate, find your own thread.",
        "The truest strength lies in protecting those we cherish.",
        "Cherish the memories that make life worth living.",
        "In every battle, find the courage to stand tall.",
        "With every step forward, leave doubt behind.",
        "Even in despair, find the courage to hope.",
        "In the face of adversity, find the strength to persevere.",
        "Love is the light that guides us through darkness.",
        "In the symphony of life, find your own rhythm.",
        "Even in the darkest night, there's still a flicker.",
        "Strength isn't just physical; it's also in kindness.",
        "Even the smallest light can banish the deepest darkness.",
        "In every goodbye, there's a new journey waiting.",
        "The truest strength is found in embracing one's vulnerabilities.",
        "In every battle, find the courage to believe.",
        "The scars of the past shape us into warriors.",
        "In every ending, a new chapter begins.",
        "In the depths of despair, find the will to rise.",
        "Love blooms in the most unexpected places.",
        "In every journey, find the courage to begin.",
        "True strength is found in protecting what matters most.",
        "In the silence, find the strength to speak.",
        "Even in the darkest of times, hope endures.",
        "The greatest battles are fought within the heart.",
        "In every goodbye, find the courage to smile.",
        "With every step forward, leave the past behind.",
        "In every trial, find the strength to persevere.",
        "Even the smallest spark can ignite the greatest flame.",
        "With every fall, find the strength to rise again.",
        "In every dream, find the courage to believe.",
        "The scars of the past are a testament to strength.",
        "In every setback, find the will to continue.",
        "In every tear, find the strength to smile.",
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Anime Quotes</h1>
        <ul>
          {this.state.quotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnimeQuotes;
