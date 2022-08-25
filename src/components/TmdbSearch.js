import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import './style.css';
import Modal from 'react-modal';
import CrudPost from './CrudPost'
import { AuthContext } from '../context/AuthContext';
import tmdbPic from './image/tmdb.svg'

class TmdbSearch extends React.Component {
    static contextType = AuthContext;
    state = { data: [], providers: [], showModal: false, hover: '', movie_id: '', movieID: '', wlist: 1 }



    onSearchSubmit = async (entry) => {
        const API_KEY = "e7a1c61ec92c97b51e99914c3442acee"
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${entry}`)
        const result = await Promise.all(res.data.results.map((movie => (axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${API_KEY}`).then((res => { return res.data.results }))))))
        console.log(result)
        this.setState({ providers: result })
        this.setState({ data: res.data.results })
    }

    ListPopular = async () => {
        const API_KEY = "e7a1c61ec92c97b51e99914c3442acee"
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const result = await Promise.all(res.data.results.map((movie => (axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${API_KEY}`).then((res => { return res.data.results }))))))
        console.log(result)
        this.setState({ providers: result })
        this.setState({ data: res.data.results })

    }

    ListUpcoming = async () => {
        const API_KEY = "e7a1c61ec92c97b51e99914c3442acee"
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=FI`)
        const result = await Promise.all(res.data.results.map((movie => (axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${API_KEY}`).then((res => { return res.data }))))))
        console.log(result)
        this.setState({ providers: result })
        this.setState({ data: res.data.results })
    }



    watchProviders = (value) => {
        const poster_URL = `https://image.tmdb.org/t/p/original`
        if (!this.state.providers[value].FI)
            return 'No streaming available'
        else if (!this.state.providers[value].FI.flatrate && !this.state.providers[value].FI.buy && !this.state.providers[value].FI.rent) {
            return 'No streaming available'
        }

        //Rent 
        else if (!this.state.providers[value].FI.flatrate && !this.state.providers[value].FI.buy && this.state.providers[value].FI.rent) {
            const variable1 = this.state.providers[value].FI.rent.length
            return <div className='providersOuter'>
                {[...Array(variable1)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.rent[index].logo_path} /> Rent </div>)}
            </div>
        }
        //Buy 
        else if (!this.state.providers[value].FI.flatrate && this.state.providers[value].FI.buy) {
            const variable2 = this.state.providers[value].FI.buy.length
            return <div className='providersOuter'>
                {[...Array(variable2)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.buy[index].logo_path} /> Buy </div>)}
            </div>
        }

        //Stream
        else if (this.state.providers[value].FI.flatrate && !this.state.providers[value].FI.buy && !this.state.providers[value].FI.rent) {
            const variable = this.state.providers[value].FI.flatrate.length
            return <div className='providersOuter'>
                {[...Array(variable)].map((elem, index) => <div className='providers'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.flatrate[index].logo_path} /> Stream </div>)}
            </div>
        }

        //Stream and buy
        else if (this.state.providers[value].FI.flatrate && this.state.providers[value].FI.buy && !this.state.providers[value].FI.rent) {
            const variable = this.state.providers[value].FI.flatrate.length > 3 ? 3 : this.state.providers[value].FI.flatrate.length
            const variable2 = this.state.providers[value].FI.buy.length > 3 ? 3 : this.state.providers[value].FI.buy.length
            return <div className='providersOuter'>
                {[...Array(variable)].map((elem, index) => <div className='providers'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.flatrate[index].logo_path} /> Stream </div>)}
                {[...Array(variable2)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.buy[index].logo_path} /> Buy </div>)}
            </div>
        }

        //Stream and rent
        else if (this.state.providers[value].FI.flatrate && !this.state.providers[value].FI.buy && this.state.providers[value].FI.rent) {
            const variable = this.state.providers[value].FI.flatrate.length > 3 ? 3 : this.state.providers[value].FI.flatrate.length
            const variable1 = this.state.providers[value].FI.rent.length > 3 ? 3 : this.state.providers[value].FI.rent.length

            return <div className='providersOuter'>
                {[...Array(variable)].map((elem, index) => <div className='providers'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.flatrate[index].logo_path} /> Stream </div>)}
                {[...Array(variable1)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.rent[index].logo_path} /> Rent </div>)}

            </div>
        }

        //Buy and rent
        else if (!this.state.providers[value].FI.flatrate && this.state.providers[value].FI.buy && this.state.providers[value].FI.rent) {

            const variable1 = this.state.providers[value].FI.rent.length > 3 ? 3 : this.state.providers[value].FI.rent.length
            const variable2 = this.state.providers[value].FI.buy.length > 3 ? 3 : this.state.providers[value].FI.buy.length
            return <div className='providersOuter'>
                {[...Array(variable1)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.rent[index].logo_path} /> Rent </div>)}
                {[...Array(variable2)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.buy[index].logo_path} /> Buy </div>)}
            </div>
        }

        //Stream, buy and rent
        else if (this.state.providers[value].FI.flatrate && this.state.providers[value].FI.buy && this.state.providers[value].FI.rent) {
            const variable = this.state.providers[value].FI.flatrate.length > 3 ? 3 : this.state.providers[value].FI.flatrate.length
            const variable1 = this.state.providers[value].FI.rent.length > 3 ? 3 : this.state.providers[value].FI.rent.length
            const variable2 = this.state.providers[value].FI.buy.length > 3 ? 3 : this.state.providers[value].FI.buy.length
            return <div className='providersOuter'>
                {[...Array(variable)].map((elem, index) => <div className='providers'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.flatrate[index].logo_path} /> Stream </div>)}
                {[...Array(variable1)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.rent[index].logo_path} /> Rent </div>)}
                {[...Array(variable2)].map((elem, index) => <div className='providersBuy'><img className='providers_pic' src={poster_URL + this.state.providers[value].FI.buy[index].logo_path} /> Buy </div>)}
            </div>
        }
    }



    render() {

        const poster_URL = `https://image.tmdb.org/t/p/original`;
        const tmdb = 'https://www.themoviedb.org/movie/';

        const CloseModal = () => {
            this.setState({ showModal: false })

        }

        const CloseModalAfterPost = () => {
            alert(window.localStorage.getItem('movie_name') + ' has been added to MyMovies!')
            this.setState({ showModal: false })
            document.location.reload()
        }

        const openModal = () => {
            if (this.context.isLoggedIn) {
                this.setState({ showModal: true })
            } else { alert('You need to be logged in to add movies to MyMovies!') }
        }

        const addToLocal = () => {
            var leffat = this.state.data.filter(movie => { return movie.id === this.state.hover })
            if (leffat[0].release_date) {
                var release_date = leffat[0].release_date?.substring(0, 4)
            } else {
                var release_date = null
            }
            window.localStorage.setItem('movie_name', leffat[0].original_title + ' - ' + release_date)
            window.localStorage.setItem('movie_poster', poster_URL + leffat[0].poster_path)
            window.localStorage.setItem('movie_id', leffat[0].id)
            window.localStorage.setItem('movieOverview', leffat[0].overview)

        }

        const addWatchList = async () => {
            if (this.context.isLoggedIn) {
                await axios.post('/post.php', {
                    username: this.context.username,
                    movie_id: window.localStorage.getItem('movie_id'),
                    movieName: window.localStorage.getItem('movie_name'),
                    poster_image: window.localStorage.getItem('movie_poster'),
                    movieOverview: window.localStorage.getItem('movieOverview'),
                    wlist: this.state.wlist,
                }).then((res) => {
                    //console.log(res)
                })
                alert(window.localStorage.getItem('movie_name') + ' has been added to your watchlist!')
            } else { alert('You need to be logged in to add movies to watchlist!') }
        }



        return (
            <div>
                <Modal className='modal' style={{ overlay: { paddingTop: '20px', zIndex: '1000', overflowY: 'auto' } }} isOpen={this.state.showModal} onRequestClose={CloseModal} ariaHideApp={false}>
                    < div className='ui dimmer show modals visible active' >
                        <div className='LastWatched_mod'>
                            <div>
                                <CrudPost CloseModal={CloseModalAfterPost} /><br></br>
                                <button className='deleteButton' onClick={CloseModal}>Close</button>
                            </div >
                        </div >
                    </div >
                </Modal>
                <h2 style={{ textAlign: 'center' }}> Search or list movies from TMDB</h2>

                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <br></br>
                <div className='popularOuter'>
                    <div className='popular' onClick={this.ListPopular}>Popular</div>
                    <div className='popular2' onClick={this.ListUpcoming}>Upcoming</div>
                </div>

                {this.state.data.map((movie, index) => (
                    <div key={movie.id} className='tmdbsearchOuter'>
                        <div className='tmdbsearch'>

                            <div className="tmdbsearch_inner" >
                                <div className='tmdbsearch_imagediv'>
                                    <img className="poster" src={poster_URL + movie.poster_path} alt="image" />
                                    <div className="tmdbsearch_inner">
                                        <div tabIndex="0" class="addMenu" onMouseOver={() => this.setState({ hover: movie.id })}>
                                            <div className="addMenu-dropdown" onMouseEnter={addToLocal}>
                                                <a onClick={openModal}>MyMovies</a>
                                                <a onClick={addWatchList}>WATCHLIST</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tmdbsearch_inner'>
                                <h2 style={{ marginTop: '10px' }}>{movie.original_title} - ({movie.release_date?.substring(0, 4)})</h2>
                                Rating:
                                <p> <img src={tmdbPic} style={{ width: '80px' }} alt='The Movie Database Rating' /> {movie.vote_average} / 10</p>
                                <p>{movie.overview}</p>
                                <p><a href={tmdb + movie.id} target='_blank' rel="noreferrer">View movie in the The Movie Database</a> </p>
                            </div>

                        </div>
                        <div className='streaming'>{this.watchProviders(index)}</div>
                    </div>
                ))
                }


            </div>
        )

    }
}

Modal.setAppElement("#modal")
export default TmdbSearch;