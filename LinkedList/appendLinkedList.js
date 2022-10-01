//it's 0(n)
//Appending a new element at he start does not depend on how many other elements are there in the list

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
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
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
//append method [10,20,30]
const list = new LinkedList();
console.log('List is empty!', list.isEmpty());
list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();
console.log('List size:', list.getSize());
