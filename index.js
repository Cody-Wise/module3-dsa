class Stack {
  #list = [];

  constructor(initialValue) {
    if (initialValue) {
      this.#list = initialValue;
    }
  }

  push(item) {
    this.#list.push(item);
  }

  pop(item) {
    this.#list.pop(item);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
}

class Queue {}

module.exports = { Stack, Queue };
