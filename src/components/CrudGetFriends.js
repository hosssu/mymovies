import React from 'react';
import axios from 'axios';
import './style.css';

class CrudGetFriends extends React.Component {

    state = { user: window.localStorage.getItem('username'), recentlyW: [], variable: 5, buttonText: 'Show more...', show: false }

    componentDidMount() {
        this.getMovies(this.state.recentlyW);
    }

    componentDidUpdate(recentlyW) {
        if (this.state.recentlyW !== recentlyW) {
            // console.log(this.state.recentlyW)
        }
    }

    getMovies = async () => {
        if (this.state.user) {
            const res = await axios.get('/get.php')
            //console.log(res)
            this.setState({ recentlyW: (res.data) })
            this.setState({ user: this.state.user.substring(1, this.state.user.length - 1) })
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

                        <div className="item" key={recent.id}>
                            <details>
                                <img className='poster_recently' src={recent.poster_image} alt='Poster' />
                                <summary> {recent.movieName} By {recent.username}</summary>
                                <br></br>
                                <p></p>
                                <p>Comment: {recent.movieComment}</p>
                                <p>Watched: {recent.movieWatched?.substring(0, 10)}</p>
                                <p><a href={tmdb + recent.movie_id} target='_blank' rel="noreferrer">Movie in The Movie Database</a></p>
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