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
        return this.items;
    }
}
const stack = new Stack();
console.log("Is Empty:", stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("Size:", stack.size());
console.log("Current Stack:", stack.print());
console.log("Removed:", stack.pop());
console.log("Top:", stack.peek()); 
console.log("Current Stack:", stack.print());