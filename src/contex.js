import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.setGoods = (data) => {
        dispatch({ type: "SET_GOODS", payload: data });
    };

    value.closeAlert = () => {
        dispatch({ type: "CLOSE_ALERT" });
    };

    value.addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    value.incQuantity = (itemId) => {
        dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } });
    };

    value.decQuantity = (itemId) => {
        dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemId } });
    };

    value.handleCartShow = () => {
        dispatch({ type: "TOGGLE_CART" });
    };

    value.removeFromCart = (itemId) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
