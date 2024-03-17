"use client";

import { useEffect, useState } from "react";
import getData from "@/services/api";
import { Users } from "@/services/type";

export default function Home() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    getData("users").then((data) => setUsers(data));
  }, []);

  return (
    <main className="flex flex-wrap justify-center gap-5">
      {users.map((user) => (
        <div className="flex items-center py-3 px-2 border-2 border-gray-600 rounded-md">
          <div className="w-11 h-11 mb-2 mr-3 rounded-full bg-gray-600 flex justify-center items-center">
            <h1 className="text-white text-2xl">{user.name[0]}</h1>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <h2 className="font-bold mr-3">{user.name}</h2>
              <p className="mr-2">@{user.username}</p>
              <p>www.{user.website}</p>
            </div>
            <div className="flex items-center">
              <h4 className="mr-3">{user.email}</h4>
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
