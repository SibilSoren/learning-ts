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
      next: this.head,
    };
    this.head = newNode;
    this.length++;
  };
}

let myLL = new LinkedList(10);
myLL.append(15);
myLL.append(25);
myLL.prepend(35);
console.log(myLL);
