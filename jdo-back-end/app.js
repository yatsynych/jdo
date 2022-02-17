const cors = require('cors')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 4000
app.use(cors())

async function start() {
    try {
        await mongoose.connect(config.get('mongodb.uri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            const date = new Date()
            console.log(`${date} jDO Server has been started on port ${PORT}`)
        })
    } catch(e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

const todos = [
    {_id: 1, complited: false, title: 'Test todo item 1'},
    {_id: 2, complited: false, title: 'Test todo item 2'},
    {_id: 3, complited: false, title: 'Test todo item 3'},
    {_id: 4, complited: false, title: 'Test todo item 4'}
]

app.get('/todo/', (req, res) => {
  res.json(todos);
})