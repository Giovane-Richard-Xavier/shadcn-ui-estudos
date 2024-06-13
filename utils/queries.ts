import { useQuery } from "@tanstack/react-query";
import { getPost, getPostById } from "./api";

export const usePosts = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });
  return query;
};

export const usePost = (id: number) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostById(id),
  });
