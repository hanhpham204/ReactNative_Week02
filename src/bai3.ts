function throwError(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000);
  });
}

throwError()
  .then(() => {
    console.log("This will not run");
  })
  .catch((error: Error) => {
    console.error(error.message); 
  });
