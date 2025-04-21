import React, { useState } from "react";
import Select from "react-select";

import spellsData from "../../../assets/spells.json";
import { SpellsType } from "../page";

interface OptionType {
  label: string;
  value: string;
  level: number;
}

export default function SpellInput({ onChange }: { onChange: (spells: { name: string; level: number }[]) => void }) {
  const options: OptionType[] = spellsData.map((spell: { name: string; level: number }) => ({
    label: spell.name,
    value: spell.name,
    level: spell.level,
  }));

  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  const handleChange = (selected: OptionType[] | null) => {
    const newSelection = selected || [];
    setSelectedOptions(newSelection);

    const selectedSpells = newSelection.map((opt) => ({
      name: opt.label,
      level: opt.level,
    }));
    // @ts-expect-error: Ignore TypeScript error
    onChange((prev: SpellsType) => ({
      ...prev,
      spells: selectedSpells,
    }));
  };

  return (
    <div className="mb-4">
      <label className="font-semibold mb-2 block">Select Spells:</label>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        className="text-black"
        classNamePrefix="react-select"
        placeholder="Choose your spells..."
        components={{ MultiValue: () => null }}
      />
    </div>
  );
}
