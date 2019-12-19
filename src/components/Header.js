import PropTypes from 'prop-types';
import React from 'react';
const Header = ({message}) =>{
    return (
        <h1 className="heading-top">{message}</h1>

    );
}
Header.propTypes = {
    message: PropTypes.string.isRequired
}
Header.defaultProps = {
    message: "This is a default heading..."
}

export default Header;