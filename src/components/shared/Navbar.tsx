import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiCheck, BiSearch } from 'react-icons/bi'
import { FaChevronDown } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { ShiftingDropDown } from './DropDown'
import Logo from './Logo'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [locatoin, setLocatoin] = useState<'US' | 'Global' | 'Europe'>('US')
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const [invest, setInvest] = useState(false)
  const [accredited, setAccredited] = useState(false)
  const [institutional, setInstitutional] = useState(false)
  const [more, setMore] = useState(false)
  const [world, setWorld] = useState(false)

  return (
    <>
      <div className="border-b bg-white fixed right-0 z-10 left-0 top-0">
        <div className="container w-full bg-white">
          <div className="py-5 flex justify-between items-center">
            <div className="flex items-center gap-x-5 w-full">
              <Link to={'/'}>
                <Logo color="#0B142B" />
              </Link>
              <ShiftingDropDown />
              <div className="flex max-lg:hidden group py-2 px-4 text-neutral-500 rounded-full items-center space-x-2 bg-[#F2F2F2]">
                <BiSearch className="text-2xl" width={60} height={60} />
                <input
                  type="text"
                  className="bg-transparent text-lg border-none outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex lg:gap-x-4 items-center">
              <div className="relative max-lg:hidden">
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
              <p className="text-lg max-lg:hidden min-w-16 cursor-pointer">
                Sign up
              </p>
              <div
                className="lg:hidden"
                onClick={() => setBurgerMenu((prev) => !prev)}
              >
                {burgerMenu ? (
                  <IoMdClose className="text-2xl cursor-pointer" />
                ) : (
                  <AiOutlineMenu className="text-2xl cursor-pointer" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      {burgerMenu && (
        <div className="lg:hidden fixed right-0 bottom-0 left-0 h-[calc(100vh_-_64px)] w-full ">
          <div className="container">
            <div className="flex flex-col gap-10 py-5">
              <div className="border-b-2 pb-2">
                <div
                  onClick={() => {
                    return setInvest((prev) => !prev)
                  }}
                  className="flex justify-between cursor-pointer items-center"
                >
                  <p className="text-xl font-medium">All investors</p>
                  <span>
                    <FaChevronDown
                      className={`${
                        invest && '-rotate-180'
                      } transition-all duration-200 text-xl`}
                    />
                  </span>
                </div>
                {/* asas */}

                {invest && (
                  <div className="space-y-5 mt-4">
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Primary market</p>
                        <p className="block text-sm text-neutral-400">
                          Invest in startups
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Secondary market</p>
                        <p className="block text-sm text-neutral-400">
                          Buy and sell assets
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Republic Note</p>
                        <p className="block text-sm text-neutral-400">
                          Own a piece of Republic's upside
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Investor Network Membership</p>
                        <p className="block text-sm text-neutral-400">
                          Receive exclusive discounts and benefits
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {/* 2 */}
              <div className="border-b-2 pb-2">
                <div
                  onClick={() => {
                    return setAccredited((prev) => !prev)
                  }}
                  className="flex justify-between cursor-pointer items-center"
                >
                  <p className="text-xl font-medium">Accredited only</p>
                  <span>
                    <FaChevronDown
                      className={`${
                        accredited && '-rotate-180'
                      } transition-all duration-200 text-xl`}
                    />
                  </span>
                </div>
                {/* asas */}

                {accredited && (
                  <div className="space-y-5 mt-4">
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Republic Venture</p>
                        <p className="block text-sm text-neutral-400">
                          opportunities for accredited investors
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b-2 pb-2">
                <div
                  onClick={() => {
                    return setInstitutional((prev) => !prev)
                  }}
                  className="flex justify-between cursor-pointer items-center"
                >
                  <p className="text-xl font-medium">Institutional</p>
                  <span>
                    <FaChevronDown
                      className={`${
                        institutional && '-rotate-180'
                      } transition-all duration-200 text-xl`}
                    />
                  </span>
                </div>
                {/* asas */}

                {institutional && (
                  <div className="space-y-5 mt-4">
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Republic Capital</p>
                        <p className="block text-sm text-neutral-400">
                          Multi-stage venture firm
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Republic Digital</p>
                        <p className="block text-sm text-neutral-400">
                          Crypto hedge fund
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b-2 pb-2">
                <div
                  onClick={() => {
                    return setMore((prev) => !prev)
                  }}
                  className="flex justify-between cursor-pointer items-center"
                >
                  <p className="text-xl font-medium">Accredited only</p>
                  <span>
                    <FaChevronDown
                      className={`${
                        more && '-rotate-180'
                      } transition-all duration-200 text-xl`}
                    />
                  </span>
                </div>
                {/* asas */}

                {more && (
                  <div className="space-y-5 mt-4">
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Wallet</p>
                        <p className="block text-sm text-neutral-400">
                          Manage your digital assets
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Mobile app</p>
                        <p className="block text-sm text-neutral-400">
                          Available in IOS or Android
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Partnerships</p>
                        <p className="block text-sm text-neutral-400">
                          Explore deal from our partners
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="">
                        <p className="text-xl">Learning center</p>
                        <p className="block text-sm text-neutral-400">
                          Explore investor resources
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                onClick={() => setWorld((prev) => !prev)}
                className="flex cursor-pointer justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-neutral-300">
                    <TbWorld />
                  </div>
                  <p className="text-sm text-neutral-400">
                    You are viewing the US site
                  </p>
                </div>
                <FaChevronDown
                  className={`${
                    world && '-rotate-180'
                  } transition-all duration-200 text-xl`}
                />
              </div>

              {world && (
                <div className="mt-3">
                  <div className="space-y-3 py-2">
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
                    className={`flex items-center justify-between ${
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
                    className={`flex items-center justify-between ${
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
                    className={`flex items-center justify-between ${
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
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
