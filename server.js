const express = require('express');

const app = express();
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World! vs Hoi Dan IT and Eric')
})
app.get('/about', (req, res) => {
    res.send(`I'm Eric!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

