import React from "react";

const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToCart = Function.prototype,
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                {/* <img src={image} alt={name} /> */}
                <img
                    src={full_background}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = `https://placehold.co/1000x800?text=${name}`;
                    }}
                    alt={name}
                />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => addToCart({ id, name, price })}
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: "1.8rem" }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
};

export default GoodsItem;
