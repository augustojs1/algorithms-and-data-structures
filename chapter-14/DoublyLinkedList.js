class Node {
  data;
  nextNode;
  previousNode;

  constructor(data) {
    this.data = data;
  }
}

class DoublyLinkedList {
  firstNode;
  lastNode;

  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);

    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.previousNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }

  removeFromFront() {
    let removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    return removedNode;
  }
}

class QueueDoublyLinked {
  queue;

  constructor() {
    this.data = new DoublyLinkedList();
  }

  enqueue(element) {
    this.data.insertAtEnd(element);
  }

  dequeue() {
    const removedNode = this.data.removeFromFront();
    return removedNode.data;
  }

  read() {
    if (!this.data.firstNode) {
      return null;
    }

    return this.data.firstNode.data;
  }
}
