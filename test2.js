function minHeightBst(array) {
    // Write your code here.
    return minHeightBstHelper(array, 0, array.length-1)
  }
  
  function minHeightBstHelper(array, start, end){
    if(start > end)return 
    const middle = Math.floor((end + start)/2)
    const bst = new BST(array[middle])
    bst.left = minHeightBstHelper(array, start, middle-1)
    bst.right = minHeightBstHelper(array, middle+1, end)
    return bst
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;
  