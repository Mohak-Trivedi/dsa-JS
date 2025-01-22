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

let head = null; // Initially, when the linked list is empty, head is null

head = addAtHead(10, head); // 10 -> null
head = addAtHead(20, head); // 20 -> 10 -> null
console.log(head);
