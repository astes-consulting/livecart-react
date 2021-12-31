import React from "react";
import './styles.css';
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import {createStructuredSelector} from "reselect";
import { selectCartItems, selectCartItemsCount } from "../../../../redux/cart/cart.selector";
import {cartAddItem, cartRemoveItem} from "../../../../redux/cart/cart.actions";
import { connect } from "react-redux";

const MenuItem = ({ item, cartCount, cartList, cartAddItem, cartRemoveItem }) => {
    const { id, name, info, price, img } = item;

    const handleItemQuantity = () => {
        let quantity = 0;
        if (cartCount !== 0) {
            const foundItemInCart = cartList.find((item) => item.id === id);
            if (foundItemInCart) {
                quantity = foundItemInCart.quantity;
            }
        }
        return quantity;
    }

    return (
        <div className="item">
            <img src={img} alt={name} />
            <div className="item-head_desc">
                <p className="head_desc-name">{name}</p>
                <p className="head_desc-info">
                    <small>{info}</small>
                </p>
            </div>
            <div className="item-foot_desc">
                <span className="foot_desc-price">${price}</span>
                <ButtonAddRemoveItem
                    quantity={handleItemQuantity()}
                    handleAddItem={() => cartAddItem(item)}
                    handleRemoveItem={() => cartRemoveItem(item)}
                />
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
});

const mapDispatchToProps = (dispacth) => ({
    cartAddItem: (item) => dispacth(cartAddItem(item)),
    cartRemoveItem: (item) => dispacth(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);