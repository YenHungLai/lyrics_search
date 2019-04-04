// TODO:
//    learn Context API
//    What is .env file???

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from './context'
import Navbar from './component/Navbar'
import Index from './component/Index'
import Lyrics from './component/lyrics'

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <React.Fragment>
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={Index} />
                                <Route eaxct path="/lyrics/track/:id" component={Lyrics} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
