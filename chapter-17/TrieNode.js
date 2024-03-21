class TrieNode {
  children;

  constructor() {
    this.children = {};
  }
}

class Trie {
  root;

  constructor() {
    this.root = new TrieNode();
  }
}

const trieNode1 = new TrieNode();
const trieNode2 = new TrieNode();
const trieNode3 = new TrieNode();

const trieNodeRoot = new TrieNode();

trieNodeRoot.children = {
  a: trieNode1,
  b: trieNode2,
  c: trieNode3,
};
