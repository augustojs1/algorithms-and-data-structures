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

  getLastElement() {
    let currentNode = this.firstNode;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }
}

const node1 = new Node("A");
const node2 = new Node("B");
node1.nextNode = node2;
const node3 = new Node("C");
node2.nextNode = node3;
const node4 = new Node("D");
node3.nextNode = node4;

const list = new LinkedList(node1);

console.log(list.getLastElement());
