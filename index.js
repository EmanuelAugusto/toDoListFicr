const express = require('express');
const app = express();
const { User } = require('./app/models');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('json-spaces', 4);


var routes = require('./routes/route');
routes(app);


app.get('/', (req, res) =>{
    res.send('STATUS: ON');
    res.status(200);
});


app.listen(8081);
console.log('Status ON')
