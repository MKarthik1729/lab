import React from 'react'
import './nav.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Navbar({setToggle}) {
  return (
    <div>
      <nav className='nav'>
          <li onClick={()=>setToggle(0)}>Form</li>
          <li onClick={()=>setToggle(1)}>Table</li>
          {/* <li>Register</li> */}
          <Popup trigger={<p> Register </p>} 
     position="bottom center">
      <div>GeeksforGeeks</div>
      <button>Click here</button>
    </Popup>
      </nav>
    </div>
  )
}

export default Navbar
