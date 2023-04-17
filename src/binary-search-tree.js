const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(data) {
    this.rooty = null;
  }

  root() {
    return this.rooty;
  }

  add(data) {
    const newTree = new Node(data)
   if(!this.rooty){
    this.rooty = newTree;
    return;
   }

   let i = this.rooty;
   while(i) {
    if(newTree.data < i.data){
      if(!i.left) {
        i.left = newTree;
        return;
      }
      i = i.left;
    } else {
      if(!i.right) {
        i.right = newTree;
        return;
      }
      i = i.right;
    }
   }
  }

  has(data) {
    let i = this.rooty;
    while(i !== null){
      if(i.data == data){
        return true;
      }
      if (i.data > data) {
        i = i.left;
      } else if (i.data < data) {
        i = i.right;
      }
    }
    return false;
  }

  find(data) {
    let i = this.rooty;
    while(i !== null){
      if(i.data == data){
        return i;
      }
      if (i.data > data) {
        i = i.left;
      } else if (i.data < data) {
        i = i.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rooty = this.removeNode(this.rooty, data);
  }

  removeNode(i, data) {
    if (i === null) {
      return null;
    }
    if (data === i.data) {
      if (i.left === null && i.right === null) {
        return null;
      }
      if (i.left === null) {
        return i.right;
      }
      if (i.right === null) {
        return i.left;
      }
      const tempNode = this.getMinNode(i.right);
      i.data = tempNode.data;
      i.right = this.removeNode(i.right, tempNode.data);
      return i;
    } else if (data < i.data) {
      i.left = this.removeNode(i.left, data);
      return i;
    } else {
      i.right = this.removeNode(i.right, data);
      return i;
    }
  }

  getMinNode(i) {
    let cN = i;
    while (cN && cN.left !== null) {
      cN = cN.left;
    }
    return cN;
  }

  min() {
    if (this.rooty === null) {
      return null;
    }
    let i = this.rooty;
    while(i.left !== null) {
      i = i.left;
    }
    return i.data;
  }

  max() {
    if (this.rooty === null) {
      return null;
    }
    let i = this.rooty;
    while(i.right !== null) {
      i = i.right;
    }
    return i.data;
  }
}
const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
console.log(tree.find(7))


module.exports = {
  BinarySearchTree
};