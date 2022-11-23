import './App.css';
import ClassCompDemo from './components/ClassComponentDemo';
import FunCompDemo from './components/FunctionComponentDemo';
import Member from './components/Member';
import MemberInfor from './components/MemberInfor';
function App() {
  var FuncList = (
    <div>
      <FunCompDemo name="Chung1" userName="C1" />
      <FunCompDemo name="Chung2" userName="C2" />
      <FunCompDemo name="Chung3" userName="C3" />
    </div>
  );
  var member ={
    path:'avatar.png',
    name:"Nguyễn Văn A",
    age:200
  };
  return (
    <div className="App">
      {/* sử dụng function component  */}
      <FunCompDemo name="Chung Trịnh"     userName="Devmaster" />
      <hr/>
      <FunCompDemo name="Chung Trịnh Văn" userName="devAcademy" company="Cty Devmaster" />

      {/* sử dụng class component */}
      <ClassCompDemo name='Class Chung Trịnh' userName="tvchung"
        age='40' />
         <ClassCompDemo name='ABC' userName="chungtv"
        age='140' />

      {/* tái sử dụng list */}
      {FuncList}

      {/* sử dụng arrow functin component  */}
      <Member name="Arrow Fuction" age="100"></Member>

      <MemberInfor info={member} />
    </div>
  );
}

export default App;
