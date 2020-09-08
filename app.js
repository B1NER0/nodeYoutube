const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the hompage baby");
});

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log("WAZAPPP");
});


