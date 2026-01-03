export async function validatePurchase(purchase) {
  if (purchase % 1000 !== 0) {
    throw new Error('[ERROR]로또 구입 금액은 1000원 단위입니다. 다시 입력해주세요.');
  }
}