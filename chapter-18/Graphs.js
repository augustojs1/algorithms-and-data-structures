class Vertex {
  value;
  adjacentVertices;

  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertex(vertex) {
    if (this.adjacentVertices.includes(vertex)) {
      return;
    }

    this.adjacentVertices.push(vertex);
    vertex.addAdjacentVertex(this);
  }
}

const alice = new Vertex("Alice");
const bob = new Vertex("Bob");
const cynthia = new Vertex("Cynthia");

alice.addAdjacentVertex(bob);
alice.addAdjacentVertex(cynthia);
bob.addAdjacentVertex(cynthia);
cynthia.addAdjacentVertex(bob);
