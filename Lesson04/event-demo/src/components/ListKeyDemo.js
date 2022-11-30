import {React, Component } from 'react';

class ListKeyDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentList:[
                {studentId:100, name:"Nguyễn Văn A", age:20},
                {studentId:101, name:"Nguyễn Văn B", age:21},
                {studentId:102, name:"Nguyễn Văn C", age:25},
            ]
        }
    }

    render(){
        const arr = [1,3,5,7,8,5];
        const element = arr.map((x)=>{
            return(
                <li>{x*x}</li>
            )
        });

        // list key 
        const elemListKey = arr.map((value,index)=>{
            return(
                <li key={index} >{index} - {value}</li>
            );
        });
        // danh sách sinh vien
        let studentList = this.state.studentList;
        let ListTable = studentList.map((student)=>{
            return(
                <tr>
                    <td>{student.studentId}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                </tr>
            )
        })
        return(
            <div>
                <h2>List key demo</h2>
                <hr/>
                {element}
                <hr/>
                {elemListKey}
                <hr/>
                <table border={1} align="center" width="500px">
                    {ListTable}
                </table>
            </div>
        )
    }
}
export default ListKeyDemo;