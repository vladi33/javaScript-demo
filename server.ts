import * as express from "express";
import * as bodyParser from "body-parser";
const app = express();

app.use("/static", express.static("public"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

const books = [];


app.get('/pug', function(req, res) {
    res.render("index", { model: books });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/indext.html');
});


app.post('/', function(req, res) {
    var data = req.body;
    books.push(data);
    console.log(data);


});






app.listen(3000, () => {
    console.log("the server is starting");
});



