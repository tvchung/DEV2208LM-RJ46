import { React, Component } from "react";
class Product extends Component {
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
          />
          <button data-product={1} className="btn btn-success">
            Mua hàng
          </button>
          <a type="button" data-product={1} className="price">
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
          <a type="button">
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

export default Product;
