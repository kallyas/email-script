const express = require('express');
const cors = require('cors');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.NODE_ENV == 'production' ? process.env.ORIGIN_PROD : 'http://localhost:3000'

const corsOptions = {
    origin: ORIGIN,
    credentials: false,
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/v1/', require('./routes/index'));


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})
