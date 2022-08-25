import React from 'react';
import CrudGetFriendsAll from './CrudGetFriendsAll';
import './style.css';


export default function Friends() {

    return (
        <div>
            <div>
                <div className='LastWatched' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>

                    <div className='LastWatched'>



                        <CrudGetFriendsAll />
                    </div>

                    <br></br><br></br>

                    <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>
                </div >
            </div>
        </div >

    )
}


