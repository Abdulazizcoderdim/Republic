import { mostTraction } from '../../constants'

const MostTraction = () => {
  return (
    <div className="mt-20 container">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Most traction</h1>
        <p className="text-lg text-neutral-500">
          The deals attracting the most interest right now
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/*  */}

          {mostTraction.map((item) => {
            return (
              <div className="rounded-lg border min-h-96 cursor-pointer group transition-all duration-300">
                <div className="rounded-lg">
                  <img
                    className="w-full h-60 object-cover origin-center rounded-t-lg"
                    src={item.img1}
                    alt=""
                  />
                </div>
                <div className="px-5 bg-white group-hover:-translate-y-20 transition-all duration-300">
                  <img
                    className="rounded-md -translate-y-10 border"
                    title="PFD"
                    alt="Logo of PFD"
                    src={item.img2}
                  />
                  <h1 className="text-2xl font-bold">{item.name}</h1>
                  <p className="text-neutral-500 text-lg">{item.desc}</p>
                  <p className="mt-8 group-hover:hidden text-lg text-neutral-500">
                    {item.auth}
                  </p>
                  <p className="bg-neutral-100 group-hover:hidden w-28 mt-2 px-1 rounded-md ">
                    {item.job}
                  </p>
                  <p className="text-sm mb-4 group-hover:hidden text-neutral-400 mt-2">
                    {item.footer}
                  </p>
                  {/* hover */}
                  <div className="mt-20 hidden group-hover:block">
                    <p className="text-xl py-2 border-t-2">
                      {item.raised.trim()}
                      {/* <span className="font-medium">$140.000</span> raised */}
                    </p>
                    <p className="text-xl py-2 border-t-2">
                      {item.investors}
                      {/* <span className="font-medium">7</span> investors */}
                    </p>

                    {item.minInvestors && (
                      <p className="text-xl py-2 border-t-2">
                        {item.minInvestors}
                        {/* <span className="font-medium">$140.000</span> raised */}
                      </p>
                    )}

                    {item.value && (
                      <p className="text-xl py-2 border-t-2">
                        {item.value}
                        {/* <span className="font-medium">7</span> investors */}
                      </p>
                    )}
                  </div>
                  {/* hover */}
                </div>
              </div>
            )
          })}
          {/*  */}
        </div>
        <div className="flex justify-center text-center">
          <button className="border mt-5 rounded-md text-lg font-bold py-2 max-md:w-full hover:text-blue-600 transition hover:border-blue-600 px-28">
            View all
          </button>
        </div>
      </div>
    </div>
  )
}

export default MostTraction
