import { ReactElement } from "react";
import { generateWinningLines } from "./generateWinningLines";

export function calculateWinner(size: number, squares: ReactElement[]) {
  const lines = generateWinningLines(size);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const firstSquareName = squares[line[0]]?.props?.player?.name;
    if (
      firstSquareName &&
      line.every(
        (index) => squares[index]?.props?.player?.name === firstSquareName
      )
    ) {
      return squares[line[0]];
    }
  }
  return null;
}
