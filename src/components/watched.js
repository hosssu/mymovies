import React from 'react';
import CrudGet from './CrudGet';
import './style.css'
import CrudGetAll from './CrudGetAll'
import CrudSearch from './CrudSearch';

const watched = () => {
    return (
        <div>


            <div className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>

                <div className='LastWatched'>
                    <h2 className='ui header'>Watched</h2>
                    <CrudGetAll />
                </div><br></br><br></br>

                <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>
            </div >
        </div>
    )

}

export default watched;
