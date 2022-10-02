const LinkedList = require('./headTailPointer');

class LinkedListStack {
    constructor(){
        this.list = new LinkedList();
    }
    push(value){
        this.list.prepend(value);
    }
    pop(){
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

const stack = new LinkedListStack();
console.log('List is empty!', stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log('stack size:', stack.getSize());
stack.print();
console.log('stack removed:', stack.pop());
console.log('stack top:', stack.peek());
stack.print();