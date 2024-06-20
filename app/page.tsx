"use client";

import { Widget } from "@/components/shared/molecule/Notification/widget";
import { Several } from "@/components/shared/molecule/Several";
import { usePosts } from "@/utils/queries";

export default function Home() {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="">
      {/* {isLoading ? <span>Carregando...</span> : <Widget />} */}
      <Widget />
      {/* <Several /> */}
    </div>
  );
}
