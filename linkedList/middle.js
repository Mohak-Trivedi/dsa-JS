// Problem: https://leetcode.com/problems/middle-of-the-linked-list/description/

// TC: O(N), SC: O(N)
// Start with 2 pointers at head: slow and fast
// slow moves one node at a time, and fast moves 2
// Odd length linked list: fast reaches tail, slow reaches mid
// Even length linked list: fast reaches 2nd last node, slow reaches mid, but we want 2nd mid, so slow.next.

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
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next === null) {
    // odd length linked list
    return slow;
  } else {
    // even length linked list
    return slow.next;
  }
};
