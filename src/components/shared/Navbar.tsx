import { useState } from 'react'
import { BiCheck, BiSearch } from 'react-icons/bi'
import { TbWorld } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { ShiftingDropDown } from './DropDown'
import Logo from './Logo'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [locatoin, setLocatoin] = useState<'US' | 'Global' | 'Europe'>('US')
  return (
    <div className="container fixed right-0 left-0 top-0 w-full bg-white border">
      <div className="py-5 flex justify-between items-center">
        <div className="flex items-center gap-x-5 w-full">
          <Link to={'/'}>
            <Logo />
          </Link>
          <ShiftingDropDown />
          <div className="flex group py-2 px-4 text-neutral-500 rounded-full items-center space-x-2 bg-[#F2F2F2]">
            <BiSearch className="text-2xl" width={60} height={60} />
            <input
              type="text"
              className="bg-transparent text-lg border-none outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="relative">
            <p
              onClick={() => setOpen(!open)}
              className="flex text-xl hover:bg-neutral-200 py-1 px-2 rounded-xl cursor-pointer items-center gap-2"
            >
              <TbWorld /> {locatoin}
            </p>

            {/* modal */}
            {open && (
              <div className="bg-white pb-2 mt-2 text-black absolute min-w-60 right-0 shadow-lg border border-blue-600 rounded-md">
                <div className="space-y-3  px-3 py-2">
                  <h1 className="font-medium text-lg">Region preference</h1>
                  <p className="text-neutral-400 w-full text-base">
                    You are viewing the US site
                  </p>
                </div>
                <p
                  onClick={() => {
                    setLocatoin('Global')
                    setOpen(false)
                  }}
                  className={`px-3 flex items-center justify-between ${
                    locatoin === 'Global'
                      ? 'bg-transparent'
                      : 'cursor-pointer hover:bg-neutral-100'
                  } py-2 mt-2`}
                >
                  Global
                  {locatoin === 'Global' && <BiCheck />}
                </p>
                <p
                  onClick={() => {
                    setLocatoin('US')
                    setOpen(false)
                  }}
                  className={`px-3 flex items-center justify-between ${
                    locatoin === 'US'
                      ? 'bg-transparent'
                      : 'cursor-pointer hover:bg-neutral-100'
                  } py-2 mt-2`}
                >
                  US
                  {locatoin === 'US' && <BiCheck />}
                </p>
                <p
                  onClick={() => {
                    setLocatoin('Europe')
                    setOpen(false)
                  }}
                  className={`px-3 flex items-center justify-between ${
                    locatoin === 'Europe'
                      ? 'bg-transparent'
                      : 'cursor-pointer hover:bg-neutral-100'
                  } py-2 mt-2`}
                >
                  Europe
                  {locatoin === 'Europe' && <BiCheck />}
                </p>
              </div>
            )}
          </div>

          <p className="text-lg min-w-16 cursor-pointer">Log in</p>
          <p className="text-lg min-w-16 cursor-pointer">Sign up</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
