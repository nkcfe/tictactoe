import { create } from "zustand";
import type { playerType } from "../module/player";

interface GameSetStore {
  firstPlayer: playerType;
  secondPlayer: playerType;

  setFirstPlayer: (firstPlayer: playerType) => void;
  setSecondPlayer: (secondPlayer: playerType) => void;

  boardSize: number;

  setBoardSize: (boardSize: number) => void;

  player1: playerType;
  player2: playerType;

  setColorPlayer1: (color: string) => void;
  setColorPlayer2: (color: string) => void;

  setIconIndexPlayer1: (iconIndex: number) => void;
  setIconIndexPlayer2: (iconIndex: number) => void;
}

const useGameSetStore = create<GameSetStore>((set) => {
  const initialPlayer1 = { name: "player1", color: "#6895D2", iconIndex: 0 };
  const initialPlayer2 = { name: "player2", color: "#D04848", iconIndex: 1 };

  return {
    player1: initialPlayer1,
    player2: initialPlayer2,
    firstPlayer: initialPlayer1,
    secondPlayer: initialPlayer2,
    boardSize: 3,

    setFirstPlayer: (firstPlayer) => set({ firstPlayer }),
    setSecondPlayer: (secondPlayer) => set({ secondPlayer }),

    setBoardSize: (boardSize) => set({ boardSize }),

    setColorPlayer1: (color: string) =>
      set((state) => {
        const updatedPlayer1 = { ...state.player1, color };
        return { player1: updatedPlayer1, firstPlayer: updatedPlayer1 };
      }),
    setColorPlayer2: (color: string) =>
      set((state) => ({ player2: { ...state.player2, color } })),

    setIconIndexPlayer1: (iconIndex: number) =>
      set((state) => {
        const updatedPlayer1 = { ...state.player1, iconIndex };
        return { player1: updatedPlayer1, firstPlayer: updatedPlayer1 };
      }),
    setIconIndexPlayer2: (iconIndex: number) =>
      set((state) => ({ player2: { ...state.player2, iconIndex } })),
  };
});

export default useGameSetStore;
