import React from 'react';
import { addToDb, deleteCartFromDb, removeFromDb } from '../Utilities/fakedb';



const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = (id) => {
        removeFromDb(id);
    }
    const deleteCart = (id) => {
        deleteCartFromDb(id);
    }

    return (
        <div style={{ border: '2px solid gray ', margin: '20px', padding: '10px' }}>
            <h2>Product Name : {name}</h2>
            <p>Price : {price}</p>
            <p><small>p. id : {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to card</button>
            <button onClick={() => removeFromCart(id)}>Remove </button>
            <button onClick={() => deleteCart(id)}>Delete Cart</button>
        </div>
    );
};

export default Cosmetic;
export { Cosmetic };
