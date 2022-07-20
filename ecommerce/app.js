const express = require('http');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
