class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  // Helper functions to get parent and child indices

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  // Determine if a node has a parent or children
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  // Helpers to return actual left / right / parent values
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  righChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  // Other helpers method to swap and ensure capacity
  swap(i1, i2) {
    let temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  ensureExtraCapacity() {
    if (this.size === this.heap.length) {
      this.heap = this.heap.concat(new Array(this.size).fill(0)); // Double the size
    }
  }

  // Utils helpers for heap operations

  peek() {
    if (this.size === 0) throw new Error("Heap is empty");
    return this.heap[0];
  }

  poll() {
    // remove the top element
    if (this.size === 0) throw new Error("Heap is empty");
    const item = this.heap[0];
    this.heap[0] = this.heap[this.size - 1]; // imp this has to be size
    this.size--;
    this.heapifyDown(); // we have to heapify down from the root in order to bring back the top (root) now to its actual position
    return item;
  }

  add(item) {
    this.ensureExtraCapacity();
    this.heap[this.size] = item; // add the new item at the end
    this.size++;
    this.heapifyUp(); // we have to heapify up from the last index in order to bring the newly added item to its actual position
  }

  heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0; // the root
    while (this.leftChild(index)) {
      // Because if there is no left child, there is no right child as we insert it always in the left first
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.righChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

// Testing this
const minHeap = new MinHeap();
minHeap.add(5);
minHeap.add(3);
minHeap.add(8);
minHeap.add(2);
minHeap.add(1);
minHeap.add(9);
console.log(minHeap.heap);

minHeap.poll();
console.log(minHeap.heap);
minHeap.add(10);
console.log(minHeap.heap);
minHeap.add(0);
console.log(minHeap.heap);

console.log(minHeap.peek());
