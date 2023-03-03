import { React, Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="row">
          <div className="col-12 dark m-3">
            <h6 className="mb-3">VIỆN CÔNG NGHỆ VÀ ĐÀO TẠO  
                <strong className="text-danger"> DEVMASTER</strong>
            </h6>
            <address>Tòa <strong className="text-primary"> VIỆN CÔNG NGHỆ </strong>
                , Số 25 Phố Vũ Ngọc Phan, Láng Hạ, Đống Đa, Hà Nội.
            </address>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
