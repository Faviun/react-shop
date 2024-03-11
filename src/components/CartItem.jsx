import React, { useContext } from "react";
import { ShopContext } from "../contex";

const CartItem = (props) => {
    const { id, name, price, quantity } = props;

    const { removeFromCart, incQuantity, decQuantity } =
        useContext(ShopContext);

    return (
        <li className="collection-item">
            {name}
            <i
                className="material-icons cart-quantity"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            x{quantity}{" "}
            <i
                className="material-icons cart-quantity"
                onClick={() => incQuantity(id)}
            >
                add
            </i>
            = {price * quantity} руб.
            <span class="secondary-content">
                <i
                    className="material-icons cart-delete"
                    onClick={() => removeFromCart(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
};

export default CartItem;
