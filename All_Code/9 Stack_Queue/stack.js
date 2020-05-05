class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }
    push(value) {
        const tempOb = new Node(value);
        if(this.length === 0) {
            this.top = tempOb;
            this.bottom = tempOb;
            this.length++;
            return this;
        } else {
            this.top.next = tempOb;
            this.top = tempOb;
            this.length++
            return this;
        }
       


       

    }

    pop() {
        console.log("deleted",this.top);
        this.top = this.top.next;
        this.length--;
        return this;

        

    }

}

let myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
console.log(myStack);