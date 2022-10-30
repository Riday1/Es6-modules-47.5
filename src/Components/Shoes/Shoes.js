import React from 'react';
import { sum } from '../Utilities/Utilities';

const Shoes = () => {
    const firstShoesPrice = 20;
    const secondShoesPrice = 10;
    const totalCost = sum(firstShoesPrice, secondShoesPrice)
    return (
        <div>
            <h2>My Shoes Collection : </h2>
            <p>Total Cost : {totalCost}</p>

        </div>
    );
};

export default Shoes;