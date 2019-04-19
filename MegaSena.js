class MegaSena {

  constructor() {
    this.numbers = [];
  }

  getRandomNumber() {
    let numberRandom = Math.floor(Math.random() * 60) + 1;

    if (this.numbers.indexOf(this.setLeftZero(numberRandom)) < 0) {
      this.addNumber(numberRandom);
    }

    if (this.numbers.length < 6) {
      this.getRandomNumber();
    }
  }

  addNumber(numberRandom) {
    this.numbers.push(this.setLeftZero(numberRandom));
    this.numbers.sort((a, b) => a - b);
  }

  setLeftZero(number) {
    number += '';
    return number.length === 1 ? '0' + number : number;
  }
}
