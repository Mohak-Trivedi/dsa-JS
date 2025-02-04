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

function removeAtHead(head) {
  if (head === null) return null;

  if (head.next === null) return null;

  const nextNode = head.next;
  head.next = null;
  nextNode.prev = null;
  head = nextNode;
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
