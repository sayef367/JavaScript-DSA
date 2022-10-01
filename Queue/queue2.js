//using an object
//this method no issue in time complexity
class Queue {
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    peek(){
        return this.items[this.front];
    }
    isEmpty(){
        return this.rear - this.front === 0;
    }
    size(){
        return this.rear - this.front;
    }
    print(){
        return this.items;
    }
}
const queue = new Queue();
console.log("It's Empty:", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("Size: ", queue.size());
console.log("Removed: ", queue.dequeue());
console.log("Current Queue:", queue.print());
console.log("Top: ", queue.peek());