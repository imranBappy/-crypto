import telegram from '../../assets/telegram.png'


const Header = (props) => {
    return (
        <header className=' '>
            <div className="flex justify-center gap-5  dark:bg-primary h-[100px] items-center flex-wrap lg:justify-between px-[60px]">
                <div className="mt-5">
                    <img className=" w-[382px] h-[80px]" src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="Logo" />
                </div>
                <div className="flex gap-10">
                    <select className=' text-center  text-base font-semibold text-white border-none  px-4 py-1 bg-secondary rounded-lg' name="" id="">

                        <option value="">INR</option>
                    </select>
                    <select className=' text-center  text-base font-semibold text-white border-none  px-4 py-1 bg-secondary rounded-lg' name="" id="">
                        {
                            props?.data.map((dt) => <option key={dt._id} value=""> {dt.base_unit.toUpperCase()} </option>
                            )
                        }
                    </select>
                    <a href="#" className=" text-base font-semibold text-white border-none  px-4 py-1 bg-secondary rounded-lg ">BUY BTC</a>
                </div>
                <div className="flex gap-2 flex-wrap justify-center md:gap-5 items-center sm:justify-center md:pb-10">
                    <div className='w-10 h-10 font-bold text-xl dark:text-white ring-4 ring-brand rounded-full flex items-center justify-center '>
                        50
                    </div>
                    <div>
                        <a className="dark:text-white flex gap-1 md:gap-5 bg-brand rounded-md px-5 py-2  md:text-2xl font-bold" href="">
                            <img src={telegram} style={{ width: 20 }} alt="https://www.flaticon.com/free-icons/telegram" />
                            <span>  Contact Telegram</span>
                        </a>
                    </div>
                    <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-16 h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-brand after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span> */}
                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;