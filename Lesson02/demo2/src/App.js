import logo from './logo.png';
import './App.css';

function App() {

  const users = {
    firstName:"Chung",
    lastName:"Trịnh"
  }
  // normal function
  function formatName(user){
    return user.firstName + '  ' + user.lastName;
  }

  const name="Devmaster.edu.vn";

  const element = (
    <div>
      <h2>Welcome, {formatName(users)}</h2>
      <h3>Website: {name}</h3>
    </div>
  );

  // arrow function
  const sayWelcome = (name)=>{
    if(name){
      return <h3>Welcome to, {name}</h3>
    }else{
      return <h4>Welcome to Devmaster</h4>
    }
  }

  return (
    <div>
        <img src={logo} alt="Devmaster Academ"/>
        <h1>Welcome to ReactJS in Devmaster</h1>
        <hr/>
        <p>Xin chào, {users.firstName}</p>
        <p>{formatName(users)}</p>
        <hr/>
        {element}
        {element}
        <hr/>
        {sayWelcome("La La Là là")}
        {sayWelcome()}
    </div>
  );
}

export default App;
