class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  // constructor(name, earLength) {
  //   super(name);
  //   this.earLength = earLength;
  // }

  hide() {
    alert(`${this.name} hides!`);
  }

  // オーバーライド
  stop() {
    super.stop();
    this.hide();
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5),
]

rabbits.sort(Rabbit.compare);

rabbits[0].run();