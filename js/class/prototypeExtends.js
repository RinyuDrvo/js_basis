function Animal(name) {
  this.name = name;
}


Animal.prototype.eat = function () {
  alert(this.name + ' eats.');
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.jump = function () {
  alert(this.name + ' jumps!');
};

// 継承チェーンを設定
Rabbit.prototype.__proto__ = Animal.prototype;

let rabbit = new Rabbit("White Rabbit");
rabbit.eat();
rabbit.jump();
