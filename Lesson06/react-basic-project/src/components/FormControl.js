import {React , Component} from 'react';

class FormControl extends Component {
    constructor(props){
      super(props);
      console.log("constructor:",props.student);
      this.state ={
        studentId:'',
        studentName:'',
        age:'',
        sex:'',
        birthDate:'',
        birthPlace:'',
        address:''
      }
    }

    // hiển thị dữ liệu từ props => state => form
    componentWillMount =()=>{
      // vào trước khi render trong quá trình mouting
      let {student,actionName } = this.props;
      if( actionName === "View" || actionName ==="Update"){
        this.setState({
          studentId:student.studentId,
          studentName:student.studentName,
          age:student.age,
          sex:student.sex,
          birthDate:student.birthDate,
          birthPlace:student.birthPlace,
          address:student.address
        });
      }else{
        this.setState({
          studentId:'',
          studentName:'',
          age:'',
          sex:'',
          birthDate:'',
          birthPlace:'',
          address:''
        });
      }
    }
    componentWillReceiveProps =(nextProps)=>{
      // vào trong quá trình updation
      let {student,actionName } = nextProps;
      if( actionName === "View" || actionName ==="Update"){
        this.setState({
          studentId:student.studentId,
          studentName:student.studentName,
          age:student.age,
          sex:student.sex,
          birthDate:student.birthDate,
          birthPlace:student.birthPlace,
          address:student.address
        });
      }else{
        this.setState({
          studentId:'',
          studentName:'',
          age:'',
          sex:'',
          birthDate:'',
          birthPlace:'',
          address:''
        });
      }
    }
    // submit form
    handleSubmit = (e)=>{
      let {actionName} = this.props;
      console.log(actionName);
      if(actionName === "AddNew"){
        console.log(this.state);
        this.props.AddNewStudent(this.state)
      }
      // this.props.handleClose(false,"");
      e.preventDefault();
    }
    handleChange =(e)=>{
      let name=e.target.name;
      let value = e.target.value;
      this.setState({
        [name]:value,
      });
      // console.log(name, value);
    }
    render(){
        let {actionName} = this.props;
        // console.log(this.props.student);

        return(
            <div className="card-body">
              <h3 className="card-title">Thông tin sinh viên</h3>
              <form className="form-sample">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" 
                      name='studentId' value={this.state.studentId} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control"
                      name='studentName' value={this.state.studentName} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Tuổi</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" 
                      name='age' value={this.state.age} onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Giới tính</label>
                  <div className="col-sm-9">
                    <select className="form-control" name='sex' value={this.state.sex} onChange={this.handleChange}>
                      <option value={true}>Nam</option>
                      <option value={false}>Nữ</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Ngày sinh</label>
                  <div className="col-sm-9">
                    <input className="form-control" placeholder="dd/mm/yyyy" 
                      name='birthDate' value={this.state.birthDate} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Nơi sinh</label>
                  <div className="col-sm-9">
                    <select className="form-control" name='birthPlace' value={this.state.birthPlace} onChange={this.handleChange}>
                      <option value={'HN'}>Hà Nội</option>
                      <option value={'HCM'}>TP. Hồ Chí Minh</option>
                      <option value={'ĐN'}>Đà Nẵng</option>
                      <option value={'QN'}>Quảng Ninh</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Địa chỉ</label>
                  <div className="col-sm-9">
                    <textarea className="form-control" 
                      name='address'
                      defaultValue={this.state.address} onChange={this.handleChange}/>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary me-2" 
                  onClick={this.handleSubmit} >
                  {actionName}
                </button>
              </form>
            </div>
        )
    }
}
export default FormControl;