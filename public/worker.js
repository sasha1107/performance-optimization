self.onmessage = (event) => {
  const { data } = event;
  console.log("Worker received:", data);
  // self.postMessage(`Worker responding to: ${data}`);
  for (let i = 0; i < 5000000000; i++) {}
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  postMessage(randomNumber);
  // console.log("Worker responding to:", data);
};
