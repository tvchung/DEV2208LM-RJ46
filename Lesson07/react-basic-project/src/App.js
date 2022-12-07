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
      actionName:'', // Tùy theo chức năng để hiển thị nút trên form
      student:"", // đối tượng thực hiện khi thêm, xem, sửa
      searchData:'', // dữ liệu tìm kiếm khi người dùng nhập trên điều khiển tìm kiếm
      sortField:'', // sắp theo thuộc tính nào của đối tượng
      sortBy:'',// sắp tăng hay sắp giảm
    }
  }
  // search
  handleSearch = (data)=>{
    this.setState({
      searchData:data,
    })
  }
  // sortBy
  handleSort = (sortField, sortBy)=>{
    this.setState({
      sortField:sortField,
      sortBy:sortBy,
    })
  }
  // handleToggle
  handleToggle =(toggle, actionName, student)=>{
    console.log(student);
    this.setState({
      isToggle:toggle,
      actionName:actionName,
      student:student
    })
  }
  // thêm mowisv handleAddNewStudent
  handleAddNewStudent =(student)=>{
   console.log(student);
    this.setState({
      students:[...this.state.students, student],
    });
  }
  handleUpdateStudent = (student)=>{
    // lấy dữ liệu từ state
    let {students} = this.state;
    students.forEach((st,index)=>{
      if(st.studentId === student.studentId){
        students[index] = student;
      }
    });
    this.setState({
      students:students,
    })
  }
  // delete
  handleDelete = (student)=>{
    // xóa và cập nhật lại state
    let {students} = this.state;
    let indexDelete = -1;
    students.forEach((st,index)=>{
      if(st.studentId === student.studentId){
          indexDelete = index;
      }
    });
    students.splice(indexDelete,1);
    // cập nhật state
    this.setState({
      students:students,
    })
  }
  render(){
    // let students = this.state.students;
    let students = [];
    if(this.state.searchData !==''){
        let sts = this.state.students;
        sts.forEach(st=>{
          if(st.studentName.toLocaleLowerCase().includes(this.state.searchData.toLocaleLowerCase())){
            students.push(st);
          }
        })
    }else{
      students = [...this.state.students];
    }
    // thực hiện sắp xếp
    if(this.state.sortField === "studentName"){
      if(this.state.sortBy==="ASC"){
        students.sort((a,b)=>(a.studentName>b.studentName)?1:(a.studentName>b.studentName)?-1:0);
      }else{//Desc
        students.sort((a,b)=>(a.studentName>b.studentName)?-1:(a.studentName>b.studentName)?1:0);
      }
    }else if(this.state.sortField === "age"){
      if(this.state.sortBy==="ASC"){
        students.sort((a,b)=>a.age-b.age);
      }else{//Desc
        students.sort((a,b)=>b.age-a.age);
      }
    }
    let elementFormControl = this.state.isToggle?
        <FormControl actionName={this.state.actionName}
              student = {this.state.student}
              handleClose ={this.handleToggle}   
              AddNewStudent = {this.handleAddNewStudent}
              updateStudent = {this.handleUpdateStudent} />:"";
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* search and sort  */}
            <Control  handleAdd={this.handleToggle} 
                      handleSearch = {this.handleSearch} 
                      sort = {this.handleSort}
                      />
            {/* danh sách sinh viên  */}
            <ListStudent  students = {students} 
                          handleView={this.handleToggle} 
                          handleEdit={this.handleToggle}
                          handleDelete={this.handleDelete}/>
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
