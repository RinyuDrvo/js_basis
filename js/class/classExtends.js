class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    alert(`${this.name} hides!`);
  }

  // オーバーライド
  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit", 10);

alert(rabbit.name);
alert(rabbit.earLength);