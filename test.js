class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
    const arr = []
    helper(tree, arr)
  
    console.log(arr, k)
    return arr[k-1];
  }
  
  function helper(tree, arr){
    if(tree === null) return
    helper(tree.right, arr)
    arr.push(tree.value)
    helper(tree.left, arr)
  }
  