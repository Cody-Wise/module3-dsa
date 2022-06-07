const { Stack, Queue } = require('./index.js');

describe('Stack Class', () => {
  it('.push(item) should add a new item to the stack, and .peek() returns the top (last) item in the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('.pop() should remove the top (last) item in the stack', () => {
    const stack = new Stack([1, 2, 3]);
    stack.pop();
    expect(stack.peek()).toEqual(2);
  });

  // add more tests here...
});

describe('Queue Class', () => {
  it('.hasNext() returns false if there are no items in the queue', () => {
    const queue = new Queue();
    expect(queue.hasNext()).toEqual(false);
  });

  it('.hasNext() returns true if there is at least item in the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.hasNext()).toEqual(true);
  });

  it('.enqueue() adds an item to the queue, and .dequeue() returns the first item in the queue', () => {
    const queue = new Queue();
    queue.enqueue('cody');
    expect(queue.dequeue()).toEqual('cody');
  });

  it('.dequeue() removes the first item in the queue', () => {
    const queue = new Queue();
    queue.enqueue('cody');
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });
  // add more tests here...
});
