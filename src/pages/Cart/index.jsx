import React from "react";
import { connect } from "react-redux";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import './styles.css';
import Footer from "../../components/common/Footer";
import EmptyCart from "../../components/Cart/EmptyCart";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartItemsCount, selectCartTotal} from "../../redux/cart/cart.selector";

const Cart = ({ cartCount, cartList, cartTotal }) => (
    <>
        <div className="cart-header">
            <Logo />
        </div>
        { cartCount === 0 ? (
            <EmptyCart />
        ) : (
            <div className="order">
                <h1 className="orders-heading">Your Orders</h1>
                <div className="orders-menu">
                    <Menu list={cartList} />
                </div>
                <h3 className="orders-total">Your Total ${cartTotal}</h3>
            </div>
        )}
        <Footer />
    </>
);

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);