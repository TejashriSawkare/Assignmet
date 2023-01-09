import React,{useState} from "react";
import './App.css';
import './Components/Switch.css'
import Switch from './Components/Switch';

function App() {

  const [user,setUser] = useState("");
  const [value,setValue] = useState("false");
  const handler = e => {
  setUser(e);
  }
  return (
    <div className="App">
     

       <h1>Registration</h1>
       Name:<input type='text' placeholder='username' value={user} name ='user' onChange={(e) => { handler(e.target.value) }} />
       <h1>Hello,{user} This is JPG </h1>
       <Switch isOn={value} handleToggle ={() => setValue(!value)} />

    </div>
  );
}

export default App;


