import { useState } from 'react'
import NavBar  from './NavComponent/NavBar'
import Profile from './ProfilePicture/Profile'
import Cards from './Cards/Cards'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Profile/>
      <Cards />
    </>
  )
}

export default App
