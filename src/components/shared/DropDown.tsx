import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiBarChart2, FiChevronDown, FiHome, FiPieChart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const ShiftingDropDown = () => {
  return <Tabs />
}

const Tabs = () => {
  const [selected, setSelected] = useState(null)
  const [dir, setDir] = useState<string | null>(null)

  const handleSetSelected = (val: any) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l')
    } else if (val === null) {
      setDir(null)
    }

    setSelected(val)
  }

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative max-lg:hidden flex h-fit gap-2 "
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            <span className="text-lg">{t.title}</span>
          </Tab>
        )
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  )
}

const Tab = ({ children, tab, handleSetSelected, selected }: any) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? ' bg-blue-500 text-neutral-100' : 'text-black'
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? 'rotate-180' : ''
        }`}
      />
    </button>
  )
}

const Content = ({ selected, dir }: any) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] min-w-[100vh] rounded-lg border border-blue-600 bg-white p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        )
      })}
    </motion.div>
  )
}

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
)

const Nub = ({ selected }: { selected: any }) => {
  const [left, setLeft] = useState(0)

  useEffect(() => {
    moveNub()
  }, [selected])

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`)
      const overlayContent = document.getElementById('overlay-content')

      if (!hoveredTab || !overlayContent) return

      const tabRect = hoveredTab.getBoundingClientRect()
      const { left: contentLeft } = overlayContent.getBoundingClientRect()

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft

      setLeft(tabCenter)
    }
  }

  return (
    <motion.span
      style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-blue-600 bg-blue-600"
    />
  )
}

const Investors = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="space-y-3">
          <h3 className="mb-2 text-lg font-medium">All investors</h3>
          <div>
            <Link to="#" className="">
              <p>Primary market</p>
              <p className="block text-sm text-neutral-400">
                Invest in startups
              </p>
            </Link>
          </div>
          <div>
            <Link to="#" className="">
              <p>Secondary market</p>
              <p className="block text-sm text-neutral-400">
                Buy and sell assets
              </p>
            </Link>
          </div>
          <div>
            <Link to="#" className="">
              <p>Republic Note</p>
              <p className="block text-sm text-neutral-400">
                Own a piece of Republic's upside
              </p>
            </Link>
          </div>
          <div>
            <Link to="#" className="">
              <p>Investor Network Membership</p>
              <p className="block text-sm text-neutral-400">
                Receive exclusive discounts and benefits
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-lg font-medium">Accredited only</h3>
            <div>
              <Link to="#" className="">
                <p>Republic Venture</p>
                <p className="block text-sm text-neutral-400">
                  Opportunities for accredited investors
                </p>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Institutional</h3>
            <div>
              <Link to="#" className="">
                <p>Republic Copital</p>
                <p className="block text-sm text-neutral-400">
                  Multi-stage venture firm
                </p>
              </Link>
            </div>
            <div className="mt-3">
              <Link to="#" className="">
                <p>Republic Digital</p>
                <p className="block text-sm text-neutral-400">
                  Cryto hedge fund
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="mb-2 text-lg font-medium">More</h3>
          <div>
            <Link to="#" className="">
              <p>Wallet</p>
              <p className="block text-sm text-neutral-400">
                Manage your digital assets
              </p>
            </Link>
          </div>
          <div>
            <Link to="#" className="">
              <p>Mobile app</p>
              <p className="block text-sm text-neutral-400">
                Available on IOS or Android
              </p>
            </Link>
          </div>
          <div>
            <Link to="#" className="">
              <p>Partnerships</p>
              <p className="block text-sm text-neutral-400">
                Explore deals from our partners
              </p>
            </Link>
          </div>
          <div>
            <Link to="#" className="">
              <p>Learning center</p>
              <p className="block text-sm text-neutral-400">
                Explore investor resources
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Businesses = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-black transition-colors hover:text-blue-600"
      >
        <FiHome className="mb-2 text-xl text-indigo-600" />
        <span className="text-base font-medium">Startup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-black transition-colors hover:text-blue-600"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-600" />
        <span className="text-base font-medium">Scaleup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-black transition-colors hover:text-blue-600"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-600" />
        <span className="text-base font-medium">Enterprise</span>
      </a>
    </div>
  )
}

const TABS = [
  {
    title: 'Investors',
    Component: Investors,
  },
  {
    title: 'Businesses',
    Component: Businesses,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }))
