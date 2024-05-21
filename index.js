import express from 'express'
import {engine} from 'express-handlebars'
import path from 'path'

const app = express();

const __dirname = path.resolve();
console.log(__dirname);
app.use(express.static('public'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  let products = ['banana', 
                  'cebollas', 
                  'lechuga',
                  'papas', 
                  'pimenton', 
                  'tomate']
  return res.render('home', {products: products})
});
app.get('/*', (req, res) => {
  res.status(404).render('404');
});
app.listen(5000, () => console.log(`Server running: http://localhost:5000`));

