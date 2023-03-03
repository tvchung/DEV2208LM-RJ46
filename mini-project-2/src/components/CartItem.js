import { React, Component } from "react";
import { connect } from "react-redux";
import { act_Change_Notify, act_REMOVE_CARTITEM, act_UPDATE_CARTITEM } from "../actions";
import { MSG_DELETE_SUCCESS, MSG_UPDATE_SUCCESS } from "../constants/messages";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  // delete
  handleRemoveItem =(product)=>{
    this.props.removeItem(product);
    this.props.changeNotify(MSG_DELETE_SUCCESS)
  }
  // update 
  handleUpdateItem =(product)=>{
    this.props.updateItem(product, this.state.quantity);
    this.props.changeNotify(MSG_UPDATE_SUCCESS)
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      quantity: nextProps.item.quantity,
    });
  };

  render() {
    let { item, index } = this.props;
    let quantity = (this.state.quantity === 0) ? item.quantity : this.state.quantity;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item.product.productName}</td>
        <td>{item.product.price}</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={quantity}
            min={1}
            onChange={(e)=>this.setState({quantity:e.target.value})}
          />
        </td>
        <td>
          <strong>{item.product.price * quantity} USD</strong>
        </td>
        <td>
          <a
            type="button"
            className="label label-info update-cart-item"
            data-product=""
            onClick={()=>this.handleUpdateItem(item.product)}
          >
            Update
          </a>
          <a
            type="button"
            className="label label-danger delete-cart-item"
            data-product=""
            onClick={()=>this.handleRemoveItem(item.product)}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    removeItem:(product)=>{
      dispatch(act_REMOVE_CARTITEM(product));
    },
    updateItem:(product,quantity)=>{
      dispatch(act_UPDATE_CARTITEM(product,quantity));
    },
    changeNotify:(content)=>{
      dispatch(act_Change_Notify(content));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
