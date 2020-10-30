const CustomError = require("../extensions/custom-error");

const chainMaker = {
  valueArr: [],

  getLength() {
    return this.valueArr.length;
  },

  addLink(value = '(  )') {
    this.valueArr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number') {
      if (position < 1 || position > this.getLength()) {
        this.valueArr.length = 0;
        throw new Error('Error');
      }
      this.valueArr.splice((position - 1), 1);
      return this;
    } else {
      this.valueArr.length = 0;
      throw new Error('Error');
    }
  },

  reverseChain() {
    this.valueArr.reverse();
    return this;
  },


  finishChain() {
    const result = this.valueArr.join('~~');
    this.valueArr.length = 0;
    return result;
  },

};

module.exports = chainMaker;
