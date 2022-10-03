

export default function GridPrincipal(props) {
    return (
        <div className=" mt-8 ml-3   rounded-lg transition duration-500 hover:scale-105 hover:bg-blue-100 hover:focus:border-blue-500">
            <div className="bg-blue-600 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#" className="" >
                    <img className=" w-full h-70      " src={props.img} alt="" />
                </a>
            </div>
            <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold ">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                <i className="fas fa-map-marker-alt fa-lg mt-[3px] "><span className="font-normal">&nbsp;{props.local}</span></i>
            </div>
        </div>
    );
}
