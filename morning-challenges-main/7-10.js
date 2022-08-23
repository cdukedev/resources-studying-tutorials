function foo(a) {
  let returnValue = "";
  try {
    if (a === "bar") {
      throw new Error("quz");
    }
    returnValue = "try";
  } catch (err) {
    returnValue = "catch";
  } finally {
    returnValue = "finally";
  }
  return returnValue;
}

console.log(foo("bar"));
console.log(foo("zzz"));

// For the first call
// 1. a will be set to "bar",
// 2.returnValue is set to ""
// 3.the try catch with throw the error
// 4.returnValue will be set to "try"
// 5.returnValue will be set to "catch"
// 6.then finally the returnValue will be set to "finally"
// 7.finally will be displayed in the console.

// The second call will also result in finally being displayed in the console. but will not throw the error.
