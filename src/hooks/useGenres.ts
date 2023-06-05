import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
