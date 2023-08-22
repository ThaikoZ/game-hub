import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  const fetchData = () => apiClient.get(slug);

  const { data, error, isLoading } = useQuery({
    queryKey: ["game", slug],
    queryFn: fetchData,
    staleTime: ms("24h"),
  });

  return { data: data, error: error, isLoading: isLoading };
};

export default useGame;
