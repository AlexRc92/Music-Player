import React from 'react';
import PropTypes from 'prop-types';

/* This creates a span with a className equal to the 'name' prop
such classnames have a content attribute defined in main.scss. */
function Emoji({ name })  {
    return (
        <span className={`${name}`} role="img" aria-label={name}></span>
    )
}

Emoji.defaultProps = {
    name: "heart-empty"
}

Emoji.propTypes = {
    name: PropTypes.oneOf(["heart","heart-empty","ellipsis","music"])
}

export default Emoji;