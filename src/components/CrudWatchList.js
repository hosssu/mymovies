import React from 'react';
import axios from 'axios';
import './style.css';
import Modal from 'react-modal';
import CrudPost from './CrudPost';
import emptyPic from './image/empty.jpg'

class WatchList extends React.Component {

    state = {
        user: JSON.parse(window.localStorage.getItem('username')),
        recentlyW: [{
            movieName: "You haven't added any movies to your watchlist yet",
            movieOverview: "You can add movies from the TMDB search feature on Mymovies front page",
            username: JSON.parse(window.localStorage.getItem('username')),
            poster_image: emptyPic,
            wlist: 1
        }],
        variable: 5,
        buttonText: 'Show more...',
        show: false,
        display: '',
        showModal: false,
        elokuva: '',
        hover: '',
        movie_poster: '',
        movie_id: '',
        id: '',
        movieOverview: '',
        wlist: 0,
    }

    componentDidMount() {
        this.getMovies(this.state.recentlyW);
    }

    componentDidUpdate(elokuva) {
        window.localStorage.setItem('movie_name', JSON.stringify(this.state.elokuva));
        window.localStorage.setItem('movie_poster', JSON.stringify(this.state.movie_poster))
        window.localStorage.setItem('movie_id', JSON.stringify(this.state.movie_id))
        window.localStorage.setItem('id', JSON.stringify(this.state.id))
    }

    getMovies = async () => {
        const res = await axios.get('/getWlist.php')
        this.setState({ recentlyW: res.data })
        console.log(res.data)
        if (res.data.filter(movie => { return movie.wlist == 1 && movie.username == JSON.parse(window.localStorage.getItem('username')) })[0] == null) {
            this.setState({
                recentlyW: [{
                    movieName: "You haven't added any movies to your watchlist yet",
                    movieOverview: "You can add movies to your watchlist from the TMDB search on Mymovies front page",
                    username: JSON.parse(window.localStorage.getItem('username')),
                    poster_image: emptyPic,
                    wlist: 1
                }], display: 'none'
            });
        } else { }
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

        }

        const klousModal = () => {
            this.setState({ showModal: false })
        }

        const OpenModal = () => {
            var leffat = this.state.recentlyW.filter(movie => { return movie.id === this.state.hover })
            this.setState({ elokuva: leffat[0].movieName })
            this.setState({ movie_poster: leffat[0].poster_image })
            this.setState({ movie_id: leffat[0].movie_id })
            this.setState({ id: leffat[0].id })
            this.setState({ showModal: true })
        }

        const Delete = () => {
            var leffat = this.state.recentlyW.filter(movie => { return movie.id === this.state.hover })
            axios.post('/delete.php', {
                movie_id: leffat[0].id,
            }).then((res) => {
                document.location.reload()
                // console.log(res)

            })
        }


        const tmdb = 'https://www.themoviedb.org/movie/'

        return (

            <><Modal className='modal' style={{ overlay: { paddingTop: '20px', zIndex: '1000', overflowY: 'auto' } }} isOpen={this.state.showModal} onRequestClose={klousModal} ariaHideApp={false}>
                < div className='ui dimmer show modals visible active' >
                    <div className='LastWatched_mod'>
                        <div>
                            <CrudPost Delete={Delete} /><br></br>
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
                                        <p>{recent.movieOverview}</p>
                                    </div>
                                </div>
                                <div className='editButtonContainer'>
                                    <button className='addButton' style={{ display: `${this.state.display}` }} onMouseEnter={() => this.setState({ hover: recent.id })} onClick={OpenModal}>Add to watched</button><br />
                                    <button className='removeButton' onMouseEnter={() => this.setState({ hover: recent.id })} onClick={Delete} style={{ display: `${this.state.display}` }}>Remove</button>
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
export default WatchList;