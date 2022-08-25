import React from 'react';
import './style.css';
import MymoviesPic from './image/mymovies.jpg';
import TmdbSearch from './TmdbSearch';
import CrudGet from './CrudGet';
import CrudGetFriends from './CrudGetFriends';
import { AuthContext } from '../context/AuthContext';

const home = () => {


    return (

        <AuthContext.Consumer>{(context) => {
            const { isLoggedIn } = context

            return (

                <div className='LastWatched' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                    <img className='mymovies' src={MymoviesPic} alt="MyMovies App" />
                    <div className={isLoggedIn ? 'LastWatched' : 'hide'} >
                        <h2 style={{ textAlign: 'center' }}>Recently added to MyMovies</h2>
                        <CrudGet />
                    </div> <br />

                    <div className={isLoggedIn ? 'LastWatched' : 'hide'} >
                        <h2 style={{ textAlign: 'center' }}>What others have watched recently</h2>
                        <CrudGetFriends />
                    </div> <br />

                    <div className='LastWatched'>

                        <TmdbSearch />
                    </div> <br></br><br></br>


                    <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>

                </div >



            )
        }}

        </AuthContext.Consumer>)
}



export default home;