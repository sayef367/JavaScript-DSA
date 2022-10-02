const LinkedList = require('./headTailPointer');

class LinkedListQueue {
    constructor(){
        this.list = new LinkedList();
    }
    enqueue(value){
        this.list.append(value);
    }
    dequeue(){
        return this.list.removeFront();
    }
    peek(){
        return this.list.head.value;
    }
    isEmpty(){
        return this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize();
    }
    print(){
        return this.list.print();
    }
}
const queue = new LinkedListQueue();
console.log('List is empty!', queue.isEmpty());

    //add in LinkedListQueue
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);
console.log('queue size:', queue.getSize());
queue.print();

console.log('queue removed:', queue.dequeue());
console.log('queue top:', queue.peek());
queue.print();