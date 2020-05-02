// 10-->5-->16

// let myLinkedList = {
//     head : {
//         value : 10,
//         next : {
//             value : 5,
//             next : {
//                 value : 16,
//                 next : null
//             }
//         }
//     }
// }
class Node{
    constructor(value,next = null,prev = null){
        this.value = value,
        this.next = next
        this.prev = prev
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
       
       const tempOb = new Node(value);
       tempOb.prev = this.tail;
        this.tail.next = tempOb;
        this.tail = tempOb;
        this.length++;
        return this;
      
    }
    prepend(value) {
        
        const tempOb = new Node(value,this.head);
        this.prev = tempOb; 
        this.head = tempOb;
        this.length++;
        return this;
        
    }
    printList() {
        const arr = [];
        let current = this.head;
        while(current !== null)
        {
           arr.push(current.value);
            current = current.next; 
        }
        console.log(arr);
    }
    insert(index, value){
        if(index >= this.length || index < 0 ) {
            console.log("Out of length so we append your item")
            return this.append(value);
        }
        else if( index == 0)
        {
            return this.prepend(value);
        }

        const tempOb = new Node(value,this.head);
        let current = this.traverseToIndex(index - 1);
        let after = current.next;
        current.next = tempOb;
        tempOb.next  = after;
        this.length++;
        return this.printList();
      
    }

    remove(index) {
        if(index >= this.length){
            return "Not define Index";
        }
        else if(index === 0) {
            this.length--;
            return this.head = this.head.next;
        }
        let current = this.traverseToIndex(index - 1);
        current.next = current.next.next ;
        this.length--;
    }

    traverseToIndex(index) {
        let i = 0;
        let current = this.head;
        while(i !== index )
        {
            current = current.next;
            i++;
        }
        return current;
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(45);
myLinkedList.append(5);
myLinkedList.append(2);
myLinkedList.append(33);
// myLinkedList.insert(0,99);
// myLinkedList.printList();
// myLinkedList.remove(0);
// myLinkedList.remove(1);
// myLinkedList.remove(2);
// console.log(myLinkedList.remove(3));
myLinkedList.printList();
console.log(myLinkedList.head);