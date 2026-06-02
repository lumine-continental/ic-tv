import { create } from 'zustand';

interface GamificationState {
  visitedSections: string[];
  achievements: string[];
  markVisited: (sectionId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  reset: () => void;
}

export const useGamificationStore = create<GamificationState>((set) => ({
  visitedSections: [],
  achievements: [],
  markVisited: (sectionId) =>
    set((state) => {
      if (!state.visitedSections.includes(sectionId)) {
        return { visitedSections: [...state.visitedSections, sectionId] };
      }
      return state;
    }),
  unlockAchievement: (achievementId) =>
    set((state) => {
      if (!state.achievements.includes(achievementId)) {
        return { achievements: [...state.achievements, achievementId] };
      }
      return state;
    }),
  reset: () => set({ visitedSections: [], achievements: [] }),
}));
