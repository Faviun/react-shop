import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <div className="cart-fon">
            <ul className="collection cart-list">
                <li className="collection-item active">Корзина</li>
                {order.length ? (
                    order.map((item) => (
                        <CartItem
                            key={item.id}
                            removeFromCart={removeFromCart}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                            {...item}
                        />
                    ))
                ) : (
                    <li className="collection-item">Корзина пуста</li>
                )}
                <li className="collection-item active cart-botton-line">
                    Общая стоимость: {totalPrice} руб.
                    <button className="btn-small right pay-btn">
                        Оформить
                    </button>
                </li>
                <i
                    className="material-icons cart-close right"
                    onClick={handleCartShow}
                >
                    close
                </i>
            </ul>
        </div>
    );
};

export default CartList;
