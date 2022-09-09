import {Link} from "react-router-dom";

function CardIcon (props) {
    return (
        <div className="mb-8 h-100 mx-4 w-64 bg-gradient-to-b from-gray-800 to-gray-700 lg:w-64 lg:h-100 shadow-xl rounded-t-xl rounded-b">
            <div className={props.backgroundImage + " bg-center bg-cover flex justify-center items-center h-40 w-full bg-white rounded-t"}>
            </div>
            <div className={"flex flex-col justify-between h-60 p-4 lg:p-4"}>
                <div className={"bg-contain bg-no-repeat bg-bottom"}>
                    <h1 className="font-WorkSans tracking-widest mb-2 text-center text-white uppercase text-lg">{props.headline}</h1>
                    <p className="text-white">{props.paragraph}</p>
                </div>
                <Link reloadDocument to={"/" + props.link} className="block justify-self-end self-center">
                    <button className="border border-gray-800 text-white bg-petrol-400 w-28 h-10 rounded hover:bg-petrol-600">
                        Mehr...
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CardIcon;
