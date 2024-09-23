import React from "react"

const Header = ({ handleDarkMode }) => {
    return (
        <div className="Header">
            <h1>Notes App</h1>
            <button onClick={() => handleDarkMode(prevState => !prevState)} className="Toggle">Toggle mode</button>
        </div>
    )
}

export default Header;