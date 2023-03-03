import { React, Component } from "react";
import CartInfor from "./CartInfor";
import CartItem from "./CartItem";
import {connect} from 'react-redux';
class Cart extends Component {
  
  render() {
    let {cart} = this.props;
    console.log(cart);
    let elementListItemCart = cart.map((item,index)=>{
      return <CartItem key={index} item = {item} index={index} />
    });
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Pokemon</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {/* CART BODY */}
                {elementListItemCart}
            </tbody>
              {/* CART FOOTER */}
              {/* <tr>
                <th colSpan={6}>Empty product in your cart</th>
              </tr> */}
              <CartInfor />
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps,null)(Cart);
