import {purchaseLotto} from "./view/inputView.js";
import {getRandomLotto} from "./utils/getRandomLotto.js";
import {printLottoCount} from "./view/outputView.js";

class App {
  async play() {
    const purchase = await purchaseLotto();
    const purchaseCount = Number(purchase) / 1000;
    await printLottoCount(purchaseCount);
    await getRandomLotto(purchaseCount);
  }
}

export default App;
