import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="container">
            <h1>Homepage</h1>
            <p>
                <Link to="/colinbut">colinbut</Link> on Github.
            </p>
        </div>
    )
}

export default Homepage