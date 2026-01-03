export async function getWinnerNumber(winningNumber) {
  return winningNumber.split(',').map(Number);
}
