var middleNode = function (head) {
  let copyHead = head;
  let length = 0;
  while (head !== null) {
    length++;
    head = head.next;
  }
  let mid = parseInt(length / 2);
  console.log(mid);
  for (let i = 0; i <= mid; i++) {
    if (i === mid) {
      return copyHead;
    }
    copyHead = copyHead.next;
  }
};
//two pointer
var middleNode2 = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
