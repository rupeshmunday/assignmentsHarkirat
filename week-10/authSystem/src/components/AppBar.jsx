import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthSystem'

const AppBar = ({name : propUserName,logOut : propLogOut, loggedIn: propIsLoggedIn}) => {
  const [userName,setUserName] = useState('')
  const contextValues = useContext(AuthContext);

  return (
    <div style={{
      'backgroundColor': '#3f98b5',
      'color': 'white',
      'padding': '1rem',
      'display': 'flex',
      'justifyContent': 'space-between',
      'alignItems': 'center',
    }}>
      <h1 style={{
        'fontSize': '1.25rem',
        'fontWeight': 'bold'
      }}>
        Auth System Demo
      </h1>
      <div style={{
        'display': 'flex',
        'alignItems': 'center',
        'gap': '1rem'
      }}>
        {
          propIsLoggedIn ? (
          <div>
            <span>Welcome, {contextValues ? contextValues?.name : propUserName}!</span>
            <button style={{
              'backgroundColor': 'white',
              'color': '#3f51b5',
              'border': 'none',
              'padding': '0.5rem 1rem',
              'borderRadius': "4px",
              "cursor": "pointer"
            }} onClick={contextValues ? contextValues.logOut : propLogOut}>logout</button> 
          </div>
        ) : ''
}
      </div>
    </div>
  )
}

export default AppBar