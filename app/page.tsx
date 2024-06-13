"use client";

import { Widget } from "@/components/shared/molecule/Notification/widget";
import { usePosts } from "@/utils/queries";

export default function Home() {
  const { data: posts, isLoading } = usePosts();

  return (
    <main className="w-screen h-screen px-8">
      <div className="flex flex-col items-center justify-center mt-[100px]">
        {isLoading ? <span>Carregando...</span> : <Widget />}

        <ul>
          {posts?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
