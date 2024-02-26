// This is the code that is bundled for the client-side:

"use client";
import React, { useState, useEffect } from "react";

const facts = [
  { text: "noodle-eating champ 🍜" },
  { text: "listen to amount of songs more than people I met 🎤" },
  { text: "am on a mission to learn how to make pastry 🥐" },
  { text: "probably traveling somewhere 🧳" },
  { text: "collector of browser tabs" },
  { text: "knower of random facts 🤔" },
  { text: "still haven never seen any The Harry Potter series" },
  { text: "currently based in Hanoi, Vietnam" },
  { text: "a night person 🌇" },
  { text: "am ride-or-die for any brand of fried chicken restaurant 🍗" },
  {
    text: "can fall asleep on an airplane or the backseat of a car easily like a baby",
  },
  { text: "am fumbling through learning new things" },
  { text: "would probably die in cold weather" },
  { text: "like this portfolio, a constant work in progress" },
  { text: "have strong opinions on movies 🎬" },
  { text: "constantly curious" },
  { text: "in a constant state of learning something new" },
  { text: "learning how to make a great cup of coffee ☕️" },
  { text: "am, unsurprisingly, very clumsy" },
  { text: "fan of sweet treats 🍭" },
  { text: "have one too many unfinished music projects" },
  {
    text: "think one of the most difficult UX problems is explaining my job to other people",
  },
  { text: "have ruined so many school photos. Still ruining group photos" },
  { text: "not a fan of alcohol 🍸" },
  { text: "learning how to race cars 🏎" },
  { text: "can fall asleep anywhere 😴" },
  { text: "introvert, but aspiring ambivert" },
  { text: "I spend most nights watching videos of cooking before sleep 🧑‍🍳" },
  { text: "I have 3 cats 🐈" },
  { text: "I'm trying to take my time and live in the present" },
  { text: "I like to make things" },
  { text: "I've been practicing eating super spicy foods since birth" },
];

const Randomizer = () => {
  const randomFact = () => {
    let random = facts[Math.floor(Math.random() * facts.length)];
    return random;
  };

  const [isRandom, setIsRandom] = useState("");

  useEffect(() => {
    setIsRandom(randomFact());
  }, []);

  return (
    <span
      role="button"
      className="link-shadow select-none"
      onClick={() => setIsRandom(randomFact())}
      title={`Cycle randomly through all ${facts.length} fun facts!`}
    >
      {isRandom.text}
    </span>
  );
};
export default Randomizer;
