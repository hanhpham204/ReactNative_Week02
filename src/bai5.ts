function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}


simulateTask(2000)
  .then((message: string) => {
    console.log(message); 
  })
  .catch((error: Error) => {
    console.error("Error:", error.message);
  });
