"use client";

import { useEffect, useState } from "react";

export default function SearchInput({
  onSearch,
}: {
  onSearch: (v: string) => void;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 400);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      type="text"
      placeholder="🔍 Search users..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}