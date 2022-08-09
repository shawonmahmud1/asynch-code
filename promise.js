const isSomeOneLoveMe = false; 
//cause no one love me 

const promise = new Promise((resolve, reject) => {
  if (isSomeOneLoveMe) {
    resolve("will promise completed");
  } else {
    reject("will not promise completed");
  }
});

// console.log(promise);
promise
  .then((result) => {
    console.log(result);
  })
  .catch((result1) => {
    console.log(result1);
  });
