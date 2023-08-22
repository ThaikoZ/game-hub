import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../store";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

interface QueryPage {
  pageSize: number;
}

const useGames = (gameQuery: GameQuery, { pageSize }: QueryPage) => {
  const fetchData = ({ pageParam = 1 }) =>
    apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        page_size: pageSize,
      },
    });
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      "games",
      {
        genre: gameQuery.genre?.name,
        platform: gameQuery.platform?.name,
        search: gameQuery.searchText,
        sort: gameQuery.sortOrder,
      },
    ],
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
