import { React, Component } from "react";
import Cart from "./components/Cart";
import ListProduct from "./components/ListProduct";
import Notify from "./components/Notify";
import Title from "./components/Title";
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <div className="col-xs-12 col-sm-6 ">
            <ListProduct />
          </div>
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <div className="col-xs-12 col-sm-6 ">
            <Cart />
            <Notify />
          </div>
          {/* CART : END */}
        </div>
      </div>
    );
  }
}

export default App;
