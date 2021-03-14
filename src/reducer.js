
export const initialState = {
    basket: [],
}


export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case "add_to_basket":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            case "remove_from_basket":
                const index = state.basket.findIndex(
                    (basketitem)=> basketitem.id === action.id
                    );
                    
                    let newbasket = [...state.basket];
                    
                    if(index>=0){
                        newbasket.splice(index, 1)
                    }
                   else{
                       console.warn("cant remove this id and this is the first and the last warning")
                   }
                   
                   return {
                       ...state,
                       basket: newbasket,
                }

        default: return state;
    }
}

export default reducer;