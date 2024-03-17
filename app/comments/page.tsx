"use client";

import getData from "@/services/api";
import { Comments } from "@/services/type";
import { useEffect, useState } from "react";

function Page() {
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    getData("comments").then((data) => setComments(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {comments.length &&
        comments.map((comment) => (
          <div className="border-2 border-gray-500 w-1/4 p-3 rounded-md">
            <h2 className="font-bold">{comment.name}</h2>
            <p className="my-2">{comment.body}</p>
            <h4 className="text-blue-500">{comment.email}</h4>
          </div>
        ))}
    </div>
  );
}

export default Page;
