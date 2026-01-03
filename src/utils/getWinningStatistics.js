import {winningStatistics} from "../data/winningStatistics.js";
import Lotto from "../Lotto.js";

export async function getWinningStatistics(lottoArray, winningArray, bonusNumber) {
  let count;
  new Lotto(winningArray);

  for (let i = 0; i <lottoArray.length; i++) {
    count = 0;

    new Lotto(lottoArray[i]);

    const include = lottoArray[i].filter(value => winningArray.includes(value));
    count = include.length;

    switch (count) {
      case 3:
        winningStatistics.five += 1;
        break;
      case 4:
        winningStatistics.four += 1;
        break;
      case 5:
        if (lottoArray[i].filter(value => value === bonusNumber) > 0) {
          winningStatistics.two += 1;
          break;
        }
        winningStatistics.three += 1;
        break;
      case 6:
        winningStatistics.one += 1;
        break;
    }
  }
}