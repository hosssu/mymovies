const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "mymovies_jami"
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());



app.get('/get/user', (req, res) => {
    let username = req.query.username
    const sqlGet = "SELECT * FROM movie_reviews WHERE wlist = '1' ORDER BY id DESC";
    connection.query(sqlGet, (err, result) => {
        console.log(result)
        res.send(result)
        console.log(err)
    });
});

app.get('/get/friends', (req, res) => {
    let username = req.query.username
    const sqlGet = `SELECT * FROM movie_reviews WHERE username NOT LIKE '${username}'`;
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
    const sqlInsert = `INSERT INTO movie_reviews (movieName, movieComment, movieWatched, poster_image, movie_id, username) VALUES (?,?,?,?,?,?)`;
    connection.query(sqlInsert, [movieName, movieComment, movieWatched, poster_image, movie_id, username], (err, result) => { console.log(err) });
});


app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query('SELECT * FROM login_data WHERE username = ?',
        [username], (err, result) => {
            if (result[0] == null) {
                console.log('You are good to go!')
                res.send(result)
                connection.query(`INSERT INTO login_data (username, password) VALUES (?,?)`,
                    [username, password], (err, result) => { console.log(err, result) })

            } else {
                console.log(result)
                res.send('That username already exists!')

            }
        });
})


app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query('SELECT * FROM login_data WHERE username = ? AND password = ?',
        [username, password], (err, result) => {
            console.log(result)
            console.log(err)
            if (result) {
                res.send(result)
            } else if (err) {
                console.log(err)
                res.send(err)
            }
        })
})


const PORT = process.env.PORT || 3301
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})