import React from 'react'
import { Consumer } from '../context'
import Spinner from './Spinner'
import Track from './Track'

class Tracks extends React.Component {
    render () {
        return(
            <Consumer>
                {value => {
                    const { track_list, heading } = value;
                    if(track_list === undefined || track_list.length === 0) {
                        return(
                            <div className='center-align'><Spinner /></div>
                        )
                    } else {
                        return(
                            <React.Fragment>
                                <h3 className='center-align my-8'>{heading}</h3>
                                <div className="row">
                                    {track_list.map(item => (
                                        <Track key={item.track.track_id} track={item.track} />
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Tracks;