function MyDiv3({dd1, dd2, dd3}) {
    return (
        <div className='flex flex-col justify-start items-center
                        w-4/5 h-4/5 bg-blue-300 text-lg text-yellow-100
                        p-2'>
            <p className="w-full h-8 text-left p-2 mb-4">
                {dd1} - {dd2} - {dd3}
            </p>
        </div>
    );
}

export default MyDiv3 ;