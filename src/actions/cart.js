export const Types = {
    ADD_ITEM_TO_CART :'cart/add_item_to_cart', 
    ADD_ITEM_TO_CART_SUCCESS : 'cart/add_item_to_cart_success',
    REMOVE_ITEM:'cart/remove_item',
    ADD_ITEM:'cart/add_item'
}

export const addToCart = (itemId) => {
    return ({
    type: Types.ADD_ITEM_TO_CART,
    payload:{
        itemId 
    }
})}

export const addItem = (itemId) => {
    return ({
    type: Types.ADD_ITEM,
    payload:{
        itemId 
    }
})}
export const removeItem = (itemId) => {
    return ({
    type: Types.REMOVE_ITEM,
    payload:{
        itemId 
    }
})}