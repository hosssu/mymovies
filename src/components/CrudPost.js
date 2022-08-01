import React from 'react';
import axios from 'axios';
import './style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import StarRating from './StarRating';

class CrudPost extends React.Component {

    state = {
        movieName: '',
        movieComment: '',
        movieWatched: '',
        startDate: (new Date()),
        poster_image: '',
        username: JSON.parse(window.localStorage.getItem('username')),
        movie_id: '',
        id: '',
        movieOverview: '',
        wlist: 0,
    }

    render() {

        const FieldUpdate = () => {

            this.setState({ id: id })
            this.setState({ movieName: movie_name })
            this.setState({ poster_image: movie_poster })
            this.setState({ movie_id: movieID })
            this.setState({ movieWatched: this.state.startDate })
            this.setState({ movieOverview: movieOverview })

        }

        var id = JSON.parse(window.localStorage.getItem('id'))
        var movie_poster = JSON.parse(window.localStorage.getItem('movie_poster'))
        var movie_name = JSON.parse(window.localStorage.getItem('movie_name'))
        var movieID = JSON.parse(window.localStorage.getItem('movie_id'))
        var movieOverview = JSON.parse(window.localStorage.getItem('movieOverview'))

        const submitReview = (event) => {

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
            }).then((res) => {
                this.props.Delete()
                console.log(res)
            })

        }
        return (
            <>
                {this.state.username ? (
                    <div className='LastWatched_mod'>

                        <div className='recentlywatched_inner_mod'>
                            <img className='poster_mod' src={movie_poster} alt='Poster' />
                        </div>
                        <div className='recentlywatched_inner_mod'>
                            <form className='ui form' onSubmit={submitReview}>

                                <div className='field'>Movie Name
                                    <input type='text' placeholder={movie_name} onChange={(event) => this.setState({ movieName: event.target.value })}
                                        value={this.state.movieName}></input>
                                </div>
                                <div className='field'>Comment
                                    <textarea rows='2' placeholder='Write your movie comment' onClick={FieldUpdate} onChange={(event) => this.setState({ movieComment: event.target.value })}
                                        value={this.state.movieComment} required></textarea>
                                </div>
                                <div className='field'>Rating:<StarRating /></div>
                                <div className='field'>Date watched
                                    <DatePicker selected={this.state.startDate} onChange={(date) => this.setState({ startDate: date, movieWatched: date })} />
                                </div><br />

                                <button type='submit' className='editButton' >Add movie to your watched list!</button>
                            </form>
                        </div>
                    </div>) : (<div> You need to be logged in to add movies to your watched list! </div>)}
            </>
        )

    }

}

export default CrudPost