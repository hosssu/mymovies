import React from 'react';
import axios from 'axios';
import './style.css';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import StarRating from './StarRating';
import { FaExternalLinkAlt } from 'react-icons/fa';

class CrudEdit extends React.Component {

    state = { movieName: '', movieComment: '', movieWatched: '', startDate: '', poster_image: '', username: JSON.parse(window.localStorage.getItem('username')), movie_id: '', recentlyW: [] }


    render() {

        const nimivaihdos = () => {

            this.setState({ movieName: movie_name })
            this.setState({ poster_image: movie_poster })
            this.setState({ movie_id: movieID })
            this.setState({ movieWatched: movieWatched })
            this.setState({ movieComment: movie_comment })
            console.log('setState')
        }


        var movie_poster = JSON.parse(window.localStorage.getItem('movie_poster'))
        var movie_name = JSON.parse(window.localStorage.getItem('movie_name'))
        var movieID = JSON.parse(window.localStorage.getItem('movie_id'))
        var movie_comment = JSON.parse(window.localStorage.getItem('movieComment'))
        var movieWatched = JSON.parse(window.localStorage.getItem('movieWatched'))


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
                movie_id: JSON.parse(window.localStorage.getItem('movie_id')),
            }).then((res) => {
                // console.log(res)

            })
        }

        return (

            <div className='LastWatched_mod'>

                <div className='recentlywatched_inner_mod'>
                    <img className='poster_mod' src={movie_poster} alt='Poster' />
                </div>
                <div className='recentlywatched_inner_mod'>
                    <form className='ui form'>

                        <div className='field'>Movie Name
                            <input type='text' placeholder={movie_name} onChange={(event) => this.setState({ movieName: event.target.value })}
                                value={movie_name} required></input>
                        </div>
                        <div className='field'>Comment
                            <textarea rows='2' placeholder={movie_comment} onChange={(event) => this.setState({ movieComment: event.target.value })}
                                value={this.state.movieComment}></textarea>
                        </div>
                        <div className='field' onClick={nimivaihdos}>Rating:<StarRating /></div>
                        <div className='field'>Watched: {movieWatched.substring(0, 10)}
                        </div><div className='edit'><br />
                            <button onClick={submitEdit} className='editButton' style={{ backgroundColor: '#00a67c' }}>Submit changes</button>
                            <button onClick={Delete} className='deleteButton' style={{ backgroundColor: '#e34350' }}>Delete movie</button></div>
                    </form>
                </div>

            </div>

        )

    }

}

export default CrudEdit