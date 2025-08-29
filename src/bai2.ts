function getNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000); 
  });
}

getNumber().then((num: number) => {
  console.log(num); 
});
