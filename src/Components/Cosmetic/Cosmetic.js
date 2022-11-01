import React from 'react';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const addToCard = (id) => {
        const value = localStorage.getItem(id);
        if (value) {
            localStorage.setItem(id, +value + 1);
            console.log(value)
        }
        else {
            localStorage.setItem(id, 1);
        }
    }
    return (
        <div style={{ border: '2px solid gray ', margin: '20px', padding: '10px' }}>
            <h2>Product Name : {name}</h2>
            <p>Price : {price}</p>
            <p><small>p. id : {id}</small></p>
            <button onClick={() => addToCard(id)}>Add to card</button>
        </div>
    );
};

export default Cosmetic;
export { Cosmetic };
 