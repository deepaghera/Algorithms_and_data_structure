

//      HEAD => LINKEDLIST 
//      OPERATION :- 1. append,2. prepend,3. remove, 4. insert,5. printlist
/*
class Node{
    constructor(value,next = null){
        this.value = value,
        this.next  = next
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const tempOb = new Node(value);
        this.tail.next = tempOb;
        this.tail = tempOb;
        this.length++;
        return this;
    }

    prepend(value) {
        const tempOb = new Node(value);
        tempOb.next = this.head;
        this.head = tempOb;
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let tempOb = this.head;
        while(tempOb !== null){
            arr.push(tempOb.value);
            tempOb = tempOb.next;
        }
        console.log(arr);
    }

    insert(index,value) {
        
        if(index < 0 || this.length <= index || (this.length - 1) === index) {
            console.log("we append ");
            return this.append(value);

        }
        else if(index == 0 ) {
            return this.prepend(value);
        }


        let tempOb = new Node(value);
        let befor = this.traverseToIndex(index - 1);
        let after = befor.next;
        befor.next = tempOb;
        tempOb.next = after
        this.length++;
        return this;


    }

    traverseToIndex(index) {
        let i = 0;
        let tempOb = this.head;
        while(index !== i) {
            tempOb = tempOb.next;
            i++;
        }
        console.log("insert",tempOb);
        return tempOb;
    }

    remove(index) {
        if(index >= this.length || index < 0) {
            console.log("index not define");
            return  "index not define";
        }
        else if(index === 0) {
            this.length--;
            return this.head = this.head.next;
        }
        let current  = this.traverseToIndex(index - 1);
        current.next = current.next.next;
        this.length--;
        return this;
    
    }


}

let myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.insert(4,80);
myLinkedList.remove(-5);
myLinkedList.printList();
console.log(myLinkedList);
*/



//      HEAD => DOUBLYLINKEDLIST 
//      OPERATION :- 1. append,2. prepend,3. remove, 4. insert,5. printlist


class Node{
    constructor(value,next = null,prev = null){
        this.value = value,
        this.next = next,
        this.prev = prev
    }

}

class DoublyLinkedList{
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let tempOb = new Node(value);
        this.tail.next = tempOb;
        tempOb.prev = this.tail;
        this.tail = tempOb;
        this.length++;
        return this; 
    }

    prepend(value) {
        let tempOb = new Node(value,this.head);
        this.head.prev = tempOb;
        this.head = tempOb;
        this.length++;
        return this;

    }

    printList() {
        let arr = [];
        let current = this.head;
        while(current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
        return arr;
    }

    insert(index, value) {
        if(index > this.length || index < 0 ) {
            console.log("Index Not define");
            return "Index not define";
        }
        else if( index === this.length) {
            return this.append(value);
        }
        else if( index === 0) {
            return this.prepend(value);
        }
        let tempOb = new Node(value);
        let befor = this.traverseToIndex(index - 1);
        let after  = befor.next;
        befor.next = tempOb;
        tempOb.prev = befor;
        tempOb.next = after;
        this.length++;
        return this;


        console.log("traveser=" ,befor);

    }

    traverseToIndex(index) {
        let i = 0;
        let tempOb = this.head;
        while( index !== i) {
            tempOb = tempOb.next;
            i++;
        }
        return tempOb;
    }
    remove(index) {
        if(index > this.length || index < 0) {
            console.log("Index not define for remove");
            return "Index not define for remove";
        }
        else if(index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this;
        }
        let current = this.traverseToIndex(index - 1);
        current.next.next.prev = current;
        current.next = current.next.next;
        this.length--;
        return this;

    }

}

let myDLinkedList = new DoublyLinkedList(10);
myDLinkedList.append(20);
myDLinkedList.append(30);
myDLinkedList.insert(3,90);
myDLinkedList.remove(1);
myDLinkedList.printList();
console.log(myDLinkedList);