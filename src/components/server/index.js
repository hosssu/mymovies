const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "killerpi",
    password: "SID(KsmoQnyt",
    port: 3306,
    database: "killerpi_mymovies"
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/get', (req, res) => {
    const sqlGet = `SELECT * FROM movie_reviews ORDER BY id DESC LIMIT 10`
    connection.query(sqlGet, (err, result) => {
        res.send(result)
        console.log(err)
    });
});

app.post('/insert', (req, res) => {
    const username = req.body.username;
    const movie_id = req.body.movie_id;
    const movieName = req.body.movieName;
    const movieComment = req.body.movieComment;
    const movieWatched = req.body.movieWatched;
    const poster_image = req.body.poster_image;
    const sqlInsert = `INSERT INTO movie_reviews (movieName, movieComment, movieWatched, poster_image, movie_id) VALUES (?,?,?,?,?)`;
    connection.query(sqlInsert, [movieName, movieComment, movieWatched, poster_image, movie_id], (err, result) => { console.log(err) });
});


app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query(`INSERT INTO login_data (username, password) VALUES (?,?)`,
        [username, password], (err, result) => { console.log(err, result) })
    connection.query(`CREATE TABLE IF NOT EXISTS movie_reviews_${username} LIKE movie_reviews;`,
        [username, password], (err, result) => { console.log(err, result) })
})



app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query('SELECT * FROM login_data WHERE username = ? AND password = ?',
        [username, password], (err, result) => {
            if (err) {
                console.log(err)
                res.send({ err: err });
            }

            if (result) {
                res.send(result);
            }

            else {
                res.send({ message: 'Wrong username or password' })
            }
        })
})


app.listen(3306, () => {
    console.log('running on port 3306');
});

