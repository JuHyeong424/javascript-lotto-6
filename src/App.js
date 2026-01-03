import {getBonusNumber, getWinningNumber, purchaseLotto} from "./view/inputView.js";
import {getRandomLotto} from "./utils/getRandomLotto.js";
import {printLottoCount, printResult} from "./view/outputView.js";
import {getWinnerNumber} from "./utils/getWinnerNumber.js";
import {getWinningStatistics} from "./utils/getWinningStatistics.js";
import {getProfitPercent} from "./utils/getProfitPercent.js";
import {Console} from "@woowacourse/mission-utils";
import {validatePurchase} from "./utils/validate.js";

class App {
  async play() {
    let purchase;
    while (true) {
      try {
        purchase = await purchaseLotto();
        await validatePurchase(Number(purchase));
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
    const purchaseCount = Number(purchase) / 1000;
    await printLottoCount(purchaseCount);
    const lottoArray = await getRandomLotto(purchaseCount);
    const winningNumber = await getWinningNumber();
    const bonusNumber = await getBonusNumber();
    const winningArray = await getWinnerNumber(winningNumber);
    await getWinningStatistics(lottoArray, winningArray, Number(bonusNumber));
    const profitPercent = await getProfitPercent(Number(purchase));
    await printResult(profitPercent);
  }
}

export default App;
