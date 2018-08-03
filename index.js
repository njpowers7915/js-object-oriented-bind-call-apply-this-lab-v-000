//Your code here

let justInvoke(fn) = function fn() {
  return this
}

function justInvoke() {
  function invokeFunction() {
    return this
  }
}
