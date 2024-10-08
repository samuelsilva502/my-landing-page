import NavBar from './components/Navbar'

import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App"> 
     <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
