import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./api";

export const useUsers = (query: string, page: number) => {
  return useQuery({
    queryKey: ["users", query, page],
    queryFn: () => fetchUsers(query, page),
    placeholderData: (prev) => prev,
  });
};