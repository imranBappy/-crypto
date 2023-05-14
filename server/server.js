const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const setRoutes = require('./routes');
const cors = require('cors')
const morgan = require('morgan')

const app = express();

dotenv.config({ path: './config/.env' })

// connect Database()
connectDB();

//set middlewares
app.use(express.json());

app.use(cors());

// all routes set here
setRoutes(app)

app.get('/', (req, res) => res.send("Hello World"))


// handle 404
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' })
})

// handle Error
app.use((error, req, res, next) => {
    console.log(error);
    res.json({
        message: "Server Error"
    })
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

