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

function removeHead(head) {
  if (head === null) return null;

  // To remove current head, we need to make its next as null, so that it is
  // garbage collected.
  // But, new head will be the current head's next, so, store it first.
  const newHead = head.next;
  head.next = null;
  return newHead;
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
display(head);
