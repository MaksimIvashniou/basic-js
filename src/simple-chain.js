const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  list: [],
  getLength() {
    return this.list.length;
  },
  addLink(value = '') {
    this.list.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.list.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.list.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.list.reverse();
    return this;
  },
  finishChain() {
    const result = this.list.join('~~');
    this.list.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker
};
