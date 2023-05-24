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
var middleNode = function (head) {
  let pointer = head;
  let index = 0;
  let middle = 0;
  while (pointer) {
    pointer = pointer.next;
    index++;
  }
  middle = index % 2 === 0 ? index / 2 : (index - 1) / 2;
  index = 0;

  while (head) {
    if (index === middle) {
      return head;
    } else {
      head = head.next;
    }
    index++;
  }
};

// Far better implementation
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
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
