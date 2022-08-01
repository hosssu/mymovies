import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import './style.css';
import Modal from 'react-modal';
import CrudPost from './CrudPost'

class TmdbSearch extends React.Component {

    state = { data: [], showModal: false, hover: '', movie_id: '', wlist: 1 }

    onSearchSubmit = async (entry) => {

        const API_KEY = "e7a1c61ec92c97b51e99914c3442acee"
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${entry}`)
        this.setState({ data: res.data.results })
        //console.log(res.data.results)
    }


    render() {

        const poster_URL = `https://image.tmdb.org/t/p/original`;
        const tmdb = 'https://www.themoviedb.org/movie/';

        const CloseModal = () => {
            this.setState({ showModal: false })
        }

        const openModal = () => {
            this.setState({ showModal: true })

        }

        const addToLocal = () => {
            var leffat = this.state.data.filter(movie => { return movie.id === this.state.hover })
            if (leffat[0].release_date) {
                var release_date = leffat[0].release_date?.substring(0, 4)
            } else {
                var release_date = null
            }
            window.localStorage.setItem('movie_name', JSON.stringify(leffat[0].original_title + ' - ' + release_date))
            window.localStorage.setItem('movie_poster', JSON.stringify(poster_URL + leffat[0].poster_path))
            window.localStorage.setItem('movie_id', JSON.stringify(leffat[0].id))
            window.localStorage.setItem('movieOverview', JSON.stringify(leffat[0].overview))

        }

        const addWatchList = async () => {
            await axios.post('/post.php', {
                username: JSON.parse(window.localStorage.getItem('username')),
                movie_id: JSON.parse(window.localStorage.getItem('movie_id')),
                movieName: JSON.parse(window.localStorage.getItem('movie_name')),
                poster_image: JSON.parse(window.localStorage.getItem('movie_poster')),
                movieOverview: JSON.parse(window.localStorage.getItem('movieOverview')),
                wlist: this.state.wlist,
            }).then((res) => {
                console.log(res)
            })
            alert(JSON.parse(window.localStorage.getItem('movie_name')) + ' has been added to your watchlist!')
        }


        return (
            <div>
                <Modal className='modal' style={{ overlay: { paddingTop: '20px', zIndex: '1000', overflowY: 'auto' } }} isOpen={this.state.showModal} onRequestClose={CloseModal} ariaHideApp={false}>
                    < div className='ui dimmer show modals visible active' >
                        <div className='LastWatched_mod'>
                            <div>
                                <CrudPost /><br></br>
                                <button className='deleteButton' onClick={CloseModal}>Close</button>
                            </div >
                        </div >
                    </div >
                </Modal>
                <h2 style={{ textAlign: 'center' }}> Search movies from TMDB</h2>

                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <br></br>

                {this.state.data.map(movie => (
                    <div key={movie.id} className='tmdbsearch'>

                        <div className="tmdbsearch_inner" >
                            <div className='tmdbsearch_imagediv'>
                                <img className="poster" src={poster_URL + movie.poster_path} alt="image" />
                                <div className="tmdbsearch_inner">
                                    <div tabIndex="0" class="addMenu" onMouseOver={() => this.setState({ hover: movie.id })}>
                                        <div className="addMenu-dropdown" onMouseEnter={addToLocal}>
                                            <a onClick={openModal}>WATCHED</a>
                                            <a onClick={addWatchList}>WATCHLIST</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='tmdbsearch_inner'>
                            <h2 style={{ marginTop: '10px' }}>{movie.original_title} - ({movie.release_date?.substring(0, 4)})</h2>
                            <p>{movie.overview}</p>
                            <p><a href={tmdb + movie.id} target='_blank' rel="noreferrer">View movie in the The Movie Database</a> </p>
                        </div>
                    </div>
                ))
                }
            </div>
        )

    }
}

Modal.setAppElement("#modal")
export default TmdbSearch;