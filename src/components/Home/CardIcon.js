function CardIcon (props) {
    
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-700 lg:w-64 lg:h-96 shadow-xl">
            <div className="flex justify-center items-center h-36 w-full bg-white">
                <div className="item-center p-2 bg-gradient-to-tl from-petrol-400 to-petrol-400 rounded transform rotate-45">
                    <div className="h-16 w-16 bg-gray-800 rounded transform">
                        {props.Icon}
                    </div>
                </div>
            </div>
            <div className="h-60 lg:p-4 bg-contain bg-no-repeat bg-center">
                <h1 className="mb-2 text-center text-white uppercase lg:text-lg">{props.headline}</h1>
                <p className="text-white">{props.paragraph}</p>
            </div>
        </div>
    );
}

export default CardIcon;