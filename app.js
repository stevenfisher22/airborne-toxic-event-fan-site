var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/comments'));
app.use(require('./routes/api'));
// app.use(require('./routes/chat'));


app.listen(3000, () => {
    console.log('Server Port 3000 is Working!')
})