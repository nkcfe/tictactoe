export const generateWinningLines = (size: number) => {
  let lines = [];
  let diagonal1 = [];
  let diagonal2 = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    let col = [];

    for (let j = 0; j < size; j++) {
      row.push(i * size + j);
      col.push(i + j * size);
    }
    lines.push(row);
    lines.push(col);
    diagonal1.push(i * size + i);
    diagonal2.push(i * size + (size - i - 1));
  }

  lines.push(diagonal1);
  lines.push(diagonal2);

  return lines;
};
