import {winningStatistics} from "../data/winningStatistics.js";

export async function getProfitPercent(purchase) {
  const total = (5000 * winningStatistics.five) + (50000 * winningStatistics.four) + (1500000 * winningStatistics.three) + (30000000 * winningStatistics.two) + (2000000000 * winningStatistics.one);
  return (total / purchase * 100).toFixed(1);
}
