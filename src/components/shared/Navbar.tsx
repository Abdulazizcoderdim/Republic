import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShiftingDropDown } from './DropDown'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className="container fixed right-0 left-0 top-0 w-full bg-white border">
      <div className="py-5 flex justify-between items-center">
        <div className="flex items-center gap-x-5 w-full">
          <Link to={'/'}>
            <Logo />
          </Link>
          <ShiftingDropDown />
          <div>
            <input type="text" placeholder='' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar