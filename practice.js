class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    this.add = (element) => {
        let newNode = new ListNode(element);
        if(head) {
            let current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        } else {
            head = node; 
        }
        length++;

    }
}


let node1 = new ListNode(1)
let node2 = new ListNode(22)
node1.next = node2
let list = new LinkedList(node1)
console.log(list.head.next.data)