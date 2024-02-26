class Queue {
  data = [];

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
    this.data.shift();
  }

  read() {
    return this.data[0];
  }
}
