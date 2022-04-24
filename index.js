const redux = require("redux");
const createStore = redux.createStore

const initialState = {
    cakes : 10
}

function order(q){
    return {
        type  : "ORDER_CAKE",
        quantity : q
    }
}
function add(q){
    return {
        type :"ADD_CAKE",
        quantity : q
    }
}

function reducer(state = initialState , action){
    switch(action.type){
        case "ORDER_CAKE":
        return {
            ...state , 
            cakes : state.cakes - action.quantity
        }
        case  "ADD_CAKE":
            return {
                ...state , 
                cakes  : state.cakes + action.quantity
            }
    }
    
}

// creating store !
const store = createStore(reducer);
console.log({initialState  : store.getState()});


const unsubscribe = store.subscribe(() => {
    console.log({updatedState : store.getState()});
})

// dispatching the actions
store.dispatch(order(2));
store.dispatch(order(1));
store.dispatch(order(1));
store.dispatch(add(1));

// unsubscribing the store
unsubscribe()