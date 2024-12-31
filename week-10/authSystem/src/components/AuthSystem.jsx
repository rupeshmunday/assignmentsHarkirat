import React, { createContext, useState } from 'react'
import Login from './Login'
import Home from './Home'
import AppBar from './AppBar'

export const AuthContext = createContext(undefined);

const AuthSystem = () => {
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [useContextApi, setUseContextApi] = useState(false);



  const login = (user) => {
    setName(user);
    setLoggedIn(true);
    // console.log("Heeloo",name)
  }
  const logout = () => {
    setLoggedIn(false);
    setName('');
  }

  const contextValue = useContextApi ? {name ,loggedIn, login, logout} : undefined;

  return <>
  <AuthContext.Provider value={contextValue}>
    <AppBar name = {name} logOut={logout} loggedIn={loggedIn}></AppBar>
    <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '1rem',
          backgroundColor: '#f0f0f0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
      }}>
      <input type="checkbox"
        name='contextAPI'
        checked={useContextApi}
        onChange={(e) => setUseContextApi(e.target.checked)} />
      <label htmlFor="contextAPI">Use Context API {useContextApi ? 'On' : 'Off'}</label>
    </div>
    </div>
    {
      !loggedIn ?
      <Login onLogin={login}></Login> :
      <Home></Home>
    }
  </AuthContext.Provider>
  </>
}

export default AuthSystem