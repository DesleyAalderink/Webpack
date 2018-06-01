const ejs = require('ejs')
const express = require('express')
const app = express()

// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get("/", function(req, res) {
  // console.log(req.session.ingelogd);
  res.render("index")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
