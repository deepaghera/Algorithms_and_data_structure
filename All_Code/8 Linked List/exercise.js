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

    reverse() {
     /*  let tempOb = new LinkedList(this.head.value);
       let letStart = this.head.next; 
       while(letStart !== null) {
           tempOb.prepend(letStart.value);
           letStart = letStart.next;
       }
       tempOb.printList();
       //console.log("in revers=",tempOb); */
       
       if(!this.head.next) {
            return this.head;
       }
       let first = this.head;
       this.tail = this.head;
       let second = first.next;
       while(second) {
           const temp = second.next;
           second.next = first;
           first = second;
           second = temp;
           
       }
       this.head.next = null;
       this.head = first;
    }


}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(45);
myLinkedList.append(5);
myLinkedList.append(2);
myLinkedList.append(33);
myLinkedList.insert(0,99);
myLinkedList.reverse()
myLinkedList.printList();