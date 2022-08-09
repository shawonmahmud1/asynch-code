function wait(ms) {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
  return promise;
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(100).then(() => {
  console.log("Done in 400ms");
});

wait(1000).then(() => {
  console.log("Done in 1000 ms");
});
wait(2000).then(() => {
  console.log("Done in 2000 ms");
});
