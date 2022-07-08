const express = require('express');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
  console.log(req);
  res.send("<h1>Express</h1>")
})
app.listen(PORT, () => {
  console.log(`listening on
   ${PORT}`);
})

