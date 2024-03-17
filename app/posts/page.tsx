"use client";

import getData from "@/services/api";
import { Posts } from "@/services/type";
import { useEffect, useState } from "react";

function Page() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    getData("posts").then((data) => setPosts(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {posts.length &&
        posts.map((post) => (
          <div className="border-2 border-gray-400 w-1/4 p-2 rounded-md">
            <h2 className="font-bold text-[20px] mb-2 capitalize">
              {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Page;
