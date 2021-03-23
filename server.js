const express = require('express');
const app = express();
const port = 9191;
const router = require('./router/main')(app);
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use('/public', express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});