function filter(head, p) {
  let result = null;
  let hihi = null;
  let node = head;
  while(node) {
    if(p(node.data)) {
      if(!result) {
        result = new Node(node.data);
        hihi = result.next;
      }
      else {
        result.next = new Node(node.data);
        hihi = result.next;
      }
      console.log('result : ', result);
    }
    node = node.next;
  }

  return result;

  if(head && p(head.data)) {
    const node = new Node(head.data);
    result.next = node;
    let next = head.next;
    let pointer = result.next;
    if(next && p(next.data)) {
      result.next = new Node(next.data);
      return result;
      next = next.next;
      pointer = pointer.next;
      if(next && p(next.data)) {
        pointer = new Node(next.data);
      }
    }
  }
  return result;
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

module.exports = {filter, Node};