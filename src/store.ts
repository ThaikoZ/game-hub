import { create } from "zustand";
import { Genre } from "./entities/Genre";
import { Platform } from "./entities/Platform";

export interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;

  setGenre: (genreObj: Genre) => void;
  setPlatform: (platformObj: Platform) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  setGenre: (genre: Genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform: Platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
