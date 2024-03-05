import React from "react";
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
    const { goods = [] } = props;

    // if (!goods.length) {
    //     return <h3>Ничего не нашлось</h3>;
    // }
    console.log(goods);
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} />
                // <GoodsItem name={item.name} />
            ))}
        </div>
    );
};

export default GoodsList;
