"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash-es";

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchInput({ onSearch, placeholder = "Search courses..." }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
        className="w-full"
      />
    </div>
  );
}
