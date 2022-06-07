const { Stack, Queue } = require('./index.js');

describe('Stack Class', () => {
  it('#push should add a new item to the stack ', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('#push should add a new item to the stack ', () => {
    const queue = new Queue();
    expect(queue.hasNext()).toEqual(false);
  });

  it('#push should add a new item to the stack ', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.hasNext()).toEqual(true);
  });

  it('#push should add a new item to the stack ', () => {
    const queue = new Queue();
    queue.enqueue('cody');
    expect(queue.dequeue()).toEqual('cody');
  });
  // add more tests here...
});
