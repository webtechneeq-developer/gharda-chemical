// store/useLoaderStore.js
import { create } from "zustand";

export const useLoaderStore = create((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
