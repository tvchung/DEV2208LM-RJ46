import React from "react";
import MemberInfo from "./components/MemberInfo";
function App() {
  const person = {
    id:1000,
    firstName:"Chung",
    lastName:"Trịnh",
    age:40,
    company:"Devmaster Academy",
    avatar:"chung.png"
  };

  return (
    <div className="container">
      <MemberInfo info={person} />
    </div>
  );
}

export default App;
