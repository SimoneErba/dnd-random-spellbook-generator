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
    <div className="p-4 bg-gray-100 h-screen">
      <div className="bg-red-700 p-4 rounded-md mb-4">
        <p className="text-2xl font-bold text-white">D&D Spellbook Generator</p>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 rounded-md bg-white h-full p-2">
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
