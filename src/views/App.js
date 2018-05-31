import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Competitions from 'views/Competitions'
import Competition from 'views/Competition'
import Grid from '@material-ui/core/Grid'
import './App.css'

class App extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <Switch>
                        <Route exact path="/" component={Competitions} />
                        <Route path="/competition" component={Competition} />
                    </Switch>
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
            </Grid>
        )
    }
}

export default App
