var  express = require ('express');

const app = express();
const PORT = 8050;

app.use( express.static( __dirname + '/' ) );

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
