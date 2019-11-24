import React from "react";
import PropTypes from "prop-types";

/**
 * Main Button Component
 * @param {func} onClick, handle onClick method of the button
 * @param {String*} children, title of the button
 */
const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} type="button">
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

export default Button;
