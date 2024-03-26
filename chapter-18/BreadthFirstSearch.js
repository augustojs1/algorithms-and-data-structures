class Queue {
  data = [];

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
    this.data.shift();
  }

  read() {
    return this.data[0];
  }
}

class Vertex {
  value;
  adjacentVertices;

  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  bfs_traverse(startingVertex) {
    const queue = new Queue();

    const visitedVertices = {};
    visitedVertices[startingVertex.value] = true;
    queue.enqueue(startingVertex);

    while (queue.read()) {
      const currentVertex = queue.dequeue();

      console.log(currentVertex.value);

      for (const adjacentVertice of currentVertex.adjacentVertices) {
        if (!visitedVertices[adjacentVertice.value]) {
          visitedVertices[adjacentVertice.value] = true;

          queue.enqueue(adjacentVertice);
        }
      }
    }
  }
}
