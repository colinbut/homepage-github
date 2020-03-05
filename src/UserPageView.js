import React from 'react'

const UserPageView = (props) => {
    const { user, username } = props
    return (
        <div className="container">
            <h1>{username}</h1>
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

export default UserPageView