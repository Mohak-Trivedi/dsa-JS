// Problem: https://leetcode.com/problems/reverse-linked-list/

// Iterative Approach: TC: O(N), SC: O(1)
/*
Change the next ref of each node from head to tail to its prev node.

Store the existing next in a temp var so that after changing it, we can still move
to the next node.
*/

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
var reverseList = function (head) {
  // Edge case 1 : Empty Linked List
  if (head === null) return null;

  // Edge case 2 : Single node Linked List
  if (head.next === null) return head;

  let curr = head;
  let prev = null;

  while (curr !== null) {
    const temp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = temp;
  }

  return prev;
};
