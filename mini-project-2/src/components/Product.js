import { React, Component } from "react";
import {MSG_BUY_SUCCESS} from '../constants/messages';
import {act_BUY_ITEM, act_Change_Notify} from '../actions';
import {connect} from 'react-redux';
class Product extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:1
    }
  }
  handleBuyItem =(product)=>{
    // thuc hien mua hang
    this.props.buyItem(product,this.state.quantity);
    //thực hiện thông báo
    this.props.changeNotify(MSG_BUY_SUCCESS)
  }
  render() {
    let {product} = this.props;
    let check = product.quantity>0;
    let elementBy = "";
    if (check) {
      elementBy = (
        <div>
          <input
            name="quantity-product-1"
            type="number"
            defaultValue={1}
            min={1}
            onChange={(event)=>this.setState({quantity:event.target.value})}
          />
          <button data-product={1} 
            onClick={()=>this.handleBuyItem(product)}
            className="btn btn-success">
            Mua hàng
          </button>
          <a   data-product={1} className="price">
            {product.price} USD 
          </a>
        </div>
      );
    } else {
      elementBy = <span className="price">{product.price} USD</span>;
    }
    return (
      <div className="media product">
        <div className="media-left">
          <a  >
            <img
              className="media-object"
              src={`images/${product.image}`}
              alt={product.productName}
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {product.productName}
          </h4>
          <p>
          {product.descriptions}
          </p>
          {elementBy}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    buyItem:(product,quantity)=>{
      dispatch(act_BUY_ITEM(product,quantity));
    },
    changeNotify:(content)=>{
      dispatch(act_Change_Notify(content));
    }
  }
}
export default connect(null,mapDispatchToProps) (Product);
