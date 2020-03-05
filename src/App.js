import React from 'react'
import { Switch } from 'react-router-dom'
import HomePage from './Homepage'
import UserPage from './Userpage'

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/:id" component={UserPage} />
        </Switch>
    )
}