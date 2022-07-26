import React from 'react';
import axios from 'axios';
import './style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import StarRating from './StarRating';
import { AuthContext } from '../context/AuthContext';


class CrudPost extends React.Component {
    static contextType = AuthContext;

    state = {
        movieName: window.localStorage.getItem('movie_name'),
        movieComment: '',
        movieWatched: (new Date()),
        poster_image: window.localStorage.getItem('movie_poster'),
        username: JSON.parse(window.sessionStorage.getItem('session')).id,
        movie_id: window.localStorage.getItem('movie_id'),
        id: window.localStorage.getItem('id'),
        movieOverview: window.localStorage.getItem('movieOverview'),
        wlist: 0,
    }

    render() {

        const submitReview = (event) => {
            event.preventDefault()
            axios.post('/post.php', {
                username: this.state.username,
                movie_id: this.state.movie_id,
                movieName: this.state.movieName,
                movieComment: this.state.movieComment,
                movieWatched: this.state.movieWatched,
                poster_image: this.state.poster_image,
                movieRating: window.localStorage.getItem('movieRating'),
                movieOverview: this.state.movieOverview,
                wlist: this.state.wlist,
            })
            this.props.CloseModal()
            this.props.Delete()

        }

        return (
            <>
                {this.state.username ? (
                    <div className='LastWatched_mod'>

                        <div className='recentlywatched_inner_mod'>
                            <img className='poster_mod' src={this.state.poster_image} alt='Poster' />
                        </div>
                        <div className='recentlywatched_inner_mod'>
                            <form className='ui form' onSubmit={submitReview}>

                                <div className='field'>Movie Name
                                    <input type='text' placeholder={this.state.movieName} onChange={(event) => this.setState({ movieName: event.target.value })}
                                        value={this.state.movieName}></input>
                                </div>
                                <div className='field'>Comment
                                    <textarea rows='2' placeholder='Write your movie comment' onChange={(event) => this.setState({ movieComment: event.target.value })}
                                        value={this.state.movieComment} required></textarea>
                                </div>
                                <div className='field'>Rating:<StarRating /></div>
                                <div className='field'>Date watched
                                    <DatePicker selected={this.state.movieWatched} onChange={(date) => this.setState({ movieWatched: date })} />
                                </div><br />

                                <button type='submit' className='editButton' >Add to MyMovies!</button>
                            </form>
                        </div>
                    </div>) : (<div> You need to be logged in to add movies to your watched list! </div>)}
            </>
        )

    }

}

export default CrudPost