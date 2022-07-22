import React from 'react';
import axios from 'axios';
import './style.css';

class CrudGet extends React.Component {

    state = { username: "jami", recentlyW: [] }


    componentDidMount() {
        this.getMovies(this.state.recentlyW);
    }

    componentDidUpdate(recentlyW) {
        if (this.state.recentlyW !== recentlyW) {
            console.log(this.state.recentlyW)
        }
    }

    getMovies = async () => {
        const res = await axios.get('http://localhost:3301/get', {
            username: this.state.username,
        })
        this.setState({ recentlyW: res.data })
        console.log(this.state.username)
    }

    render() {


        const tmdb = 'https://www.themoviedb.org/movie/'

        return (
            <>{this.state.recentlyW ? (
                <div >
                    {this.state.recentlyW.slice(0, 5).map(recent => (

                        <div className="item" key={recent.id}>
                            <details>
                                <img className='poster_recently' src={recent.poster_image} />
                                <summary> {recent.movieName}</summary>
                                <br></br>
                                <p></p>
                                <p>Comment: {recent.movieComment}</p>
                                <p>Watched: {recent.movieWatched?.substring(0, 10)}</p>
                                <p><a href={tmdb + recent.movie_id} target='_blank'>Movie in The Movie Database</a></p>
                            </details>
                        </div>

                    ))
                    }
                </div>
            ) : (<div className='errormsg'><p className='error'>Could not connect to database. Check connection and username/password.</p></div>)}</>
        )
    }

}

export default CrudGet;