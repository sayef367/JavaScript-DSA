## Queue
- The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO).
- The first element inserted into the queue is first element to be removed.
- A queue of people, People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).
- Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
- The Queue dat structure supports two main operations:
    - Enqueue, which adds an element to the rear/tail of the collection.
    - Dequeue, which removes an element from the front/head of the collection.

### Queue Visualization - Enqueue and Dequeue Operations
![](https://cdn.programiz.com/sites/tutorial2program/files/queue.png)

### Queue Usage
- Printers
- CPU task scheduling
- Callback queue in JavaScript

### Queue Implementation
- enqueue(element) - add an element to the queue
- dequeue() - remove the oldest element from the queue
- peek() - get the value of the element at the front of the queue without removing it
- isEmpty() - check if the queue is empty
- size() - get the number of elements in the queue
- print() - visualize the elements in the queue

## Circular Queue 
- The size of the queue is fixed and a single block of memory is used ad if the first element is connected to the last element.
- Also refesrred to as circular buffer or ring buffer and follows the FIFO principle.
- A circullar queue will reuse the empty block created during the dequeue operation.
- When working with queues of fixed maximum size, a circular queue is a great implementation choice.
- The Circular Queue data structure supports two main operations:
    - Enqueue, which adds an element to the rear/tail of the collection.
    - Dequeue, which removes an element from the front/head of the collection.

### Circular Queue Visualization
![](https://cdn.programiz.com/sites/tutorial2program/files/circular-queue-program.png)

### Circular Queue Usage
- Clock
- Streaming data
- Traffic lights

### Circular Queue Implementation
- enqueue(element) - add an element to the queue
- dequeue() - remove the oldest element from the queue
- isFull() - check if the queue is full
- isEmpty() - check if the queue is empty
- peek() - get the value of the element at the front of the queue without removing it
- size() - get the number of elements in the queue
- print() - visualize the elements in the queue