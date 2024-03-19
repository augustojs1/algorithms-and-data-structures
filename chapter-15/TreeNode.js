class TreeNode {
  val;
  leftChild;
  rightChild;

  constructor(val, left = null, right = null) {
    this.val = val;
    this.leftChild = left;
    this.rightChild = right;
  }

  search(searchValue, node) {
    if (!node || node.value === searchValue) {
      return node;
    }

    if (searchValue < node.value) {
      return this.search(searchValue, node.leftChild);
    }

    if (searchValue > node.value) {
      return this.search(searchValue, node.rightChild);
    }
  }

  insert(value, node) {
    if (value < node.value) {
      if (!node.leftChild) {
        node.leftChild = new TreeNode(value);
      } else {
        this.insert(value, node.leftChild);
      }
    } else if (value > node.value) {
      if (!node.rightChild) {
        node.rightChild = new TreeNode(value);
      } else {
        this.search(value, node.rightChild);
      }
    }
  }

  delete(valueToDelete, node) {
    if (!node) {
      return null;
    }

    if (valueToDelete < node.value) {
      node.leftChild = this.delete(valueToDelete, node.leftChild);
      return node;
    } else if (valueToDelete > node.value) {
      node.rightChild = this.delete(valueToDelete, node.rightChild);
    } else if (valueToDelete === node.value) {
      if (!node.leftChild) {
        return node.leftChild;
      }
    }
  }

  traverseAndPrint(node) {
    if (!node) {
      return;
    }

    this.traverseAndPrint(node.leftChild);
    console.log(node);
    this.traverseAndPrint(node.rightChild);
  }
}

// Ex:
//     50
//   /   \
// 25     75

const node1 = new TreeNode(25);
const node2 = new TreeNode(75);
const root = new TreeNode(50, node1, node2);
