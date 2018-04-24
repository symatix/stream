import React from 'react';

const style = {
    root: {
        display: 'inline-block',
        marginRight: 15
    },
    img: {
        borderRadius: '50%'
    }
}

const MetaImg = (props) => {
    return (
        <div>
            <img style={style.img} src={props.image} alt="" />
        </div>
    )
}
  
export default MetaImg;
