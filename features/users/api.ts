import { api } from "@/lib/axios";
import { User } from "./types";

export const fetchUsers = async (query: string, page: number) => {
  const limit = 10;
  const skip = (page - 1) * limit;

  const res = await api.get(`/users/search?q=${query}&limit=${limit}&skip=${skip}`);
  return res.data as { users: User[]; total: number };
};