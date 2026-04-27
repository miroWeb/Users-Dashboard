"use client";

import { useState } from "react";
import { useUsers } from "@/features/users/useUsers";
import UserList from "@/components/UserList";
import SearchInput from "@/components/SearchInput";
import Skeleton from "@/components/Skeleton";
import ErrorState from "@/components/ErrorState";
import Pagination from "@/components/Pagination";

export default function Page() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useUsers(query, page);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-6">

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Users Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and explore users
          </p>
        </div>

        <SearchInput
          onSearch={(v) => {
            setPage(1);
            setQuery(v);
          }}
        />

        <div className="mt-4">
          {isLoading && <Skeleton />}
          {isError && <ErrorState />}
          {data && <UserList users={data.users} />}
        </div>

        {data && (
          <Pagination
            page={page}
            total={data.total}
            onChange={setPage}
          />
        )}
      </div>
    </div>
  );
}