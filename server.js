const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers/helpers')

const ports = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express hbs enginers
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/',  (req, res) => {
    res.render('home', {
    nombre:'racinguistas',
    });
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(ports, () => {
    console.log(`Peticiones del puerto ${ports}`);
})