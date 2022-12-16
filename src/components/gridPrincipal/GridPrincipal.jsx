export default function GridPrincipal(props) {
    return (
        <div className="group">
            <div className="mt-8 ml-3 rounded-xl transition duration-500 hover:scale-105 hover:bg-blue-600  group-hover:text-gray-100   ">
                <div className="shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#" className="">
                        <img
                            className=" object-cover w-full h-45 rounded-t-xl"
                            style={{ height: "200px" }}
                            src={props.img}
                            alt=""
                        />
                    </a>
                </div>
                <div className="p-2" style={{ height: "200px" }}>
                    <h5 className="mb-3 text-xl font-bold first-letter:capitalize uppercase ">{props.title}</h5>
                    <p className="mb-3 font-normal first-letter:capitalize lowercase">{props.description}</p>
                    <i className="fas fa-map-marker-alt fa-l mt-[3px] ">
                        <span className="font-normal capitalize">&nbsp;{props.local}</span>
                    </i>
                </div>
            </div>
        </div>
    );
}
