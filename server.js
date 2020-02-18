const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false
    // useUnifiedTopology: true 
    // from google chrome dev tools. need to research what is does/replaces and why
});

// routes
const apiRoutes = require('./src/routes/api-routes');
require('./src/routes/html-routes')(app);
app.use(apiRoutes);
// app.use(htmlRoutes);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
