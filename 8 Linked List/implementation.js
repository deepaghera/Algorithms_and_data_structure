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

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const tempOb = {
            value : value,
            next : null
        }
       
        this.tail.next = tempOb;
        this.tail = tempOb;
        this.length++;
        return this;
      
    }
    prepend(value) {
        const tempOb = {
            value : value,
            next : this.head
        }
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


        let i = 0;
        let current = this.head;
        const tempOb = {
            value : value,
            next : this.head
        }


        while(i !== index - 1)
        {
            current = current.next;
            i++;
        }
        let after = current.next;
        current.next = tempOb;
        tempOb.next  = after;
        this.length++;
        return this.printList();
      
    }
    remove(index) {
       let i =  
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(45);
myLinkedList.append(5);
myLinkedList.append(2);
myLinkedList.append(33);
myLinkedList.insert(3,99);
myLinkedList.printList();