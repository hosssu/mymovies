import React from 'react';
import CrudGet from './CrudGet';


export default function Friends() {

    return (
        <div>
            <div>
                <div className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>

                    <div className='LastWatched'>


                        <h2 className='ui header'>Watched by friends</h2>
                        <CrudGet />
                    </div>

                    <br></br><br></br>

                    <p className="foot">Powered by <a href="https://www.themoviedb.org/">The Movie Database API</a></p>
                </div >
            </div>
        </div >

    )
}


