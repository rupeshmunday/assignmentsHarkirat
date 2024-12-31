import React, { useContext, useState } from 'react'
// import style from '../App'
import { AuthContext } from './AuthSystem';

const Login = ({onLogin : propOnLogin}) => {
  const [userName,setUserName] = useState('');
  const contextValue = useContext(AuthContext);

  function handleLogin () {
    if(contextValue){
      console.log("hello")
      contextValue?.login(userName);
    }else{
      propOnLogin(userName);
    }
  }
  return <>
    {/* <div>Login</div> */}
    <div style={{
      'display': 'flex',
      'flexDirection': 'column',
      'gap': '0.5rem'
    }}>
      <div style={{
        'display': 'flex',
        'flexDirection': 'column',
        'gap': '1rem',
        'maxWidth': '300px',
        'margin': '0 auto',
      }}>
      <label htmlFor="username" style={{ fontWeight: 'bold' }}>
        Username
      </label>
      <input type="text" name="username" style={{
        "padding": "0.5rem",
        'borderRadius': "4px",
        "border": "1px solid #ccc"
      }} onChange={(e)=>{setUserName(e.target.value)}}/>
      <button style={{
        'backgroundColor': '#3f98b5',
        'color': 'white',
        'border': 'none',
        'padding': '0.5rem 1rem',
        'borderRadius': '4px',
        'cursor': 'pointer',
      }} onClick={handleLogin}>Login {userName}</button>
      </div>
    </div>
  </>
}

export default Login