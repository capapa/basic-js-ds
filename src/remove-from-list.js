const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class Listl {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const root = new ListNode();
  root.next = l;
  let node = root;
  
  while (node) {
    if (node.next && node.next.value === k) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return root.next;
}

module.exports = {
  removeKFromList
};
