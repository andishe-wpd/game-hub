import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}


const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>("parent_platforms").then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
