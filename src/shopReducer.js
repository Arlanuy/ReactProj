var initialState={price: 0};



function updateQuantity(state=initialState, action) {
    switch(action.type) {
        case 'INCREASE_QTY':
            let updatedState = Object.assign({}, state, {price: state.price + parseInt(action.data.unitPrice)});
            console.log("updated_state is ", updatedState);
            return updatedState;
        case 'DECREASE_QTY':
            let updatedState2 = Object.assign({}, state, {price: state.price - parseInt(action.data.unitPrice)});
            console.log("updated_state2 is ", updatedState2);
            return updatedState2;
        default:
            return state;

    }
    
}

export default updateQuantity;