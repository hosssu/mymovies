import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import './style.css';
import plusPic from './image/plus.png';
import Modal from 'react-modal';
import CrudPost from './CrudPost'

class TmdbSearch extends React.Component {

    state = { data: [], elokuva: '', MoviePoster: '', showModal: false, hover: '', movie_id: '' }

    onSearchSubmit = async (entry) => {
        const poster_URL = `https://image.tmdb.org/t/p/original`;
        const API_KEY = "e7a1c61ec92c97b51e99914c3442acee"
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${entry}`)
        this.setState({ data: res.data.results })


    }

    componentDidUpdate(elokuva) {
        window.localStorage.setItem('movie_name', JSON.stringify(this.state.elokuva));
        window.localStorage.setItem('movie_poster', JSON.stringify(this.state.MoviePoster))
        window.localStorage.setItem('movie_id', JSON.stringify(this.state.movie_id))
    }


    render() {

        const poster_URL = `https://image.tmdb.org/t/p/original`;

        const CloseModal = () => {
            this.setState({ showModal: false })
        }


        const handleClick = () => {
            var leffat = this.state.data.filter(movie => { return movie.id === this.state.hover })

            this.setState({ elokuva: leffat[0].original_title + ' - ' + leffat[0].release_date?.substring(0, 4) })
            this.setState({ MoviePoster: poster_URL + leffat[0].poster_path })
            this.setState({ movie_id: leffat[0].id })
            this.setState({ showModal: true })
        }


        return (
            <div>
                <Modal className='modal' isOpen={this.state.showModal} onRequestClose={CloseModal} ariaHideApp={false}>
                    < div className='ui dimmer show modals visible active' >
                        <div className='ui raised very padded text container segment'>
                            <div>
                                <CrudPost /><br></br>
                                <button className='ui button' onClick={CloseModal}>Close</button>
                            </div >
                        </div >
                    </div >
                </Modal>
                <h2 className="ui header" style={{}}> Add a movie from TMDB</h2>
                <div className='ui container' style={{ marginTop: '30px' }}>
                    <SearchInput onSearchSubmit={this.onSearchSubmit} />
                    <br></br>

                    {this.state.data.map(movie => (
                        <div key={movie.id}>
                            <div className='ui segment' style={{ backgroundColor: 'white' }}>
                                <div className="ui two column very relaxed grid">
                                    <div className='column' >
                                        <div className='ontainer' onMouseEnter={() => this.setState({ hover: movie.id })} onMouseLeave={() => this.setState({ hover: '' })} >
                                            <img className="poster" src={poster_URL + movie.poster_path} alt="image" />
                                            <div className='overlay'>
                                                <img className='imgplus' src={plusPic} onClick={handleClick} />
                                                <p className='add'>Add to watched!</p></div></div></div>

                                    <div className='column'><div className='dividerr'>
                                        <h2 className='ui header' style={{ marginTop: '10px' }}>{movie.original_title} - ({movie.release_date?.substring(0, 4)})</h2>
                                        <h3>{movie.overview}</h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    ))}


                </div>
            </div>
        )

    }
}

Modal.setAppElement("#modal")
export default TmdbSearch;