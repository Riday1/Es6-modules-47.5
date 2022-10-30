import React from 'react';
import { division } from '../Utilities/Utilities';

const Bags = () => {
    const firstBagPrice = 10;
    const secondBagPrice = 20;
    const totalCost = division(secondBagPrice, firstBagPrice)
    return (
        <div>
            <h2>My Bags Collection : </h2>
            <p>Total Cost : {totalCost}</p>
        </div>
    );
};

export default Bags;