import React, { useEffect, useState } from "react";

import UserSpells from "./UserSpells";

export default function SpellBookDisplay({ spellLevels }) {
  const [generatedSpellbook, setGeneratedSpellbook] = useState([]);
  const [selectedSpellNames, setSelectedSpellNames] = useState(new Set());

  const generateSpellbook = () => {
    const chosenSpells = [];
    const usedSpellNames = new Set(selectedSpellNames);

    spellLevels.slots.forEach((slots, level) => {
      if (slots <= 0) return;

      const availableSpells = spellLevels.spells.filter((spell) => spell.level === level);

      let count = 0;
      while (count < Math.min(slots, availableSpells.length)) {
        const randomSpell = availableSpells[Math.floor(Math.random() * availableSpells.length)];

        if (!usedSpellNames.has(randomSpell.name)) {
          chosenSpells.push(randomSpell);
          usedSpellNames.add(randomSpell.name);
          count++;
        }
      }

      // Fallback
      let fallbackLevel = level - 1;
      while (count < slots && fallbackLevel >= 0) {
        const fallbackSpells = spellLevels.spells.filter(
          (spell) => spell.level === fallbackLevel && !usedSpellNames.has(spell.name)
        );

        if (fallbackSpells.length > 0) {
          const fallbackSpell = fallbackSpells[Math.floor(Math.random() * fallbackSpells.length)];
          chosenSpells.push(fallbackSpell);
          usedSpellNames.add(fallbackSpell.name);
          count++;
        } else {
          fallbackLevel--;
        }
      }
    });

    setGeneratedSpellbook(chosenSpells);
  };

  useEffect(() => {
    setGeneratedSpellbook([]);
    setSelectedSpellNames(new Set());
  }, [spellLevels]);

  return (
    <div className="rounded-lg p-2">
      <button
        onClick={generateSpellbook}
        className="bg-red-700 py-2 rounded-md w-full mb-2 cursor-pointer hover:bg-red-800"
      >
        <p className="text-white font-bold text-center">Generate Spellbook</p>
      </button>

      {generatedSpellbook.length > 0 ? (
        <UserSpells spellLevels={{ spells: generatedSpellbook }} />
      ) : (
        <p className="mt-2 text-gray-900">No spells selected yet. Press "Generate Spellbook" after selecting spells.</p>
      )}
    </div>
  );
}
