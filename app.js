const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static('public')); 
app.use('/SNL', express.static('SNL'));

app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const reviewsList = ["This is a test"];

app.get('/reviews', (req, res) => {
  res.render('reviews', { reviews: reviewsList });
});

app.post('/reviews', (req, res) => {
  const newReview = req.body.review;
  reviewsList.push(newReview);
  res.redirect('/reviews');
});

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
