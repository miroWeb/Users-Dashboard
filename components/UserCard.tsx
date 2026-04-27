import { User } from "@/features/users/types";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4">
      
      <img
        src={user.image}
        alt={user.firstName}
        className="w-14 h-14 rounded-full object-cover"
      />

      <div className="flex-1">
        <div className="font-semibold text-gray-800">
          {user.firstName} {user.lastName}
        </div>
        <div className="text-sm text-gray-500">
          {user.email}
        </div>
      </div>

      <div className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
        {user.age} yrs
      </div>
    </div>
  );
}