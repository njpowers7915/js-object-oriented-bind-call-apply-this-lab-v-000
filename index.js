//Your code here

let justInvoke(fn) = {
  function invokeFunction() {
    return this
  }
  return invokeFunction()
}

 function fn() {
  return this
}
