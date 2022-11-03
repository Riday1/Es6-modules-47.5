const sum = (first, second) => {
    return first + second;
}
const multiply = (first, second) => {
    return first * second;
}
const division = (first, second) => {
    return first / second;
}

const getTotalPrice = (products) => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

// export default sum;
export { sum, multiply, division, getTotalPrice as getTotal }
