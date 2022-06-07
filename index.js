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

  pop() {
    this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
}

class Queue {
  #list = [];
  construction(initialValue) {
    if (initialValue) {
      this.#list = initialValue;
    }
  }
  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    const listReturn = this.#list[0];
    this.#list.unshift();
    return listReturn;
  }

  hasNext() {
    if (this.#list.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Stack, Queue };
