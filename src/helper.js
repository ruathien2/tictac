export function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 4],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
  ]; //Cac truong hop win
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (cells[a] === cells[b] && cells[a] === cells[c]) {
      console.log(cells[a]);
      return cells[a]; //return ra ket qua thang
    }
  }
  return null;
}
