// use localStorage for store product

// import { type } from "@testing-library/user-event/dist/type";

const addToDb = (id) => {
    let shoppingCart;
    const cartObjFromDb = localStorage.getItem('shopping-cart');
    if (cartObjFromDb) {
        shoppingCart = JSON.parse(cartObjFromDb);
    }
    else {
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = (id) => {
    let shoppingCart;
    const cartObjFromDb = localStorage.getItem('shopping-cart');
    if (cartObjFromDb) {
        shoppingCart = JSON.parse(cartObjFromDb);
        // console.log(shoppingCart)
        if (id in shoppingCart) {
            // console.log('hola');
            delete shoppingCart[id];
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}
const deleteCartFromDb = (id) => {
    localStorage.removeItem('shopping-cart')
}


export { addToDb, removeFromDb, deleteCartFromDb }