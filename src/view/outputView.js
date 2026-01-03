import {Console} from "@woowacourse/mission-utils";

export async function printLottoCount(purchaseCount) {
  Console.readLineAsync(`${purchaseCount}개를 구매했습니다.`);
}

export async function printResult() {
  Console.readLineAsync('당첨 통계');
  Console.readLineAsync('---');
}
