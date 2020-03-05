import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

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
        <div className="container">
            <h1>{props.match.params.id}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Website</th>
                        <th>Followers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.location}</td>
                        <td><a href={user.blog}>{user.blog}</a></td>
                        <td>{user.followers}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default UserPage