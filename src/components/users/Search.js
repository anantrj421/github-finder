import React, { useState } from 'react'
import PropTypes from 'prop-types'

//converted to funcnal component
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    const [text, setText] = useState('');  //text is value n setText is fn to update text

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light');
        }
        else {
            searchUsers(text);
            setText('');
        }
    }
    const onChange = e =>
        setText(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}></input>
                <input type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"></input>
            </form>
            {showClear && (
                <button className="btn btn-light btn-block"
                    onClick={clearUsers}>
                    Clear
                        </button>
            )}

        </div>
    )
}
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search
