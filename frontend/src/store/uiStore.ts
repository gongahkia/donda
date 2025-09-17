import create from "zustand";

interface UiState {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
}));
