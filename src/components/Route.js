import React from 'react';

const Route = ({path, component: Component}, {location}) => {
    const pathname = location.pathname;
    if (pathname.match(path)) {
        return <Component/>
    } else {
        return null
    }
};

export default Route