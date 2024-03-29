import React from 'react'
import PropTypes from  'prop-types'
import {Link } from 'react-router-dom'
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
    return (
        <div className="card text-center">
            <img alt="dp" src={avatar_url} className="round-img" style={{ width: '60px', height: '60px' }}></img>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my1">More</Link>
            </div>
        </div>
    )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem
