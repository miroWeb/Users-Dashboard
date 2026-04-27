import { User } from "@/features/users/types";
import UserCard from "./UserCard";

export default function UserList({ users }: { users: User[] }) {
  return (
    <div className="grid gap-3 mt-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}