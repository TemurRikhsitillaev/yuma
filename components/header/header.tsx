"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/header/navigation";
import { SearchInput } from "@/components/search";
import { useState } from "react";
import { Language } from "@/components/language";

const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [activeLang, setActiveLang] = useState<string>("Ру");
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={122}
          height={66}
          className="object-contain"
          priority
        />
      </Link>
      <div className="flex items-center gap-4">
        <Navigation />
        <SearchInput value={searchInput} setValue={setSearchInput} />
        <Language activeLang={activeLang} setActiveLang={setActiveLang} />
      </div>
    </header>
  );
};

export default Header;
