class Node {
  data;
  nextNode;

  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  firstNode;

  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  read(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;

      if (!currentNode) {
        return null;
      }
    }

    return currentNode.data;
  }

  indexOf(value) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    do {
      if (currentNode.data === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex += 1;
    } while (currentNode);

    return null;
  }

  insertAtIndex(index, value) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.firstNode;

      this.firstNode = newNode;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  deleteFromIndex(index) {
    if (index === 0) {
      this.firstNode = this.firstNode.nextNode;
      return;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentNode < currentIndex - 1) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    let nodeAfterDeletedNode = currentNode.nextNode.nextNode;
    currentNode.nextNode = nodeAfterDeletedNode;
  }
}

// Creating the nodes
const node1 = new Node("Once");
const node2 = new Node("Upon");
node1.nextNode = node2;
const node3 = new Node("A");
node2.nextNode = node3;
const node4 = new Node("Time");
node3.nextNode = node4;

// Creating a linked list using these nodes
const list = new LinkedList(node1);

// reading
// list.read(2);

// searching
// list.indexOf("A");

// insertion
list.insertAtIndex(1);
