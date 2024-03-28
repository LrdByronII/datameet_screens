import express from 'express';
import ps from 'prompt-sync'

const prompt = ps();
const app = express()
const port = 3000
var pwd = prompt("password")

if (pwd === 'json') {
  console.log('nice');
  app.use(express.static('dist'))
} else {
  console.log('nice try')
}

app
  .listen(port, () => {
    console.log("started server on port " + port);
  })
