class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const set = new Set(numbers);
    if (set.size !== 6) {
      throw new Error('[ERROR] 중복된 번호가 있습니다.')
    }

    numbers.forEach((value) => {
      if (value < 1 || value > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45사이 숫자여야 합니다.');
      }
    })
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
