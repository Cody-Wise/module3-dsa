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
    return this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  get readableList() {
    return this.#list.toString();
  }

  get listAsArray() {
    return this.#list;
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
    return this.#list.shift();
  }

  hasNext() {
    if (this.#list.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

function reverseArray(array) {
  const reversedStack = new Stack();
  for (let i = array.length - 1; i >= 0; i--) {
    reversedStack.push(array.pop());
  }
  return reversedStack;
}

module.exports = { Stack, Queue, reverseArray };
