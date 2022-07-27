import React from 'react';
import './style.css';
import MymoviesPic from './image/mymovies.jpg';
import TmdbSearch from './TmdbSearch';
import CrudGet from './CrudGet';
import CrudGetFriends from './CrudGetFriends';

class home extends React.Component {

    state = { username: window.localStorage.getItem('username'), show: '' }

    render() {

        return (

            <div>
                <img className='mymovies' src={MymoviesPic} alt="MyMovies App" />
                <div className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                    <div className={this.state.username ? 'LastWatched' : 'hide'} >
                        <h2 className='ui header' style={{ textAlign: 'center' }}>Recently watched</h2>
                        <CrudGet />
                    </div> <br />

                    <div className={this.state.username ? 'LastWatched' : 'hide'} >
                        <h2 className='ui header' style={{ textAlign: 'center' }}>What friends have watched</h2>
                        <CrudGetFriends />
                    </div> <br />



                    <div className='LastWatched'>
                        <TmdbSearch />
                    </div> <br></br><br></br>


                    <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>

                </div >

            </div >

        )
    }
}


export default home;