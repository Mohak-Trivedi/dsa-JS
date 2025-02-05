function createNode(value) {
  return {
    data: value,
    prev: null,
    next: null,
  };
}

function addAtHead(value, head) {
  const newNode = createNode(value);

  if (head === null) {
    return newNode;
  }

  newNode.next = head;
  head.prev = newNode;
  head = newNode;
  return head;
}

function addAtTail(value, head) {
  if (head === null) return addAtHead(value, head);

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  const newNode = createNode(value);
  temp.next = newNode;
  newNode.prev = temp;
  return head;
}

function removeAtHead(head) {
  if (head === null) return null;

  if (head.next === null) return null;

  const nextNode = head.next;
  head.next = null;
  nextNode.prev = null;
  head = nextNode;
  return head;
}

function removeAtTail(head) {
  if (head === null) return null;

  if (head.next === null) return null;

  let temp = head;
  while (temp.next.next !== null) {
    temp = temp.next;
  }

  const secondLastNode = temp;
  const tailNode = temp.next;
  tailNode.prev = null;
  secondLastNode.next = null;
  return head;
}

function display(head) {
  if (head === null) return;

  let str = "null <-> ";
  let temp = head;
  while (temp !== null) {
    str += temp.data + " <-> ";
    temp = temp.next;
  }
  str += "null";

  console.log(str);
}

// Initially, doubly linked list is empty
let head = null;

head = addAtHead(10, head);
head = addAtHead(20, head);
head = addAtHead(30, head);
head = addAtHead(40, head);
display(head);
head = removeAtHead(head);
display(head);
head = addAtTail(50, head);
display(head);
head = removeAtTail(head);
display(head);
