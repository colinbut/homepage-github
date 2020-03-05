import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
import UserPageView from './UserPageView'

const GITHUB_API_URL = "https://api.github.com/users/"

const UserPage = (props) => {
    // setting initial state
    const initialState = {
        user: {},
        loading: true
    }

    // getter/setter
    const [user, setUser] = useState(initialState)
    let url = GITHUB_API_URL + props.match.params.id
    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios(url)
            
            setUser(data) //update state retrieved from Github API
        }
        getUser()
    }, []) //[] prevent infinite loop

    return user.loading ? (
        <div>Loading...</div>
    ) : (
        <UserPageView user={user} username={props.match.params.id} />
    )

}

export default UserPage