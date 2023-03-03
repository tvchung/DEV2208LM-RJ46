import { React, Component } from "react";
class Header extends Component {
  render() {
    return (
      <header className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <div className="img-logo">
                <img
                  src="https://devmaster.edu.vn/images/logo.png"
                  alt="Viện Công Nghệ Và Đào Tạo Devmaster"
                />
              </div>
              <h1>
                <strong>Mini Project 1</strong>
                Quản lý sản phẩm
                <small>[ReactJs - Redux]</small>
              </h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
