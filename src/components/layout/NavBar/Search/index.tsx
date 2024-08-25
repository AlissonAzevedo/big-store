"use client";

import { Input } from "@/components/ui/input";
import { useProductStore } from "@/stores/productsStore/products-store";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";

const NavBarSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterByName = useProductStore(
    (state: { filterByName: any }) => state.filterByName,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterByName(value);
  };

  return (
    <div className="hidden justify-center md:flex md:w-1/3">
      <form
        action="/search"
        className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
      >
        <Input
          onChange={handleSearch}
          placeholder="Pesquisar"
          value={searchTerm}
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <Search />
        </div>
      </form>
    </div>
  );
};

export { NavBarSearch };
