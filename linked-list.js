/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val); // Create a new node with the given value
    
    // If the list is empty, set both head and tail to the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node to the end of the list
      this.tail.next = newNode;
      this.tail = newNode; // Update the tail to the new node
    }
    
    this.length++; // Increase the length of the list
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val); // Create a new node with the given value

    // If the list is empty, set both head and tail to the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode; // Update the head to the new node
    }

    this.length++; // Increase the length of the list
  }

  /** pop(): return & remove last item. */
  pop() {
    // if list is empty
    if (this.length === 0) {
      return null;
    }

    // if list only has one item
    if (this.length === 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.val;
    }

    // if list has more than one item, find the second to last node
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    // remove the last item
    let removedNode = this.tail;
    this.tail = currentNode; // Update the tail to the current node
    this.tail.next = null;

    this.length--; // Decrease the length

    return removedNode.val;
  }

  /** shift(): return & remove first item. */
  shift() {
    if (this.length === 0) {
      return null;
    }

    // if list only has one item
    if (this.length === 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.val;
    }

    // if list has more than one item, remove the first node
    let removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    // Checking if idx is with valid bounds
    if (idx < 0 || idx >= this.length) {
      return null; // Invalid index
    }

    // start from the head node
    let currentNode = this.head;
    let currentIdx = 0;

    // Traverse the list until we reach the target index
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    // return the value at the target index
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val. */
  setAt(idx, val) {
    // Checking if idx is with valid bounds
    if (idx < 0 || idx >= this.length) {
      return null; // Invalid index
    }

    // start from the head node
    let currentNode = this.head;
    let currentIdx = 0;

    // Traverse the list until we reach the target index
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    currentNode.val = val; // Set the new value

    // No return needed, but you can return something if desired
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    // Checking if idx is with valid bounds
    if (idx < 0 || idx >= this.length) {
      return null; // Invalid index
    }

    // Create a new node with the given value
    const newNode = new Node(val);

    // If inserting at the beginning, use unshift
    if (idx === 0) {
      this.unshift(val); // You can use the unshift method to handle inserting at the beginning
      return;
    }

    // Traverse to the node just before the target idx
    let currentNode = this.head;
    let currentIdx = 0;

    // Traverse the list until we reach the target index
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    // Insert the new node at the desired position
    newNode.next = currentNode.next; // Point new node's next to the current node at idx
    currentNode.next = newNode; // Point the current node's next to the new node

    // Update the length of the list
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx. */
  removeAt(idx) {
    // Checking if idx is with valid bounds
    if (idx < 0 || idx >= this.length) {
      return null; // Invalid index
    }

    // Handle the removal of the head node
    if (idx === 0) {
      let removedNode = this.head;
      this.head = this.head.next; // Move the head to the next node
      // If there was only one node, also set the tail to null
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return removedNode.val;
    }

    // Handle removal of other nodes
    let currentNode = this.head;
    let currentIdx = 0;

    // Traverse the list to find the node just before the target index
    while (currentIdx < idx - 1) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    // Remove the node at idx
    let removedNode = currentNode.next;
    currentNode.next = removedNode.next; // Skip over the removed node

    // If the removed node is the tail, update the tail
    if (currentNode.next === null) {
      this.tail = currentNode;
    }

    // Update the length and return the value of the removed node
    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list. */
  average() {
    // Check if the list is empty
    if (this.length === 0) {
      return null;
    }

    let sum = 0;
    let currentNode = this.head;

    // Traverse the list and sum all values
    while (currentNode !== null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }

    // Calculate the average
    return sum / this.length;
  }
}


module.exports = LinkedList;
