export default function CardInformacoesUser(props) {
    return (
        <div className="flex justify-between  bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg px-3 py-3.5 mr-2 mb-2">
            <div className="flex items-center">
                <img src={props.user.photoUrl} className="border-solid border-2 border-gray-400" referrerPolicy="no-referrer" />
                <div className="ml-8 mr-8">
                    <p className="text-4xl text-white">{props.user.user }</p>
                    <p className="text-base text-white mx-2">{props.user.email}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button className= "bg-gradient-to-r text-white from-gray-900 via-gray-800 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-300 shadow-lg shadow-gray-100/50 dark:shadow-lg dark:shadow-gray-800/80 py-2 px-4 rounded " onClick={props.logout}>
                    Sair
                </button>
            </div>
        </div>
    );
}
