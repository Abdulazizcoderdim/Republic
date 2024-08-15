const MostTraction = () => {
  return (
    <div className="mt-20 container">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Most traction</h1>
        <p className="text-lg text-neutral-500">
          The deals attracting the most interest right now
        </p>
        <div className="grid grid-cols-3">
          {/*  */}
          <div className="rounded-lg border min-h-96 cursor-pointer group transition-all duration-300">
            <div className="rounded-lg">
              <img
                className="w-full h-full object-cover origin-center rounded-t-lg"
                src="https://imgproxy.republic.com/Zzx1zaeHiPIawopSn6B03ZxBJs7cddf0MNjgWBFrsqo/rs:::/aHR0cHM6Ly91cGxv/YWRzLnJlcHVibGlj/LmNvbS9wL29mZmVy/aW5ncy9jYXJkX2lt/YWdlcy9vcmlnaW5h/bC8wMDAvMDA2Lzk5/MC82OTkwLTE3MjE3/NjI4NzQtMmEzNzU4/NTdiOWRjZmZlZGNh/ZTk4MzBjZDQ2ZTVj/MGJlZTQwMWVjNi5w/bmc"
                alt=""
              />
            </div>
            <div className="px-5 bg-white group-hover:-translate-y-20 transition-all duration-300">
              <img
                className="rounded-md -translate-y-10 border"
                title="PFD"
                alt="Logo of PFD"
                src="https://imgproxy.republic.com/Ffkcnf7Db0izWLL0dSslJij-x6y3vJ8a3ZuI8Egxn7g/rs:fit:60:60/aHR0cHM6Ly91cGxv/YWRzLnJlcHVibGlj/LmNvbS9wL29mZmVy/aW5ncy9sb2dvcy9v/cmlnaW5hbC8wMDAv/MDA2Lzk5MC82OTkw/LTE3MDI5MTg1MzAt/MmZmZWEzMTE2OTJm/ZTlmMDk1OWMxYTQw/NGNhNzIyYmUxNmE3/YmIzZS5wbmc"
              />
              <h1 className="text-2xl font-bold">PFD</h1>
              <p className="text-neutral-500 text-lg">
                Specialized project management services and business cycle
                finance solutions
              </p>
              <p className="mt-8 group-hover:hidden text-lg text-neutral-500">
                Henderson, NV
              </p>
              <p className="bg-neutral-100 group-hover:hidden w-28 mt-2 px-1 rounded-md ">
                HEALTHCARE
              </p>
              <p className="text-sm mb-4 group-hover:hidden text-neutral-400 mt-2">
                Capital R Reg D 506c
              </p>
              {/* hover */}
              <div className="mt-20 hidden group-hover:block">
                <p className="text-xl py-2 border-t-2">
                  <span className="font-medium">$140.000</span> raised
                </p>
                <p className="text-xl py-2 border-t-2">
                  <span className="font-medium">7</span> investors
                </p>
              </div>
              {/* hover */}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default MostTraction
