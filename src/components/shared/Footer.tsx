import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'
import Logo from './Logo'

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 400,
    })
  }, [])
  return (
    <div data-aos="fade-up" className="bg-[#161D2D] py-10">
      <div className="container">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          <div className="space-y-5">
            <Logo color="white" />
            <p className="text-neutral-500 text-lg font-medium">
              Giving everyone access <br /> to early-stage startup <br />{' '}
              investing
            </p>
            <div className="flex items-center gap-2 text-neutral-500">
              <FaFacebookSquare className="w-7 h-7 cursor-pointer hover:text-white" />
              <FiInstagram className="w-7 h-7 cursor-pointer hover:text-white" />
              <FaTwitter className="w-7 h-7 cursor-pointer hover:text-white" />
              <BsLinkedin className="w-7 h-7 cursor-pointer hover:text-white" />
              <FaDiscord className="w-7 h-7 cursor-pointer hover:text-white" />
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl text-neutral-500 font-medium border-b-2 pb-3">
              For investors
            </h1>
            <ul className="text-white space-y-2">
              <li className="text-xl font-medium">Why invest</li>
              <li className="text-xl font-medium">How it works</li>
              <li className="text-xl font-medium">FAQ</li>
              <li className="text-xl font-medium">Risks</li>
              <li className="text-xl font-medium">Privacy Policy</li>
              <li className="text-xl font-medium">Accessibilityy</li>
              <li className="text-xl font-medium">Cookie preferences</li>
              <li className="text-xl font-medium">Form CRS</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl text-neutral-500 font-medium border-b-2 pb-3">
              For startups
            </h1>
            <ul className="text-white space-y-2">
              <li className="text-xl font-medium">Why raise</li>
              <li className="text-xl font-medium">Learn</li>
              <li className="text-xl font-medium">FAQ</li>
              <li className="text-xl font-medium">Instruments</li>
              <li className="text-xl font-medium">Crowd SAFE</li>
              <li className="text-xl font-medium">Tokenize assets</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl text-neutral-500 font-medium border-b-2 pb-3">
              Company
            </h1>
            <ul className="text-white space-y-2">
              <li className="text-xl font-medium">About</li>
              <li className="text-xl font-medium">Journal</li>
              <li className="text-xl font-medium">Events</li>
              <li className="text-xl font-medium">Contact</li>
              <li className="text-xl font-medium">We're hiring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
