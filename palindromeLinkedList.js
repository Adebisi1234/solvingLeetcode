/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   let arr = [];
//   while (head != null) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   return arr.join("") === arr.reverse().join("");
// };

// Faster and better memory management Solution

var isPalindrome = function (head) {
  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  // return arr.join('') === arr.reverse().join('')
  let l = 0,
    r = arr.length - 1;
  let result = true;
  while (l !== r && arr.length > 1 && l >= 0 && r >= 0) {
    if (arr[l] === arr[r]) {
      result = true;
    } else {
      result = false;
      break;
    }
    l++;
    r--;
  }
  return result;
};

// Even faster and better
var isPalindrome = function (head) {
  let stack = [];
  let pointer = head;
  while (pointer) {
    stack.push(pointer.val);
    pointer = pointer.next;
  }
  while (head) {
    if (head.val !== stack.pop()) {
      return false;
    } else {
      head = head.next;
    }
  }
  return true;
};

// Even Better
// I'm coming back for this
