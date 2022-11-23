import Avatar from "./Avatar";

// Demo component lồng nhau
const MemberInfor=(props)=>{
    return(
        <div>
            <Avatar link={props.info.path} />
            <h2>Name: {props.info.name}</h2>
            <h3>Tuổi:{props.info.age}</h3>
        </div>
    )
}
export default MemberInfor;