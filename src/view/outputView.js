import {Console} from "@woowacourse/mission-utils";
import {winningStatistics} from "../data/winningStatistics.js";

export async function printLottoCount(purchaseCount) {
  Console.print('');
  Console.print(`${purchaseCount}개를 구매했습니다.`);
}

export async function printLottoList(random) {
  Console.print(random);
}

export async function printResult(profitPercent) {
  Console.print('');
  Console.print('당첨 통계');
  Console.print('---');
  Console.print(`3개 일치 (5,000원) - ${winningStatistics.five}개`);
  Console.print(`4개 일치 (50,000원) - ${winningStatistics.four}개`);
  Console.print(`5개 일치 (1,500,000원) - ${winningStatistics.three}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics.two}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${winningStatistics.one}개`);
  Console.print(`총 수익률은 ${profitPercent}%입니다.`);
}
