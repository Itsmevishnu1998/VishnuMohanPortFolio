import { useState } from 'react'
import NavBar  from './NavComponent/NavBar'
import Profile from './ProfilePicture/Profile'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Profile/>
    </>
  )
}

export default App
