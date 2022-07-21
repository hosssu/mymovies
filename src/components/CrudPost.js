import React from 'react';
import axios from 'axios';
import './style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CrudPost extends React.Component {

    state = { movieName: '', movieComment: '', movieWatched: '', startDate: (new Date()), poster_image: '', username: '', movie_id: '' }



    render() {

        const nimivaihdos = () => {
            this.setState({ username: getUser })
            this.setState({ movieName: movie_name })
            this.setState({ poster_image: movie_poster })
            this.setState({ movie_id: movieID })
            console.log(this.state.poster_image)
        }
        var getUser = window.localStorage.getItem('username')
        var getUser = getUser.substring(1, getUser.length - 1)
        var movie_poster = window.localStorage.getItem('movie_poster')
        var movie_poster = movie_poster.substring(1, movie_poster.length - 1)
        var movie_name = window.localStorage.getItem('movie_name')
        var movie_name = movie_name.substring(1, movie_name.length - 1)
        var movieID = window.localStorage.getItem('movie_id')

        const submitReview = (event) => {
            axios.post('http://localhost:3001/api/insert', {
                username: this.state.username,
                movie_id: this.state.movie_id,
                movieName: this.state.movieName,
                movieComment: this.state.movieComment,
                movieWatched: this.state.movieWatched,
                poster_image: this.state.poster_image
            }).then(() => {

                alert('Great success!')
            })
        }
        return (



            <div className='ui grid'>
                <div className='two column row'>
                    <div className='column'>
                        <img className='poster' src={movie_poster} />
                    </div>
                    <div className='column'>
                        <form className='ui form'>

                            <div className='field'>Movie Name
                                <input type='text' placeholder={movie_name} onClick={nimivaihdos} onChange={(event) => this.setState({ movieName: event.target.value })}
                                    value={this.state.movieName}></input>
                            </div>
                            <div className='field'>Comment
                                <textarea rows='2' placeholder='Write your movie comment' onChange={(event) => this.setState({ movieComment: event.target.value })}
                                    value={this.state.movieComment}></textarea>
                            </div>

                            <div className='field'>Date watched
                                <DatePicker selected={this.state.startDate} onChange={(date) => this.setState({ startDate: date, movieWatched: date })} />

                            </div>

                            <button onClick={submitReview} className='ui button'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }

}

export default CrudPost