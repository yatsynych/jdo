const cors = require('cors')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/app/auth', require('./routes/auts.routes'))


const PORT = config.get('port') || 4000
app.use(cors())

async function start() {
    try {
        await mongoose.connect(config.get('mongodb.uri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true
        })
        app.listen(PORT, () => {
            //console.clear()
            const date = new Date().toISOString().
                replace(/T/, ' ').
                replace(/\..+/, '')
            console.log(`${date} jDO Server has been started on port ${PORT}`)
        })
    } catch(e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

const todos = [
    {id: 1, complited: false, title: 'Test todo item 1'},
    {id: 2, complited: false, title: 'Test todo item 2'},
    {id: 3, complited: false, title: 'Test todo item 3'},
    {id: 4, complited: false, title: 'Test todo item 4'}
]

app.get('/todo/', (req, res) => {
  res.json(todos);
})