export default function CardInformacoesUser(props) {
    return (
        <div className="flex justify-between items-center bg-blue-500 mb-7 border-8 border-t-8 shadow-md p-3">
            <div className="flex items-center">
                <img src={props.user.photoUrl} style={{}} referrerPolicy="no-referrer" />
                <div className="ml-8 mr-8">
                    <p className="text-4xl text-black">{props.user.user }</p>
                    <p className="text-base text-black">{props.user.email}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button className="bg-black hover:bg-stone-300 text-white font-bold py-2 px-4 rounded" onClick={props.logout}>
                    Sair
                </button>
            </div>
        </div>
    );
}
