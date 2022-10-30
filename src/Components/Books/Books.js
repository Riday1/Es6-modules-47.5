// import React from 'react';
import React from "react";
import { multiply } from "../Utilities/Utilities";
const Books = () => {
    const firstBookPrice = 10;
    const secondBookPrice = 20;
    const totalCost = multiply(firstBookPrice, secondBookPrice)
    return (
        <div>
            <h2>My Books Collection : </h2>
            <p>Total Cost : {totalCost}</p>
        </div>
    );
};

// export default Books;
export default Books;