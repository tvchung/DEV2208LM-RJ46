import React from "react";
import Avatar from "./ImgAvatar";
const MemberInfor = (props)=>{
    let {id,firstName,lastName,age,company} = props.info;
    return(
        <div className="d-flex">
            <Avatar link={props.info.avatar} />
            <div>
                <h1>Person Information</h1>
                <p>ID: {id}</p>
                <p>FullName: {firstName} {lastName}</p>
                <p>Age: {age}</p>
                <p>Company: {company}</p>
            </div>
        </div>
    );
}
export default MemberInfor;