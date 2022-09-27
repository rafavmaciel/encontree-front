

export default function GridPrincipal(props) {
    return (
        <div className=" mt-8 ml-8 w-96 transition duration-500 hover:scale-105 hover:bg-blue-100 hover:focus:border-blue-500">
            <div className="max-w-sm min-w-300 min-h-300 max-w-300 max-h-300 bg-blue-600 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#" className="">
                    <img className="rounded-t-lg w-full  " src={props.img} alt="" />
                </a>
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold ">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                <i className="fas fa-map-marker-alt fa-lg mt-[3px] inline-flex items-center py-2 px-">{props.local}</i>
            </div>
        </div>
    );
}
