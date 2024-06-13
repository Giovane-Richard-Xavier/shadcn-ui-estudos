import axios from "axios";

const req = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPost = async (): Promise<PostType[]> => {
  const result = await req.get(`/posts`);
  return result.data;
};

export const getPostById = async (id: number): Promise<PostType> => {
  const request = await req.get(`/posts/${id}`);
  return request.data;
};
