const express = require('express');
const myRoutes = require('./routes/route');
const app = express();
const port = 6969;

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('uploads'));
app.use(myRoutes);

app.listen(port, () => {
    console.log("App is Listening on port " + port);
});