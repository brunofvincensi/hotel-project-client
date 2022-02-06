const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(_dirname + '/dist/angular-frontend'));

app.get('/*', (req, res) => {
  res.sendFile(_dirname + '/dist/angular-frontend/index.html');
});

app.listen(PORT, () =>{
  console.log('Servidos iniciando na porta ' + PORT);
})
