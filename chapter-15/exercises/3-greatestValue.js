class TreeNode {
  val;
  leftChild;
  rightChild;

  constructor(val, left = null, right = null) {
    this.val = val;
    this.leftChild = left;
    this.rightChild = right;
  }

  greatestValue(node) {
    if (node.rightChild) {
      this.greatestValue(node.rightChild);
    } else {
      return node.val;
    }
  }
}

// Ex:
//     50
//   /   \
// 25     75

const node1 = new TreeNode(25);
const node2 = new TreeNode(75);
const root = new TreeNode(50, node1, node2);

root.greatestValue(root);
