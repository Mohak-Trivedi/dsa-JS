// Problem: https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let resultHead = null;
  let temp1 = l1;
  let temp2 = l2;
  let carry = 0;
  let res = null;

  while (temp1 !== null || temp2 !== null) {
    const d1 = temp1 !== null ? temp1.val : 0;
    const d2 = temp2 !== null ? temp2.val : 0;
    const sum = d1 + d2 + carry;

    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    const newNode = new ListNode(digit, null);
    if (resultHead === null) {
      resultHead = newNode;
      res = newNode;
    } else {
      res.next = newNode;
      res = newNode;
    }

    if (temp1 !== null) temp1 = temp1.next;
    if (temp2 !== null) temp2 = temp2.next;
  }
  if (carry !== 0) {
    const newNode = new ListNode(carry, null);
    res.next = newNode;
  }
  return resultHead;
};
