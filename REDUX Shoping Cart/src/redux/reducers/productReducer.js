const initialState = {
    products: [
        {
            id: 1,
            title: "rahul",
            category: "programmer"
        }
    ]
}
export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return state;
        default:
            return state;
    }

}