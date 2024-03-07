export function reducer(state, { type, payload }) {
    switch (type) {
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: "",
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        default:
            return state;
    }
}
