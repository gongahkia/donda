import create from "zustand";
import { Query } from "../types/query";

interface QueryState {
  queries: Query[];
  setQueries: (queries: Query[]) => void;
}

export const useQueryStore = create<QueryState>((set) => ({
  queries: [],
  setQueries: (queries) => set({ queries }),
}));
