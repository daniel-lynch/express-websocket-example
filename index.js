const express = require('express')
const app = express()
const expressWs = require('express-ws')(app);
const port = 3000

app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
        ws.send("Hello from server.");
        ws.send(`echo: ${msg}`);
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
