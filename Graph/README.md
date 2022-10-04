## Graph
- A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges.
- Trees are a specific type of graph data structure.

### Graph Visualization
<img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-vertices-edges_0.png" width="600" />

### Types of Graph
- Directed
    - A graph in which the edges have a direction
    - Edges are usually represented by arrows pointing in the direction the graph can be traversed.
- Undirected
    - A graph in which the edges are bidirectional
    - The graph can be traversed in either direction
    - the absence of an arrow tells us that the graph is undirected

### Graph Usage
- Google maps
- Social media sites

### Graph Representation
- An adjacency matrix is a 2D array of size V x V where V is the number of vertices in the graph.
- Each row and column represent a vertex.
- If the value of any element say, matrix[i][j] is 1, it represents that is an edge connectiong vertex i and vertex j.

### Adjacency Matrix Representation
<img src="https://cdn.programiz.com/cdn/farfuture/D4ZDkt48bFeDTUG5iItf5AsHiZqU7YNCZnUBupDy3ns/mtime:1625029498/sites/tutorial2program/files/adjacency-matrix-graph.png" width="400" />
<img src="https://cdn.programiz.com/cdn/farfuture/SqnxMX0jM7bHMa6iXsjpbr5i3I0GSGDPHHtP2MnB9tg/mtime:1625113914/sites/tutorial2program/files/adjacency-matrix-representation_1.png" width="400" />

### Adjacency List Representation
<img src="https://cdn.programiz.com/cdn/farfuture/-p4ka0P4riQvs-VRZHACdhlc48nVN1iOYdZmkk8F2FA/mtime:1625029631/sites/tutorial2program/files/adjacency-list-graph.png" width="400" />
<img src="https://cdn.programiz.com/cdn/farfuture/h2DRie2qoBNmd2liy8DRj5TDcmODcVDBUZOyoPQ5AVM/mtime:1625029639/sites/tutorial2program/files/adjacency-list-representation.png" width="400" />

### Adjacency Matrix vs Adjacency List
- With an adjacency list, we only need to store the values for the edges that exist. With adjacency matrix, you store values irrespective of whether an edge exists or not. Storage wise, an adjacency list is way more efficient.
- With adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.
- An adjacency list allows you to store additional vaues with an edge such as weight of the  edge. With adjacency matrix, such information would havef to be stored externally.
