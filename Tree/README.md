## Tree Data Structure
- A tree is a hiedrarchical data structure that consists of nodes connected by edges.
- A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
- In linear data structures, the time required to search is proportional lto the size of the data set.
- Trees however, owing to the nonliner nature allow quicker and easier access to the data.
- A tree will not contain any loops or cycles.

### Tree Visualization
<img src="https://cdn.programiz.com/sites/tutorial2program/files/tree_0.png" width="250" />

### Tree Usage
- File systems for directory structure
- A family tree
- An organisation tree
- DOM
- Chat bots
- Abstract syntax trees

### Tree Traversal
<img src="https://cdn.programiz.com/sites/tutorial2program/files/tree_traversal_sub-tree-concept.png" width="400" />
- Visiting every node in the tree.
- A hierarchical data structure like a tree can be traversed in different ways.
    - Depth First Search(DFS)
    - Breadth First Search(BFS)

### Depth Fist Search(DFS)
- The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.
- Visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree.
- Depending on the order in which we do this, there can be three types of DFS traversals.
    - Inorder
        - First, visit all the nodes in the left subtree
        - Then the root node
        - Visit all the nodes in the right subtree
    - Preorder
        - Visit root node
        - Visit all the nodes in the left subtree
        - Visit all the nodes in the right subtree
    - Postorder
        - Visit all the nodes in the left subtree
        - Visit all the nodes in the right subtree
        - Visit the root node

### Breadth Fist Search(BFS)
- Explore all nodes at the present depth prior to moving on to the nodes at the next depth level.

### BFS Traversal Approach
- Create a queue
- Enqueue the root node
- As long as a node exists in the queue
    - Dequeue the node from the front
    - Read the node's value
    - Enqueue the node's left child if it exists
    - Enqueue the node's right child if it exists

### Tree Terminology
<img src="https://cdn.programiz.com/sites/tutorial2program/files/nodes-edges_0.png" width="400" />

- Node<br>
A node is an entity that contains a key or value and pointers to its child nodes.
The last nodes of each path are called leaf nodes or external nodes that do not contain a link/pointer to child nodes.
The node having at least a child node is called an internal node.

- Edge<br>
It is the link between any two nodes.

- Root<br>
It is the topmost node of a tree.

- Height of a Node<br>
The height of a node is the number of edges from the node to the deepest leaf (ie. the longest path from the node to a leaf node).

- Depth of a Node<br>
The depth of a node is the number of edges from the root to the node.

- Height of a Tree<br>
The height of a Tree is the height of the root node or the depth of the deepest node.
<img src="https://cdn.programiz.com/sites/tutorial2program/files/height-depth_1.png" width="400" />

- Degree of a Node<br>
The degree of a node is the total number of branches of that node.

- Forest<br>
A collection of disjoint trees is called a forest.
<img src="https://cdn.programiz.com/sites/tutorial2program/files/forest_0.png" width="400" />
You can create a forest by cutting the root of a tree.

## Binary Tree 
- A binary tree is a tree data structure in which each node has at most two children They are referred to as left child and right child.

### Binary Tree Visualization
<img src="https://cdn.programiz.com/sites/tutorial2program/files/full-binary-tree_0.png" width="250" />

## Binary Search Tree(BST)
- The value of each left node must be smaller than the parent node.
- The value of each right node must be greater than the parent node.
- Each node has at most two children.

### Binary Search Tree Visualization
<img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-vs-not-bst.png" width="600" />

### Binary Search Tree Operations
- Insertion - To add a node to the tree
- Search - To find a node given its value
- DFS & BFS - To visit all nodes in the tree
- Deletion - To remove a node given it's value

### Binary Search Tree Usage
- Searching
- Sorting
- To implement abstract data types such as lookup tables and priority queues