class WeightedGraphVertex {
  value;
  adjacentVertices;

  constructor(value) {
    this.value = value;
    this.adjacentVertices = {};
  }

  addAdjacentVertex(vertex, weight) {
    this.adjacentVertices[vertex] = weight;
  }
}

const dallas = new WeightedGraphVertex("Dallas");
const toronto = new WeightedGraphVertex("Toronto");

dallas.addAdjacentVertex(toronto, 138);
toronto.addAdjacentVertex(dallas, 216);
