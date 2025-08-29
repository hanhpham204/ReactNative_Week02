const helloAsync: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});

helloAsync.then((message: string) => {
  console.log(message); 
});
