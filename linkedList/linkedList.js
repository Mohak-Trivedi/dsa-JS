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
console.log(head);
display(head); // 40 -> 30 -> 20 -> 10 -> null
