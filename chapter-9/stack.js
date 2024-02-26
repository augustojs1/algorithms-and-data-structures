class Stack {
  data = [];

  push(element) {
    this.data.push(element);
  }

  pop() {
    this.data.pop();
  }

  read() {
    return this.data[this.data.length - 1];
  }
}
