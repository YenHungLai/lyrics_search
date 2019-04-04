import React from 'react'
import { Link } from 'react-router-dom'

const Track = (props) => {
    const {track} = props;
    return (
        <div className="col s6 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title truncate">{track.artist_name}</span>

                    <p className='truncate'>
                        <strong><i className="material-icons">play_arrow</i>Track</strong>: {track.track_name}
                        <br />
                        <strong><i className="material-icons">album</i>Album</strong>: {track.album_name}
                    </p>

                    <Link to={`/lyrics/track/${track.track_id}`} className='waves-effect waves-light btn-small mt-6 w-full grey darken-3' >
                        <i className="material-icons">chevron_right</i>View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track
