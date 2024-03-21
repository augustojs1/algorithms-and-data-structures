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

  search(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return null;
      }
    }

    return currentNode;
  }

  insert(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        const newNode = new TrieNode();
        currentNode.children[char] = newNode;

        currentNode = newNode;
      }
    }

    currentNode.children["*"] = null;
  }

  collectAllWords(node = null, word = "", words = []) {
    let currentNode = node || this.root;

    for (const { key, childNode } in currentNode.children) {
      if (key === "*") {
        words.push(word);
      } else {
        this.collectAllWords(childNode, word + key, words);
      }
    }

    return words;
  }

  autocomplete(prefix) {
    let currentNode = this.search(prefix);

    if (!currentNode) {
      return null;
    }

    return this.collectAllWords(currentNode);
  }
}
