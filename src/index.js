const express = require('express');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use('/api/v1/', require('./routes/index'));


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})
