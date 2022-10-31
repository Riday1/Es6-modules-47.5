import React from 'react';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    return (
        <div style={{ border: '2px solid gray ', margin: '20px' }}>
            <h2>Product Name : {name}</h2>
            <p>Price : {price}</p>
            <p><small>p. id : {id}</small></p>
        </div>
    );
};

export default Cosmetic;
export { Cosmetic }
