class Vertex {
  value;
  adjacentVertices;

  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  dfsTraverse(vertex, visitedVertices = {}) {
    visitedVertices[vertex.value] = true;

    console.log(vertex.value);

    for (const vertex of vertex.adjacentVertices) {
      if (visitedVertices[vertex.value]) {
        continue;
      }

      this.dfsTraverse(vertex, visitedVertices);
    }
  }

  dfs(vertex, searchValue, visitedVertices = {}) {
    let vertexBeingSearched;

    if (vertex.value === searchValue) {
      return vertex;
    }

    visitedVertices[vertex.value] = true;

    for (const adjacentVertex of vertex.adjacentVertices) {
      if (visitedVertices[adjacentVertex]) {
        continue;
      }

      if (adjacentVertex.value === searchValue) {
        return adjacentVertex;
      }

      vertexBeingSearched = this.dfs(
        adjacentVertex,
        searchValue,
        visitedVertices
      );

      if (vertexBeingSearched) {
        return vertexBeingSearched;
      }

      return null;
    }
  }

  bfs_traverse(startingVertex) {}
}
