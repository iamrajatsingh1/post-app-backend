const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDataBase = require('./src/db');
const postController = require('./src/controller/post.controller');
const authenticateToken = require('./src/middlewares/authenticate');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(authenticateToken);
connectToDataBase();

// Health check endpoint
app.get('/', (req, res) => {
    return res.status(200).send({
        status: true,
        message: 'Mini Forum BE is healthy'
    });
});

app.use('/posts', postController);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
