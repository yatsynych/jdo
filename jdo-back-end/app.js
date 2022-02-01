const cors = require('cors')
const express = require('express')
const app = express()
const port = 4000
app.use(cors())

const todos = [
    {id: 1, complited: false, title: 'Test todo item 1'},
    {id: 2, complited: false, title: 'Test todo item 2'},
    {id: 3, complited: false, title: 'Test todo item 3'},
    {id: 4, complited: false, title: 'Test todo item 4'}
]

app.get('/todo/', (req, res) => {
  res.send(todos);
})

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.options('/', function (req, res) {
    res.send("'todo/get/{id3}', 'todo/get/2'");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})