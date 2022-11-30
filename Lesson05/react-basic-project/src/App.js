import "./App.css";
import {React, Component} from 'react';
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import FormControl from "./components/FormControl";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // danh sách sinh viên
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ],
      isToggle:false, // sử dụng cho việc ẩn hiện form control

    }
  }

  render(){
    let students = this.state.students;
    let elementFormControl = this.state.isToggle?<FormControl />:"";
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* search and sort  */}
            <Control />
            {/* danh sách sinh viên  */}
            <ListStudent  students = {students} />
          </div>
        </div>
        <div className="col-5 grid-margin">
          <div className="card">
            {/* form thông tin sinh viên  */}
            {elementFormControl}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
