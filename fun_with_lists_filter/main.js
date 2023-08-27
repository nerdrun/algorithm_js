function filter(head, p) {
  /// recrusive function
  if (!head) return head;
  if (!p(head.data)) return filter(head.next, p);
  return new Node(head.data, filter(head.next, p));

  /// for loop
  let node = head;
  let result = null;
  let pointer = null;

  while(node) {
    if(p(node.data)) {
      if(pointer === null) pointer = result = new Node(node.data);
      else pointer = pointer.next = new Node(node.data);
    }
    node = node.next;
  }
  return result;
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

module.exports = {filter, Node};