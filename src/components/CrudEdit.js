import React from 'react';
import axios from 'axios';
import './style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import StarRating from '../StarRating';

class CrudEdit extends React.Component {

    state = { movieName: '', movieComment: '', movieWatched: '', startDate: '', poster_image: '', username: window.localStorage.getItem('username'), movie_id: '', recentlyW: [] }

    componentDidMount() {

    }

    render() {

        const nimivaihdos = (date) => {


            this.setState({ username: getUser })
            this.setState({ movieName: movie_name })
            this.setState({ poster_image: movie_poster })
            this.setState({ movie_id: movieID })
            this.setState({ movieWatched: movieWatched })
            this.setState({ movieComment: movie_comment })


        }

        var movie_poster = window.localStorage.getItem('movie_poster')
        var movie_poster = movie_poster.substring(1, movie_poster.length - 1)
        var movie_name = window.localStorage.getItem('movie_name')
        var movie_name = movie_name.substring(1, movie_name.length - 1)
        var movieID = window.localStorage.getItem('movie_id')
        var movieID = parseInt(movieID.substring(1, movieID.length - 1))
        var movie_comment = window.localStorage.getItem('movieComment')
        var movie_comment = movie_comment.substring(1, movie_comment.length - 1)
        var movieWatched = window.localStorage.getItem('movieWatched')
        var getUser = this.state.username.substring(1, this.state.username.length - 1)

        const submitEdit = () => {
            axios.post('/edit.php', {
                username: this.state.username,
                movie_id: this.state.movie_id,
                movieName: this.state.movieName,
                movieComment: this.state.movieComment,
                movieRating: window.localStorage.getItem('movieRating'),
            }).then((res) => {
                console.log(res)

            })
        }

        const Delete = () => {
            axios.post('/delete.php', {
                movie_id: this.state.movie_id,
            }).then(() => {

            })
        }

        return (

            <div className='ui grid'>
                <div className='two column row'>
                    <div className='column'>
                        <img className='poster' src={movie_poster} alt='Poster' />
                    </div>
                    <div className='column'>
                        <form className='ui form'>

                            <div className='field'>Movie Name
                                <input type='text' placeholder={movie_name} onClick={nimivaihdos} onChange={(event) => this.setState({ movieName: event.target.value })}
                                    value={movie_name} required></input>
                            </div>
                            <div className='field'>Comment
                                <textarea rows='2' placeholder={movie_comment} onClick={nimivaihdos} onChange={(event) => this.setState({ movieComment: event.target.value })}
                                    value={this.state.movieComment}></textarea>
                            </div>
                            <div className='field'>Rating:<StarRating /></div>
                            <div className='field'>Watched: {movieWatched.substring(1, 11)}
                            </div><div className='edit'><br />
                                <button onClick={submitEdit} onMouseOver={nimivaihdos} className='editButton' style={{ backgroundColor: '#00a67c' }}>Submit changes</button>
                                <button onClick={Delete} onMouseOver={nimivaihdos} className='deleteButton'>Delete movie</button></div>
                        </form>
                    </div>
                </div>
            </div>

        )

    }

}

export default CrudEdit