const express = require('express')
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser());
let objectsRouter = require('./objectRoute');
async function connectToDatabase() {
    await mongoose.connect('mongodb://127.0.0.1/test').then(() => {
        console.log('Database is connected')
    })
}

connectToDatabase().catch(err => console.log(err))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/objects', objectsRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
