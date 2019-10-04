const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-pmn4x.mongodb.net/admin?retryWrites=true&w=majoritymongodb+srv://omnistack:omnistack@omnistack-pmn4x.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json());
app.use(routes);


app.listen(3333);
