class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    insert(value, index){
        if(index < 0 || index > this.size){
            return ;
        }
        if(index === 0){
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }
    }
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null;
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++;
        }
        return "not found!";
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty!');
        } else {
            let current = this.head;
            let listValues = '';
            while(current){
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log("Current list:", listValues);
        }
    }
}
const list = new LinkedList();
console.log('List is empty!', list.isEmpty());
console.log('List size:', list.getSize());
list.print();

    //insert linked list
list.insert(10, 0);
list.insert(20, 0);
list.insert(30, 1);
list.insert(40, 2);
list.print();

    //reverse linked list
// list.reverse();
// list.print();

    //search in linked list
// console.log('List size:', list.getSize());
// console.log('Search:', list.search(10));

    //removedValue
// console.log('List size:', list.getSize());
// console.log('removed:', list.removeValue(40));
// list.print();
// console.log('removed:', list.removeValue(20));
// list.print();
// console.log('removed:', list.removeValue(60));
// list.print();
// console.log('List size:', list.getSize());

    //removedFrom
// console.log('List size:', list.getSize());
// console.log('removed:', list.removeFrom(10));
// console.log('removed:', list.removeFrom(0));
// list.print();
// console.log('removed:', list.removeFrom(0));
// list.print();
// console.log('List size:', list.getSize());
