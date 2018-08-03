//Your code here

function justInvoke(fn) {
  function invokeFunction() {
    return this;
  }
  return invokeFunction()
}
