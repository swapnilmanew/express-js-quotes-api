const express = require('express');
const app = express();
const port = 3010;

const quoteRoutes = require('./api/routes/quote_routes.js');

mongoose
  .connect('mongodb://localhost:27017/quotesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
app.get('/', (req, res) => {
  res.send('hi');
});
app.use(express.json());
app.use('/quotes', quoteRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
