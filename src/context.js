import React from 'react'
import axios from 'axios'

// Context API
const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    }

    async componentDidMount() {
        // Using API key from .env file. Need to restart server after setting env variable
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`);
        // console.log(res.data);
        this.setState({ track_list: res.data.message.body.track_list });
    }

    render () {
        // Whatever is wrapped in the exported Provider tag will become this.props.children.
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;