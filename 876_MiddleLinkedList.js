/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class Node {
  constructor(new_data) {
    this.data = new_data;
    this.next = null;
  }
}

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

console.log(middleNode(head));
