//Your code here

let justInvoke = {
  invokeFunction: function () {
    return this
  }
}

const invokeFunction = function justInvoke(fn) {
  return this;
}
