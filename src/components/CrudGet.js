import React from 'react';
import axios from 'axios';
import './style.css';
import { FaStar } from 'react-icons/fa'
import Modal from 'react-modal';
import CrudEdit from './CrudEdit'

class CrudGet extends React.Component {

    state = {
        user: JSON.parse(window.localStorage.getItem('username')),
        recentlyW: [{ movieName: "You haven't added any movies to your watchlist yet", movieOverview: "You can add movies from the TMDB search feature on Mymovies front page", user: JSON.parse(window.localStorage.getItem('username')), wlist: 0 }],
        variable: 5,
        buttonText: 'Show more...',
        show: false,
        showModal: false,
        elokuva: '',
        movieComment: '',
        movieRating: '',
        hover: '',
        movie_poster: '',
        movie_id: '',
        movieWatched: '',
    }

    componentDidMount() {
        this.getMovies(this.state.recentlyW);
    }


    componentDidUpdate(elokuva) {
        window.localStorage.setItem('movie_name', JSON.stringify(this.state.elokuva));
        window.localStorage.setItem('movieComment', JSON.stringify(this.state.movieComment))
        window.localStorage.setItem('movieRating', JSON.stringify(this.state.movieRating))
        window.localStorage.setItem('movie_poster', JSON.stringify(this.state.movie_poster))
        window.localStorage.setItem('movie_id', JSON.stringify(this.state.movie_id))
        window.localStorage.setItem('movieWatched', JSON.stringify(this.state.movieWatched))
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
            //console.log(this.state.show)
        }

        const klousModal = () => {
            this.setState({ showModal: false })
        }


        const OpenModal = () => {
            var leffat = this.state.recentlyW.filter(movie => { return movie.id === this.state.hover })
            this.setState({ elokuva: leffat[0].movieName })
            this.setState({ movieComment: leffat[0].movieComment })
            this.setState({ movieRating: leffat[0].movieRating })
            this.setState({ movie_poster: leffat[0].poster_image })
            this.setState({ movie_id: leffat[0].id })
            this.setState({ movieWatched: leffat[0].movieWatched })
            this.setState({ showModal: true })


        }

        const tmdb = 'https://www.themoviedb.org/movie/'


        return (
            <><Modal className='modal' style={{ overlay: { paddingTop: '20px', zIndex: '1000', overflowY: 'auto' } }} isOpen={this.state.showModal} onRequestClose={klousModal} ariaHideApp={false}>
                < div className='ui dimmer show modals visible active' >
                    <div className='LastWatched'>
                        <div>
                            <CrudEdit /><br></br>
                            <button className='deleteButton' style={{ backgroundColor: '#cc3333' }} onClick={klousModal}>Close</button>
                        </div >
                    </div >
                </div >
            </Modal>{this.state.recentlyW ? (
                <div >
                    {this.state.recentlyW.filter(movie => { return movie.username === this.state.user }).slice(0, `${this.state.variable}`).map(recent => (

                        <div className="item_movie" key={recent.id}>
                            <details>
                                <summary> {recent.movieName}</summary>
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
                                <div className='editButtonContainer'>
                                    <button className='editButton' onMouseEnter={() => this.setState({ hover: recent.id })} onClick={OpenModal}>Edit</button>

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

Modal.setAppElement("#modal")
export default CrudGet;