import React from 'react';
import './style.css';
import MymoviesPic from './image/mymovies.jpg';
import TmdbSearch from './TmdbSearch';
import CrudGet from './CrudGet';


const home = () => {

    return (
        <div>
            <img className='mymovies' src={MymoviesPic} alt="MyMovies App" />

            <div className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>

                <div className='LastWatched'>
                    <h2 className='ui header' >Recently watched</h2>
                    <CrudGet />
                    <h3><a className='more'>Show more...</a></h3>
                </div><br></br><br></br>

                <div className='LastWatched'>
                    <h2 className='ui header'>Recently watched by friends</h2>

                    <div className='LastWatched' style={{ padding: '0px', }}><h3><a className='more'>Show More...</a></h3>
                    </div></div><br></br><br></br>


                <TmdbSearch />


                <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>
            </div >
        </div>

    )

}

export default home;