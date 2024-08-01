
const intailsState = {
    count: 0,
    age: 10,
    city: 'Banglore',
}

function CounterReducer(state = intailsState, action) {
    switch (action.type) {
        case 'Increment':
            return { ...state, count: state.count + 1 };
        case 'Decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state
    }
}

const proDctState = {
    list: [{ name: 'Nokia', price: 1000 }],
}
function ProductList(state = proDctState, action) {
    switch (action.type) {
        case 'Add':
            return { ...state, list: state.list.push(action.data) }
        default:
            return { ...state }
    }
}
export { CounterReducer, ProductList }