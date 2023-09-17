import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faRedhat } from '@fortawesome/free-brands-svg-icons'
const Navbar = () => {
  return (
    <nav className="bg-primary p-4 flex justify-between items-stretch">
    {/* Logo Section */}
    <div className="flex items-center">
      <FontAwesomeIcon icon={faRedhat} color='#FFF' size="2xl"/>
      <span className="text-white font-bold text-xl mx-2">Name</span>
    </div>

    {/* List of Items Section */}
    <ul className="flex space-x-4 text-white mt-2 mx-10">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    {/* Login/Signin Buttons Section */}
    <div className="ml-auto">
      <button className="bg-white text-primary-dark hover:bg-opacity-70 text-sm px-4 py-2 rounded-full mr-2 transition">
        Login
      </button>
      <button className="bg-secondary-light text-white hover:bg-opacity-70 text-sm px-4 py-2 rounded-full">
        Sign In
      </button>
    </div>
  </nav>
  )
}

export default Navbar