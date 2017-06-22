import React from 'react';

const Link = props => {
    const { active, children, onClick } = props;
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href="javascript:;" onClick={onClick}>{children}</a>
    )
}

export default Link;
