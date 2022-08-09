console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);
setTimeout(() => {
  console.log(3);
});
setTimeout(() => {
  console.log(4);
});
setTimeout(() => {
  console.log(5);
});
setTimeout(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(7);
});
console.log(8);


function main() {
  setTimeout(() => {
    console.log("main function load last");
  }, 1000);

  setTimeout(() => {
    console.log("main function load first");
    test();
  }, 0);

  test();
}

function test() {
  console.log("test function");
}
main();

// try another example for asynchronous
function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}

// Click the "RUN" button to learn how this works!
logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

// NOTE:
//   This is an interactive vizualization. So try
//   editing this code and see what happens. You
//   can also try playing with some of the examples
//   from the dropdown!
