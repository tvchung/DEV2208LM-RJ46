import {React, Component} from "react";
class FromControlled extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentName:'Devmaster',
            course:'CSS3',
            address:'25 Vũ Ngọc Phan'
        }
    }
    /*
    handleChangeStudentName = (event)=>{
        this.setState({
            studentName:event.target.value
        })
    }
    handleChangeCourse = (event)=>{
        this.setState({
            course:event.target.value
        })
    }
    handleChangeAddress =(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    */
    handleChange = (event)=>{
        let name = event.target.name; // Lấy tên của điều khiển hiện tại
        let value = event.target.value; // lấy giá trị trên điều khiển hiện tại
        this.setState({
            [name]:value
        })
    }
    handleSubmit = (e)=>{
        alert(this.state.studentName +'\n'+ this.state.course +'\n'+
             this.state.address);
        e.preventDefault();
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Student Name:</label>
                        <input type="text" value={this.state.studentName} 
                            name="studentName"
                            // onChange={this.handleChangeStudentName} 
                            onChange ={this.handleChange}
                            />
                    </div>
                    <div>
                        <label>Course:</label>
                        <select value={this.state.course} 
                            // onChange={this.handleChangeCourse}
                            onChange ={this.handleChange}
                            name="course"
                            >
                            <option value={'HTML5'}>HTML5</option>
                            <option value={'CSS3'}>CSS3</option>
                            <option value={'Javascript'}>Javascript</option>
                            <option value={'ReactJs'}>ReactJs</option>
                        </select>
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" value={this.state.address} 
                            //    onChange={this.handleChangeAddress} 
                            onChange ={this.handleChange}
                           name="address"
                           />
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default FromControlled;