export class Stack {
  data = [];

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  read() {
    return this.data[this.data.length - 1];
  }
}
