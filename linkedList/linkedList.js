function createNode(value) {
  return {
    data: value,
    next: null,
  };
}

function addAtHead(value, head) {
  const newNode = createNode(value);
  newNode.next = head;
  head = newNode;
  return head;
}

function addAtTail(value, head) {
  // No tail in case of empty linked list, so it's like adding a head
  if (head === null) {
    return addAtHead(value, head);
  }

  // traverse to reach the current tail node
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  // now temp points to tail node
  // create a new node and make it the new tail
  const newNode = createNode(value);
  temp.next = newNode;

  return head;
}

function addAt(i, value, head) {
  if (i === 0 || head === null) {
    return addAtHead(value, head);
  }

  let temp = head;
  let index = 0;
  const prevNodeIndex = i - 1;
  while (index != prevNodeIndex && temp.next != null) {
    temp = temp.next;
    index++;
  }
  if (index === prevNodeIndex) {
    // temp now points to i-1th node.
    const newNode = createNode(value);
    const prevIthNode = temp.next;
    newNode.next = prevIthNode;
    temp.next = newNode;
  } else {
    console.log("Index must be less than linked list length");
  }

  return head;
}

function removeHead(head) {
  if (head === null) return null;

  // To remove current head, we need to make its next as null, so that it is
  // garbage collected.
  // But, new head will be the current head's next, so, store it first.
  const newHead = head.next;
  head.next = null;
  return newHead;
}

function removeTail(head) {
  // Make the 2nd last i.e. the node before tail as the last node by making its
  // next as null. This way, the tail node will get de-linked from linked list
  // and garbage collected.
  // Tail node is found by looking for node whose next is null, so to find
  // second last node, find the node whose next's next is null.

  if (head === null) return null;

  // Apart from empty list, another edge case is single node in linked-list as
  // in that case, next is null, so no way to find next of next.

  if (head.next === null) return null;

  let temp = head;
  while (temp.next.next != null) {
    temp = temp.next;
  }
  // temp now points to the 2nd last node
  temp.next = null;

  return head;
}

function display(head) {
  let temp = head;
  let result = "";
  while (temp != null) {
    result += temp.data + " -> ";
    temp = temp.next;
  }

  result += "null";
  console.log(result);
}

let head = null; // Initially, when the linked list is empty, head is null

head = addAtHead(10, head);
head = addAtHead(20, head);
head = addAtHead(30, head);
head = addAtHead(40, head);
head = addAtTail(50, head);
console.log(head);
display(head); // 40 -> 30 -> 20 -> 10 -> 50 -> null
head = removeHead(head);
head = removeHead(head);
head = removeTail(head);
display(head);
head = addAt(1, 100, head);
head = addAt(0, 99, head);
display(head);
