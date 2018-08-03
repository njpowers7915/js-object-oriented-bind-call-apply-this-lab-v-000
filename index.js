//Your code here

function justInvoke(fn) {
  function invokeFunction(fn) {
    return this;
  }
  return invokeFunction(fn)
}
