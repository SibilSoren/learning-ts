class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append = (value) => {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  };
  prepend = (value) => {
    let newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  };
  printList = () => {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  };
  insert = (index, value) => {
    // let i = 0;
    let newNode = new Node(value);
    let currentNode = this.head;
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      this.append(value);
    }
    for (let i = 0; i <= index; i++) {
      //   console.log("crr", currentNode);
      if (i === index - 1) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  };
}

let myLL = new LinkedList(10);
myLL.append(15);
myLL.append(25);
myLL.prepend(35);
console.log(myLL.printList());
myLL.insert(0, 99);
console.log(myLL.printList());
