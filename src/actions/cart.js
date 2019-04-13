export const Types = {
    ADD_ITEM_TO_CART :'cart/add_item_to_cart', 
    ADD_ITEM_TO_CART_SUCCESS : 'cart/add_item_to_cart_success'
}

export const addToCart = (itemId) => {
    return ({
    type: Types.ADD_ITEM_TO_CART,
    payload:{
        itemId 
    }
})}