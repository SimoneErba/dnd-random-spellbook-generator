"use client";

import React, { JSX, useState } from "react";

import Slots from "./components/Slots";
import SpellBookDisplay from "./components/SpellBookDisplay";
import SpellInput from "./components/SpellInput";
import UserSpells from "./components/UserSpells";

export interface SpellsType {
  slots: number[];
  spells: SpellType[];
}

interface SpellType {
  name: string;
  level: number;
}

export default function Home(): JSX.Element {
  const [spellLevels, setSpellLevels] = useState<SpellsType>({ spells: [], slots: [] });

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-red-700 p-4 rounded-md mb-4">
        <p className="text-2xl font-bold text-white">D&D Spellbook Generator</p>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 rounded-md bg-white max-h-[80vh] p-2">
          {/* @ts-expect-error: Ignore TypeScript error */}
          <SpellInput onChange={setSpellLevels} />
          <UserSpells spellLevels={spellLevels} />
          <Slots onChange={setSpellLevels} />
        </div>

        <div className="flex-1 rounded-md bg-white">
          <SpellBookDisplay spellLevels={spellLevels} />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "D&D Spellbook Generator – Create Random Spellbooks Instantly",
  description:
    "Build a custom Dungeons & Dragons spellbook in seconds! Randomly generate spell lists by class and level for your next campaign.",
  keywords: [
    "D&D",
    "DnD",
    "Dungeons and Dragons",
    "spellbook generator",
    "random spellbook",
    "D&D spells",
    "D&D 5e tools",
    "D&D character tools",
  ],
  openGraph: {
    title: "D&D Spellbook Generator",
    description: "Quickly create a custom spellbook for any Dungeons & Dragons class. Fast, random, and fun!",
    url: "https://your-domain.com",
    siteName: "D&D Spellbook Generator",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "D&D Spellbook Generator Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D&D Spellbook Generator",
    description: "Build a spellbook in seconds for your next campaign!",
    images: ["https://your-domain.com/og-image.png"],
  },
};
