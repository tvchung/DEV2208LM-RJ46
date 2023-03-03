import { React, Component } from "react";
import { MSG_PRODUCT_VIEW,MSG_PRODUCT_EDIT, MSG_PRODUCT_DELETE } from "../constants/messages";
import {connect} from 'react-redux';
import { act_Change_Notify, act_Product_Edit, act_Product_View,act_Product_Delete } from "../actions";
class Product extends Component {

  // xem thông tin sản phẩm
  handleView =(product)=>{
    this.props.productView(product);
    this.props.changeNotify(MSG_PRODUCT_VIEW);
  }
  // Sửa thông tin sản phẩm
  handleEdit =(product)=>{
    this.props.productEdit(product);
    this.props.changeNotify(MSG_PRODUCT_EDIT);
  }
  // Xóa thông tin sản phẩm
  handleDelete =(product)=>{
    this.props.productDelete(product);
    this.props.changeNotify(MSG_PRODUCT_DELETE);
  }
  render() {
    let { item, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{item.productId}</td>
        <td>{item.productName}</td>
        <td className="text-center">{item.quantity}</td>
        <td className="text-end">
          <sup>$</sup> {item.price}
        </td>
        <td className="text-end">
          <sup>$</sup> {item.price * item.quantity}
        </td>
        <td>
          <button type="button" className="btn btn-info" 
            onClick={()=>this.handleView(item)}
            >
            View
          </button>
          <button type="button" className="btn btn-primary"
            onClick={()=>this.handleEdit(item)}
          >
            Edit
          </button>
          <button type="button" className="btn btn-danger"
            onClick={()=>this.handleDelete(item)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    productView:(product)=>{
      dispatch(act_Product_View(product));
      console.log("dispatch-productView:",product);
    },
    productEdit:(product)=>{
      dispatch(act_Product_Edit(product));
    },
    productDelete:(product)=>{
      dispatch(act_Product_Delete(product));
    },
    changeNotify:(content)=>{
      dispatch(act_Change_Notify(content));
    }
  }
}

export default connect(null, mapDispatchToProps)(Product);
