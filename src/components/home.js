import React from 'react';
import './style.css';
import MymoviesPic from './image/mymovies.jpg';
import TmdbSearch from './TmdbSearch';
import CrudGet from './CrudGet';
import CrudGetFriends from './CrudGetFriends';

class home extends React.Component {

    state = { username: JSON.parse(window.localStorage.getItem('username')), show: '' }

    render() {

        return (



            <div className='LastWatched' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                <img className='mymovies' src={MymoviesPic} alt="MyMovies App" />
                <div className={this.state.username ? 'LastWatched' : 'hide'} >
                    <h2 style={{ textAlign: 'center' }}>Recently watched movies</h2>
                    <CrudGet />
                </div> <br />

                <div className={this.state.username ? 'LastWatched' : 'hide'} >
                    <h2 style={{ textAlign: 'center' }}>What others have watched recently</h2>
                    <CrudGetFriends />
                </div> <br />



                <div className='LastWatched'>

                    <TmdbSearch />
                </div> <br></br><br></br>


                <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>

            </div >



        )
    }
}


export default home;