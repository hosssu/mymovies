import React from 'react';
import axios from 'axios';
import './style.css';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import StarRating from './StarRating';
import { AuthContext } from "../context/AuthContext";

class CrudEdit extends React.Component {
    static contextType = AuthContext;
    state = {
        movieName: window.localStorage.getItem('movie_name'),
        movieComment: window.localStorage.getItem('movieComment'),
        movieWatched: window.localStorage.getItem('movieWatched'),
        poster_image: window.localStorage.getItem('movie_poster'),
        username: this.context.username,
        movie_id: window.localStorage.getItem('movie_id'),
        recentlyW: []
    }


    render() {


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
                movie_id: window.localStorage.getItem('movie_id'),
            }).then((res) => {
                // console.log(res)

            })
        }

        return (

            <div className='LastWatched_mod'>

                <div className='recentlywatched_inner_mod'>
                    <img className='poster_mod' src={this.state.poster_image} alt='Poster' />
                </div>
                <div className='recentlywatched_inner_mod'>
                    <form className='ui form'>

                        <div className='field'>Movie Name
                            <input type='text' placeholder={this.state.movieName} onChange={(event) => this.setState({ movieName: event.target.value })}
                                value={this.state.movieName} required></input>
                        </div>
                        <div className='field'>Comment
                            <textarea rows='2' placeholder={this.state.movieComment} onChange={(event) => this.setState({ movieComment: event.target.value })}
                                value={this.state.movieComment}></textarea>
                        </div>
                        <div className='field' >Rating:<StarRating /></div>
                        <div className='field'>Watched: {this.state.movieWatched.substring(0, 10)}
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