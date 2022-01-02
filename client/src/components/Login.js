import React, {useState} from 'react';
import  Axios  from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdAirlineSeatLegroomExtra } from 'react-icons/md';

toast.configure();
const Login = ({ settoken , token}) =>
{
    const [loginemail,setloginemail] = useState("");
    const [loginpassword,setloginpassword] = useState("");
    const[message,setmessage] = useState("");
    const setalert = () =>
    {
      toast.error('Incorrect Username or Password',{position:toast.POSITION.TOP_LEFT});
    }
    const setsuccess = () =>
    {
      toast.success('Logged in successfully',{position:toast.POSITION.TOP_LEFT});
    }
    const employeelogin = (e) =>
  {

    Axios.post("http://localhost:3001/login",{email:loginemail,password:loginpassword}).then(response =>
    {
      console.log('hii');
      if(response.data.length === 0){
         setmessage("Username or Password incorrect");
         setalert();
         console.log(message);
      }else{
        console.log(response.data.length);
        setsuccess();
        settoken(response.data[0]);
        console.log(token);
      }
      
        //localStorage.setItem("token", JSON.stringify(token));
        //sessionStorage.setItem('token',JSON.stringify(response.data[0].Employee_id));
    })
  }

    return(
    <div className='login'>
        <div className='loginform'>
        <h1>Login Form</h1>
       <div className='text-field'>
       <label>Email</label>
       <input type="text" onChange={(e)=>{setloginemail(e.target.value)}} value = {loginemail} ></input>
       </div>
       <div className='text-field'>
       <label>Password</label>
        <input type="text" onChange={(e)=>{setloginpassword(e.target.value)}} value = {loginpassword} ></input>
       </div>
      <button className = "submit-btn" onClick={employeelogin}>Login</button>
      </div>
    </div>
    )
}

/*Login.propTypes = {
    settoken:PropTypes.func.isRequired
};*/

export default Login;