import UsersList from "./components/Users/UsersList";
import CreateUser from "./components/Users/CreateUser";
import React, { useState } from "react";




const App = () => {
  
  const [itemList, setItemList] = useState([]);

  const receveUsers = (name, age) => {
    setItemList(prevList => 
      [ ...prevList, {name: name, age: age, id: Math.random().toString()} ]
    )
  }

  return (
    <div>
      <CreateUser onCreateUsers={receveUsers}/>
      <UsersList users={itemList}/>
    </div>
  );
};

export default App;
