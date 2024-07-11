import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import { useState } from "react";

const langList = [
  { label: "Русский", key: "Ру" },
  { label: "English", key: "En" },
];

interface LanguageProps {
  activeLang: string;
  setActiveLang: (lang: string) => void;
}

export const Language = ({ activeLang, setActiveLang }: LanguageProps) => {
  const handleSelectLang = (lang: string) => {
    setActiveLang(lang);
  };
  return (
    <Menu>
      <MenuButton className="flex items-center">
        {activeLang}
        <ArrowDownSLineIcon />
      </MenuButton>
      <MenuItems
        transition
        className="z-40 w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        anchor="bottom end"
      >
        {langList.map((lang) => (
          <MenuItem key={lang.key}>
            <button
              onClick={() => handleSelectLang(lang.key)}
              className="w-full p-1 text-left hover:bg-white/5  rounded-lg"
            >
              {lang.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
