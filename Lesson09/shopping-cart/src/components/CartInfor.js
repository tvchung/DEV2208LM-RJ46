import { React, Component } from "react";
class CartInfor extends Component {
  render() {
    return (
      <tr>
        <td colSpan={4}>
          There are <b>5</b> items in your shopping cart.
        </td>
        <td colSpan={2} className="total-price text-left">
          12 USD
        </td>
      </tr>
    );
  }
}

export default CartInfor;
