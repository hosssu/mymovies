import React from 'react';
import axios from 'axios';
import './style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import StarRating from '../StarRating';

class CrudPost extends React.Component {

    state = { movieName: '', movieComment: '', movieWatched: '', startDate: (new Date()), poster_image: '', username: window.localStorage.getItem('username'), movie_id: '' }

    render() {

        const nimivaihdos = (date) => {


            this.setState({ username: getUser })
            this.setState({ movieName: movie_name })
            this.setState({ poster_image: movie_poster })
            this.setState({ movie_id: movieID })
            this.setState({ movieWatched: new Date() })


        }

        var getUser = this.state.username.substring(1, this.state.username.length - 1)
        var movie_poster = window.localStorage.getItem('movie_poster')
        var movie_poster = movie_poster.substring(1, movie_poster.length - 1)
        var movie_name = window.localStorage.getItem('movie_name')
        var movie_name = movie_name.substring(1, movie_name.length - 1)
        var movieID = window.localStorage.getItem('movie_id')

        const submitReview = () => {
            axios.post('/post.php', {
                username: this.state.username,
                movie_id: this.state.movie_id,
                movieName: this.state.movieName,
                movieComment: this.state.movieComment,
                movieWatched: this.state.movieWatched,
                poster_image: this.state.poster_image,
                movieRating: window.localStorage.getItem('movieRating'),
            }).then((res) => {
                console.log(res)

            })

        }
        return (
            <>
                {this.state.username ? (
                    <div className='ui grid'>
                        <div className='two column row'>
                            <div className='column'>
                                <img className='poster' src={movie_poster} alt='Poster' />
                            </div>
                            <div className='column'>
                                <form className='ui form' onSubmit={submitReview}>

                                    <div className='field'>Movie Name
                                        <input type='text' placeholder={movie_name} onClick={nimivaihdos} onChange={(event) => this.setState({ movieName: event.target.value })}
                                            value={this.state.movieName} required></input>
                                    </div>
                                    <div className='field'>Comment
                                        <textarea rows='2' placeholder='Write your movie comment' onChange={(event) => this.setState({ movieComment: event.target.value })}
                                            value={this.state.movieComment} required></textarea>
                                    </div>
                                    <div className='field'>Rating:<StarRating /></div>
                                    <div className='field'>Date watched
                                        <DatePicker selected={this.state.startDate} onChange={(date) => this.setState({ startDate: date, movieWatched: date })} />
                                    </div><br />

                                    <button type='submit' className='ui button' style={{ backgroundColor: '#009966' }}>Add movie to your watched list!</button>
                                </form>
                            </div>
                        </div>
                    </div>) : (<div> You need to be logged in to add movies to your watched list! </div>)}
            </>
        )

    }

}

export default CrudPost