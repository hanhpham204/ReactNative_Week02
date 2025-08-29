function sampleTask(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task completed successfully");
    }, 1000);
  });
}

sampleTask()
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err.message))
  .finally(() => console.log("Done")); 
