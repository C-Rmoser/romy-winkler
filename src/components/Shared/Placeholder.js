import logo from "../images/Logo.png"

function Placeholder () {
    return (
        <div className="h-screen w-screen bg-white flex items-center mx-auto">
            <img className="md:w-1/2 md:h-auto md:mx-auto" src={logo} alt="Logo Romy Winkler" />
        </div>
    ); 
}

export default Placeholder;