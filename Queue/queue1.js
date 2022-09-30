// this method issue in time complexity
class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        return this.items.toString();
    }
}
const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Size: " + queue.size());
console.log("Queue are: " + queue.print());
console.log("Dequeue: " + queue.dequeue());
console.log("Peek: " + queue.peek());
console.log("Queue are: " + queue.print());
