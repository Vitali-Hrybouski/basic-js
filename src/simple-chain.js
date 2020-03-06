const chainMaker = {
  chain: new Array(),
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    if (value == undefined && value != null) this.chain.push("( )");
    else this.chain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (typeof position != "number" || position < 1 || position > this.chain.length) {
      this.chain = new Array();
      throw new Error();
    }
    else this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = new Array();
    return result;
  }
};
module.exports = chainMaker;
