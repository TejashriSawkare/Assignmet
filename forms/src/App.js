import './App.css';
// import Airbnb from './Airbnb.png'
import { useState } from 'react'

function App() {

  /* let Standard = ['fy', 'sy', 'ty'];
  let [fy, sy, ty] = Standard; */

 /*  const [data,setData] = useState({
    username : '',
    password : ''
  });
  const {username,password} = data;

  const changeHandler = e => {
    setData({...data,[e.target.name] : e.target.value})
  }
   
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data)
  }


  return (
    <div className="App">
      <h1>Login Form</h1>
      <form onSubmit={submitHandler}>
        <input type= 'text' placeholder='Enter username' onChange={changeHandler} value={username} name='username' className='font-control mb-2' /> <br />
        <input type= 'text' placeholder='Enter password' onChange={changeHandler} value={password} name='password' className='font-control' /> <br />
        <input type='submit' name='submit' />

      </form>
    </div>  */


  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });
  const { username, email, password, confirmpassword } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  }


  return (
    <div className="App">
      <h1>Signup Form</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter username' onChange={changeHandler} value={username} name='username' className='font-control mb-2' /> <br />
        <input type='text' placeholder='Enter email' onChange={changeHandler} value={email} name='email' className='font-control mb-2' /> <br />
        <input type='password' placeholder='Enter password' onChange={changeHandler} value={password} name='password' className='font-control' /> <br /> 
        <input type='password' placeholder='Confirm password' onChange={changeHandler} value={confirmpassword} name='confirmpassword' className='font-control' /> <br />
        <input type='submit' name='signup' />

      </form>
    </div>
    
    
    /* return (

    <div classname="App">

      <img src={Airbnb} style={{width:"350px"} } className='img-fluid' />
 
    </div> */

  ); 
}

export default App;
