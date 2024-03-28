import express from 'express';

const app = express()
const port = 3000

app
  .use(express.static('dist'))
  .listen(port, () => {
    console.log("started server on port " + port);
  })
