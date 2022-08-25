import React from 'react';
import './style.css'
import CrudGetAll from './CrudGetAll'

const watched = () => {
    return (
        <div>


            <div className='LastWatched' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>

                <div className='LastWatched'>
                    <h2 style={{ textAlign: 'center' }}>Search movies from MyMovies</h2>
                    <CrudGetAll />
                </div><br></br><br></br>

                <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>
            </div >
        </div>
    )

}

export default watched;
