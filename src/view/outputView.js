import {Console} from "@woowacourse/mission-utils";

export async function printLottoCount(purchaseCount) {
  Console.print('');
  Console.print(`${purchaseCount}개를 구매했습니다.`);
}

export async function printLottoList(random) {
  Console.print(random);
}

export async function printResult() {
  Console.readLineAsync('당첨 통계');
  Console.readLineAsync('---');
}
