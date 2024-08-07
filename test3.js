function invertBinaryTree(tree) {
    //o(n) time | o(d) space
    if(tree === null) return
    swapLeftAndRight(tree)
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
  }
  
  function swapLeftAndRight(tree){
    const left = tree.left
    tree.left = tree.right
    tree.right = left
  }
  
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  