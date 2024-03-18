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

  printAllInReverse() {
    let currentNode = this.lastNode;

    while (currentNode) {
      console.log(currentNode.previousNode);

      currentNode = currentNode.previousNode;
    }
  }
}

const node1 = new Node("A");
const node2 = new Node("B");
const node3 = new Node("C");
const node4 = new Node("D");

node1.previousNode = null;
node1.nextNode = node2;

node2.previousNode = node1;
node2.nextNode = node3;

node3.previousNode = node2;
node3.nextNode = node4;

node4.previousNode = node3;
node4.nextNode = null;

const doublyLinkedList = new DoublyLinkedList(node1, node4);

doublyLinkedList.printAllInReverse();
