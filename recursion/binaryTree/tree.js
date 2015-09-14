// JS: Binary Search Tree
// Binary Search Tree relatd interview questions for expert JavaScript developers
//
// - a binary search tree is organized into a hierarchical tree structure.
// - first item becomes root node
// - each additional value is an ancestor of the root node
// - go left whenever the value you’re looking for is less than the node you’re processing or go right if the value is greater.
// - no duplicates in a binary search tree


function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype = {

  //restore constructor
  constructor: BinarySearchTree,

  add: function(value) {
    //create a new item object to place data in
    var node = {
        value: value,
        left: null,
        right: null
      },

      //used to traverse the structure
      current;

    //special case: no items in the tree yet
    if (this._root === null) {
      this._root = node;
    } else {
      current = this._root;

      while (true) {

        //if the new value is less than this node's value, go left
        if (value < current.value) {

          //if there's no left, then the new node belongs there
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }

          //if the new value is greater than this node's value, go right
        } else if (value > current.value) {

          //if there's no right, then the new node belongs there
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }

          //if the new value is equal to the current one, just ignore
        } else {
          break;
        }
      }
    }
  },



  // The contains() method accepts a value as an argument
  // and returns true if the value is present in the tree or false if not.
  contains: function(value) {
    var found = false
    var current = this._root
      // check for searchable node
    while (!found && current) {
      //if the value is less than the current node's, go left
      if (value < current.value) {
        current = current.left;

      }
      //if the value is greater than the current node's, go right    //
      else if (value > current.value) {
        current = current.right;
      }
      //values are equal
      else {
        found = true;
      }
    }
    return found
  },

  remove: function(value){

       var found       = false,
           parent      = null,
           current     = this._root,
           childCount,
           replacement,
           replacementParent;

       //make sure there's a node to search
       while(!found && current){

           //if the value is less than the current node's, go left
           if (value < current.value){
               parent = current;
               current = current.left;

           //if the value is greater than the current node's, go right
           } else if (value > current.value){
               parent = current;
               current = current.right;

           //values are equal, found it!
           } else {
               found = true;
           }
       }

       //only proceed if the node was found
       if (found){
           //continue
       }

   },
  //to calc size of a binary search tree, visit each node in tree
  // both size() and toArray() call traverse() and pass a function to run on each node

  size: function() {
    var length = 0;
// increments the length variable
    this.traverse(function(node) {
      length++;
    });

    return length;
  },
  toArray: function() {
    var result = [];
// add the node’s value into an array.
    this.traverse(function(node) {
      result.push(node.value);
    });

    return result;
  },

  toString: function() {
    return this.toArray().toString();
  },
  // method accepts function argument to be run on each node of the tree
  traverse: function(process) {

    //helper function used to recursivly traverse tree
    function inOrder(node) {
      if (node) {

        //traverse the left subtree
        if (node.left !== null) {
          inOrder(node.left);
        }

        //call the process method on this node
        process.call(this, node);

        //traverse the right subtree
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }

    //start with the root
    inOrder(this._root);
  },
};
