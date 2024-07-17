export default function FinalCard({ cwGroupNm, inspIemNm1, inspWqbs, mjValue, buValue, hmValue, dsValue }) {

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col justify-start px-4 pt-4">
                <h5 className="mb-1 text-sm font-bold text-gray-600">{cwGroupNm}</h5>
                <span className="text-sm font-bold text-lime-800">{inspIemNm1} ({inspWqbs})</span>
            </div>

            <div className="flex flex-col items-center pb-10">
                <div className="flex">
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-2 py-2 mr-1 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                            명장검사 <p className='text-amber-300 font-bold ml-1'>{mjValue}</p></a>
                    </div>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-2 py-2 ml-1 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                            범어사검사 <p className='text-amber-300 font-bold ml-1'>{buValue}</p></a>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-2 py-2 mr-1 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                            화명검사 <p className='text-amber-300 font-bold ml-1'>{hmValue}</p></a>
                    </div>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-2 py-2 ml-1 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                            덕산검사 <p className='text-amber-300 font-bold ml-1'>{dsValue}</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}



