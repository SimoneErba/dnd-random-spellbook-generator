import React from "react";

export default function UserSpells({ spellLevels }) {
  // Group spells by level
  const spellsByLevel: Record<string, string[]> = {};
  spellLevels?.spells?.forEach((spell) => {
    if (!spellsByLevel[spell.level]) {
      spellsByLevel[spell.level] = [];
    }
    spellsByLevel[spell.level].push(spell.name);
  });

  return (
    <div className="flex-1">
      {Object.entries(spellsByLevel)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([level, spells]) => (
          <div key={level} className="mb-4 border-t-2 p-2">
            <p className="text-lg font-bold mb-1 text-red-700">Level {level}</p>
            {spells.map((spell, idx) => (
              <p key={idx} className="ml-2 text-gray-900">
                • {spell}
              </p>
            ))}
          </div>
        ))}
    </div>
  );
}
