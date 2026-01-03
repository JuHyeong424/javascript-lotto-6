import {Console} from "@woowacourse/mission-utils";

export async function purchaseLotto() {
  Console.readLineAsync('구입금액을 입력해 주세요.');
}

export async function winningNumber() {
  Console.readLineAsync('당첨 번호를 입력해 주세요.');
}

export async function result() {
  Console.readLineAsync('당첨 통계');
  Console.readLineAsync('---');
}