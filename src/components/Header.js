import React from 'react';

const Header = (props) => {

    return(
        <header className="App-header">
            <p>{props.title}</p>
        </header>
    )

}

export default Header;