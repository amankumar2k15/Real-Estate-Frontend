import React from 'react'

const Pagination = () => {
    return (
        <div className="flex flex-col items-center">
            <span className="text-[12px] text-gray-700 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 rounded-l-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize">
                    Prev
                </button>
                <div className='border border-black px-4 py-0.5 text-lg'>1</div>
                <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 rounded-r-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination