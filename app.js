const express = require('express');
const path = require('path');
//const ejs = require('ejs');

const PORT = process.env.PORT || 4000;
const app = express();

//middleware
app.use(express.static(path.join(__dirname, '/src/')));


app.set('views', path.join(__dirname, 'src', 'views'));
app.set('images', path.join(__dirname, 'src', 'images'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});