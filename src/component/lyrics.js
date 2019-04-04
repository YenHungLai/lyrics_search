import React from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

class Lyrics extends React.Component {
    state = {
        track: {},
        lyrics: {}
    }

    async componentDidMount() {
        const res_lyrics = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`);
        console.log(res_lyrics.data);
        this.setState({ lyrics: res_lyrics.data.message.body.lyrics });
        const res_track = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`);
        console.log(res_track.data);
        this.setState({ track: res_track.data.message.body.track });
        console.log(this.state);
    }

    render () {
        const { lyrics, track } = this.state;
        if(Object.keys(lyrics).length === 0 || Object.keys(track).length === 0) {
            return(<Spinner />)
        } else {
            return(
                <React.Fragment>
                    <Link to='/' className='btn-small grey darken-3 mt-10 mb-5'>Go Back</Link>

                    <div className="card">
                        <div className="card-content">
                            <span className="card-title truncate">{track.track_name} by <span className='font-extrabold'>{track.artist_name}</span></span>
                            <p>{lyrics.lyrics_body}</p>
                        </div>
                    </div>

                    <ul className="collection with-header">
                        <li className="collection-item"><strong>Album ID</strong>: {track.album_id}</li>
                        <li className="collection-item"><strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}</li>
                        <li className="collection-item"><strong>Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}</li>
                    </ul>
                </React.Fragment>
            )
        }
    }
}

export default Lyrics;