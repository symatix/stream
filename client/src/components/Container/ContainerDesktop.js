import React from 'react';
import MediaQuery from 'react-responsive';

const ContainerDesktop = (props) => {
    const { children } = props;

    return (
            <MediaQuery query="(min-width: 1224px)">
                {children}
            </MediaQuery>
    );
}

export default ContainerDesktop;