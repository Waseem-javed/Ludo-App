var express = require('express');
const app = express();
const path = require('path');
var hbs = require('hbs');

const port = process.env.PORT || 9000;
const viewPath = path.join(__dirname, '../views')
const dir = path.join(__dirname, '../public')

// set views folder location
app.set('view engine', 'hbs')
app.set('views', viewPath)

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/*', (req, res) => {
  res.render('404');
})

app.get('*', (req, res) => {
  res.render('404');
})

app.use(express.static(dir))


app.listen(port, () => {
console.log('Express server started on port:',port);
})