import React from 'react';
import axios from 'axios';
import './style.css';
import { FaStar } from 'react-icons/fa'

class CrudGetFriends extends React.Component {

    state = { user: JSON.parse(window.localStorage.getItem('username')), recentlyW: [{ movieName: "You haven't added any movies to your watchlist yet", movieOverview: "You can add movies from the TMDB search feature on Mymovies front page", user: JSON.parse(window.localStorage.getItem('username')), wlist: 0 }], variable: 5, buttonText: 'Show more...', show: false }

    componentDidMount() {
        this.getMovies(this.state.recentlyW);
    }

    getMovies = async () => {
        if (this.state.user) {
            const res = await axios.get('/get.php')
            //console.log(res)
            this.setState({ recentlyW: (res.data) })
        } else { return null }
    }

    render() {

        const showMore = () => {
            if (this.state.show === true) {
                this.setState({ variable: 5 })
                this.setState({ buttonText: "Show more..." })
                this.setState({ show: false })
            } else {
                this.setState({ variable: 10 })
                this.setState({ buttonText: "Show less..." })
                this.setState({ show: true })
            }
            console.log(this.state.show)

        }

        const tmdb = 'https://www.themoviedb.org/movie/'


        return (
            <>{this.state.recentlyW ? (
                <div >
                    {this.state.recentlyW.filter(movie => { return movie.username !== this.state.user }).slice(0, `${this.state.variable}`).map(recent => (

                        <div className="item_movie" key={recent.id}>
                            <details>
                                <summary> {recent.movieName} by {recent.username}</summary>
                                <div className='recentlywatched'>
                                    <div className='recentlywatched_inner'>
                                        <img className='poster_recently' src={recent.poster_image} alt='Poster' />
                                    </div>
                                    <div className='recentlywatched_inner'>
                                        <p>Rating:  {recent.movieRating ? ([...Array(parseInt(recent.movieRating))].map(() => { return (< FaStar className='star' color={'#f2d224'} size={20} />) })) : ('not available')}</p>
                                        <p>Comment: {recent.movieComment}</p>
                                        <p>Watched: {recent.movieWatched?.substring(0, 10)}</p>
                                        <p><a href={tmdb + recent.movie_id} target='_blank' rel="noreferrer">Movie in The Movie Database</a></p>
                                    </div>
                                </div>
                            </details>
                        </div>
                    ))
                    }<br /><button className='ui button' onClick={showMore}>{this.state.buttonText}</button>
                </div>

            ) : (<div className='errormsg'><p className='error'>Could not connect to database. Check connection and username/password.</p></div>)
            }</>

        )
    }

}

export default CrudGetFriends;