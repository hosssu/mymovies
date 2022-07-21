import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class CrudGet extends React.Component {

    state = { recentlyW: [], username: 'jami' }

    componentDidMount() {
        axios.get('http://localhost:3001/api/get', { username: this.state.username }).then((res) => {
            this.setState({ recentlyW: res.data })
        })
    }

    componentDidUpdate(recentlyW) {
        if (this.state.recentlyW !== recentlyW) {
            console.log(recentlyW)
        }
    }

    render() {
        const tmdb = 'https://www.themoviedb.org/movie/'
        return (
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
        )
    }
}

export default CrudGet;