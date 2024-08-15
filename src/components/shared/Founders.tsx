import { FaCheck } from 'react-icons/fa'

const Founders = () => {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <h1 className="text-2xl font-medium text-neutral-500">For founders</h1>
        <div className="flex items-center max-md:flex-col justify-between gap-10">
          <div className="md:w-1/2 space-y-10">
            <h1 className="text-5xl font-bold">
              Harness the power of your community
            </h1>
            <p className="text-2xl text-neutral-500">
              Crowdfunding delivers marketing benefit, customer loyalty and
              funds with speed
            </p>
            <ul className="space-y-5">
              <li className="text-2xl flex items-center gap-3 font-medium">
                <FaCheck className="text-green-500" /> Powerful fundraising
                tools
              </li>
              <li className="text-2xl flex items-center gap-3 font-medium">
                <FaCheck className="text-green-500" /> Engage your community
              </li>
              <li className="text-2xl flex items-center gap-3 font-medium">
                <FaCheck className="text-green-500" /> Dedicated team
              </li>
              <li className="text-2xl flex items-center gap-3 font-medium">
                <FaCheck className="text-green-500" /> SEC filing help
              </li>
            </ul>
            <button className="text-lg font-bold bg-blue-600 text-white pt-2 pb-3 hover:bg-blue-500 transition rounded-md w-44">
              Raise capital
            </button>
          </div>
          <div className="md:w-1/2 w-full">
            <iframe
              className="w-full h-80 rounded-xl"
              src="https://www.youtube.com/embed/lqL_biirPys?si=QyeJ89KXTte-sGaZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founders
