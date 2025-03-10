import { create } from "zustand";
import {
  ApiMatchesResponse,
  MatchInterface,
  Player,
  Team,
} from "../types/types";
import { BASE_URL } from "../constants/constants";

import { v4 as uuidv4 } from "uuid";
import { fetchMockMatches } from "../mocks/matchesData";

interface MatchesState {
  matches: MatchInterface[];
  isLoading: boolean;
  error: string | null;
  fetchMatches: () => Promise<void>;
  fetchMockMatches: () => Promise<void>;
}

export const useMatchesStore = create<MatchesState>((set) => ({
  matches: [],
  isLoading: false,
  error: null,

  fetchMatches: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        set({
          isLoading: false,
          error: `HTTP error! status: ${response.status}`,
        });
      }

      const data: ApiMatchesResponse = await response.json();

      if (data.ok) {
        const matchesWithIds = data.data.matches.map(
          (match: MatchInterface) => {
            const homeTeamWithIds: Team = {
              ...match.homeTeam,
              players: match.homeTeam.players.map((player: Player) => ({
                ...player,
                id: uuidv4(),
              })),
            };

            const awayTeamWithIds: Team = {
              ...match.awayTeam,
              players: match.awayTeam.players.map((player: Player) => ({
                ...player,
                id: uuidv4(),
              })),
            };

            return {
              ...match,
              id: uuidv4(),
              homeTeam: homeTeamWithIds,
              awayTeam: awayTeamWithIds,
            };
          },
        );

        set({ matches: matchesWithIds, isLoading: false });
      } else {
        set({ error: "Failed to fetch matches", isLoading: false });
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
      set({
        error:
          error instanceof Error
            ? error.message
            : "Произошла неизвестная ошибка",
        isLoading: false,
      });
    }
  },

  fetchMockMatches: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = (await fetchMockMatches()) as ApiMatchesResponse;

      if (data.ok) {
        set({ matches: data.data.matches, isLoading: false });
      } else {
        throw new Error("API returned unsuccessful response");
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
      set({
        error:
          error instanceof Error
            ? error.message
            : "Произошла неизвестная ошибка",
        isLoading: false,
      });
    }
  },
}));
