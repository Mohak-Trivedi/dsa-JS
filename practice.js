function createNode(value) {
  const node = {
    data: value,
    next: null,
  };

  return node;
}

function addAtHead(head, value) {
  const newNode = createNode(value);

  if (head === null) return newNode;

  newNode.next = head;

  return newNode;
}

function addAtTail(head, value) {
  if (head === null) {
    return addAtHead(head, value);
  }

  const newNode = createNode(value);
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = newNode;

  return head;
}

function addAt(head, index, value) {
  if (head === null) {
    return addAtHead(head, value);
  }

  let temp = head;
  let idx = 0;
  while (idx != index - 1 && temp != null) {
    temp = temp.next;
    idx++;
  }
  if (idx === index - 1) {
    const newNode = createNode(value);
    newNode.next = temp.next;
    temp.next = newNode;
  } else {
    console.log(
      "Index must not be greater than the length of the linked list."
    );
  }

  return head;
}

function removeHead(head) {
  if (head === null) {
    console.log("Can't remove any node from an empty linked list.");
    return null;
  }

  if (head.next === null) {
    console.log(
      "Removing the only node that was present. Now the Linked List is empty."
    );
    return null;
  }

  const newHead = head.next;
  head.next = null;
  return newHead;
}

function removeTail(head) {
  if (head === null) {
    console.log("Can't remove any node from an empty linked list.");
    return null;
  }

  if (head.next === null) {
    return removeHead(head);
  }

  let temp = head;
  while (temp.next.next != null) {
    temp = temp.next;
  }
  temp.next = null;

  return head;
}

function display(head) {
  if (head === null) {
    console.log("Linked List is empty.");
  }

  let str = "";
  let temp = head;
  while (temp != null) {
    str += temp.data + " -> ";
    temp = temp.next;
  }
  str += "null";
  console.log(str);
}

let head = null;
head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
display(head);
head = addAtTail(head, 40);
display(head);
head = removeHead(head);
display(head);
head = removeTail(head);
display(head);
head = addAtTail(head, 50);
display(head);
head = addAt(head, 2, 60);
display(head);
