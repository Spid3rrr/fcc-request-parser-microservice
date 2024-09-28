// create express app and serve home.html

const express = require('express');

const app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
    }
);

app.get('/api/whoami', (req, res) => {
    const ip = req.ip;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.json({
        ipaddress: ip, language: language, software: software});
    }
);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
    }
);
