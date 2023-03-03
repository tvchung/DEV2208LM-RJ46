import { React, Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
import ProductForm from "./components/ProductForm";
class App extends Component {
  render() {
    return (
      <section id="zone1" className="pt-5">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-3">
              <ListProduct />
            </div>
            <div className="col-md-6 mt-3">
              <ProductForm />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default App;
