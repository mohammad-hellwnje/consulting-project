
export default function HeadAccordion({item , isOpen , onclick } : {item: {title: string;}, isOpen: boolean; onclick: () => void;}) {
  return (
     <button className="w-full h-25 flex items-center justify-between px-10 py-3 bg-white hover:bg-gray-200 font-medium"
              onClick={onclick}
            >
              <span className="2xl:text-xl text-base font-semibold text-[#3D2342]">{item.title}</span>
              <span>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3D2342"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3D2342"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </span>
            </button>
  )
}
