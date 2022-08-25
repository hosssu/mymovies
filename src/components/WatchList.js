import React from 'react';
import './style.css'
import CrudWatchList from './CrudWatchList'
import { AuthContext } from "../context/AuthContext";

class WatchList extends React.Component {
    static contextType = AuthContext;

    render() {

        return (
            <div>

                <div className='LastWatched' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                    <div className={this.context.isLoggedIn ? 'LastWatched' : 'hide'} >
                        <h2 style={{ textAlign: 'center' }}>Watchlist</h2>
                        <CrudWatchList />
                    </div> <br />

                    <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>
                </div >
            </div>
        )
    }

}

export default WatchList;
