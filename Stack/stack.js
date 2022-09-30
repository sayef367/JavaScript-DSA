class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
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
const stack = new Stack();
console.log("Is Empty: " + stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Size: " + stack.size()); //Total stack
console.log("Stack are: " + stack.print());
console.log("Pop: " + stack.pop()); //remove top of the stack
console.log("Peek: " + stack.peek()); //currently top of the stack
console.log("Stack are: " + stack.print());