import { useState } from 'react'

import Login from './Login'
import Signup from './Signup';

function Portal(){
  const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const toggleLoginSignup = () => {
    setShowLogin(!showLogin)
  }
  const submitForm = () => { alert(`Form is sent`)}
     
    return (
        <>
        { showLogin
      ? <Login
          setUsername={setUsername}
          setPassword={setPassword}
          toggle={toggleLoginSignup}
          submitForm={submitForm}
          />

      : <Signup
      setUsername={setUsername}
          setPassword={setPassword}
          toggle={toggleLoginSignup}
          />
      }
      {username}
      {password}
        </>
    )
}

export default Portal