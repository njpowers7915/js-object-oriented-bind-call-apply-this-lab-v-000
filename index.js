//Your code here

function justInvoke() {
  function invokeFunction() {
    return this
  }
  return justInvoke()
}
