import React, { JSX, useState } from "react";

import HomeClient from "./components/HomeClient";

export interface SpellsType {
  slots: number[];
  spells: SpellType[];
}

interface SpellType {
  name: string;
  level: number;
}

export default function Home(): JSX.Element {
  return <HomeClient />;
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
