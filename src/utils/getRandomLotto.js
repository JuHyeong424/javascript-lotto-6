import {Random} from "@woowacourse/mission-utils";
import {printLottoList} from "../view/outputView.js";

function sort(random) {
  return random.sort(function(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  })
}

export async function getRandomLotto(purchaseCount) {
  const lottoArray = [];
  let random;

  for (let i = 0; i < purchaseCount; i++) {
    random = Random.pickUniqueNumbersInRange(1, 45, 6);
    random = sort(random);
    await printLottoList(random);
    lottoArray[i] = random;
  }
  return lottoArray;
}
