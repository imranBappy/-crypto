
const List = (props) => {
    return (
        <div className=" dark:bg-primary  px-[60px] py-10  w-full overflow-auto">
            <table className=" min-w-[800px] text-white w-full border-separate border-spacing-y-5">
                <tr className="  text-dark font-bold ext-md  md:text-2xl ">
                    <th>#</th>
                    <th>Platform</th>
                    <th>Last Traded Price</th>
                    <th>Buy / Sell Price</th>
                    <th>Difference</th>
                    <th>Savings</th>
                </tr>

                {
                    props.data.map(dt =>
                        <>
                            <tr key={dt._id} className="text-center  bg-secondary text-md  md:text-2xl font-bold  ">
                                <td className=" rounded-l-md py-4 px-2 ">1</td>
                                <td >WazirX</td>
                                <td >₹ {dt.last}</td>
                                <td >₹ {dt.buy} / ₹ {dt.sell}</td>
                                <td style={(dt.buy - dt.sell) < 0 ? { color: "#da5757" } : {}} > {(dt.buy - dt.sell).toFixed(2)} %</td>
                                <td className="rounded-r-md "> ▼ ₹ {(((dt.buy - dt.sell) * -1) * dt.sell).toFixed(2)}</td>
                            </tr>
                        </>
                    )
                }



            </table>
        </div>
    );
};

export default List;