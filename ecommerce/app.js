const express = require('express');

const productRouter = require('./src/product/product.route');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hi');
});

app.use(productRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
