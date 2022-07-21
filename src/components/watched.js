import React from 'react';
import CrudGet from './CrudGet';
import MymoviesPic from './image/mymovies.jpg';
import './style.css'

const watched = () => {
    return (
        <div>


            <div className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>

                <div className='LastWatched'>
                    <h2 className='ui header'>Watched</h2>
                    <CrudGet />
                </div><br></br><br></br>

                <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>
            </div >
        </div>
    )

}

export default watched;
