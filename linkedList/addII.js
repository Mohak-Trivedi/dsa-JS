// Problem: https://leetcode.com/problems/add-two-numbers-ii/

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
function revLL(head) {
  if (head.next === null) return head;

  let prev = null;
  let curr = head;
  // let temp = curr.next;

  while (curr !== null) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

var addTwoNumbers = function (l1, l2) {
  const revL1 = revLL(l1);
  const revL2 = revLL(l2);

  let temp1 = revL1;
  let temp2 = revL2;
  let carry = 0;
  let revRes = null;
  let revResHead = null;
  while (temp1 !== null || temp2 !== null) {
    // let d1 = 0, d2 = 0;
    const d1 = temp1 !== null ? temp1.val : 0;
    const d2 = temp2 !== null ? temp2.val : 0;

    const sum = carry + d1 + d2;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    const newNode = new ListNode(digit, null);
    if (revResHead === null) {
      revResHead = newNode;
      revRes = newNode;
    } else {
      revRes.next = newNode;
      revRes = newNode;
    }

    temp1 = temp1 !== null ? temp1.next : null;
    temp2 = temp2 !== null ? temp2.next : null;
  }
  if (carry !== 0) {
    const newNode = new ListNode(carry, null);
    revRes.next = newNode;
  }

  const res = revLL(revResHead);

  return res;
};
