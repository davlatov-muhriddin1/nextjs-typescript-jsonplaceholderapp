"use client";

import getData from "@/services/api";
import { Todos } from "@/services/type";
import { useEffect, useState } from "react";

function Page() {
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    getData("todos").then((data) => setTodos(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {todos.length &&
        todos.map((todo) => (
          <div className="border-2 border-gray-600 py-2 px-3 rounded-md">
            <h3>{todo.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default Page;
