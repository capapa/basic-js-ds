const { NotImplementedError, checkForThrowingErrors } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  
  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    if (!this.rootNode) {
      this.rootNode = node;

    } else {
      let l = this.rootNode;
      while (l) {
        if (l.data > data) {
          if (l.left) {
            l = l.left;

          } else {
            l.left = node;
            l = null;

          }
        } else {
          if (l.right) {
            l = l.right;

          } else {
            l.right = node;
            l = null;

          }
        }
      }
    }
    return node;
  }

  has(data) {
    let l = this.rootNode;
    while (l) {
      if (l.data > data) {
        if (l.left) l = l.left;
        else return false;

      } else if (l.data < data) {
        if (l.right) l = l.right;
        else return false;

      } else return true;
    }
    return false;
  }

  find(data) {
    let l = this.rootNode;
    while (l) {
      if (l.data > data) {
        if (l.left) l = l.left;
        else return null;
          
      } else if (l.data < data) {
        if (l.right) l = l.right;
        else return null;
        
      } else return l;
    }
    return null;
  }

  remove(data) {
    
    const getRemoveNode = (node, data) => {
        if (!node) return null;

        if (data < node.data) {
          node.left = getRemoveNode(node.left, data);
          return node;

        } else if (data > node.data) {
          node.right = getRemoveNode(node.right, data);
          return node;

        } else {
          if (!node.left && !node.right) {
            return null;

          } else if(node.left && node.right) {
            node.data = this.min(node.right);
            node.right = getRemoveNode(node.right, node.data);
            return node;

          } else {
            if (node.left) 
              return node.left;

            else 
              return node.right;
              
          }
        }
    }

    this.rootNode = getRemoveNode(this.rootNode, data);
  }

  min(node = null) {
    let l = null;
    if (node) l = node;
    else l = this.rootNode;
    while (l.left) l = l.left;
    return l.data;
  }

  max() {
    let l = this.rootNode;
    while (l.right) l = l.right;
    return l.data;
  }
}

module.exports = {
  BinarySearchTree
};