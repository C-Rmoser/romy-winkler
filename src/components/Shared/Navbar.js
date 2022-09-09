import {useState} from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";
import { ReactComponent as LogoNav } from '../../images/logo_nav.svg';

function Navbar() {
    const [menuOpened, setMenuOpened] = useState(false);
    const [kosmetikOpened, setKosmetikOpened] = useState(false);
    const [anfrageOpened, setAnfrageOpened] = useState(false);

    const classes = clsx({
        "hidden": !menuOpened,
        "flex": menuOpened
    });

    const classesKosmetik = clsx({
        "h-0": !kosmetikOpened,
        "h-[200]": kosmetikOpened
    });

    const classesAnfrage = clsx({
        "h-0": !anfrageOpened,
        "h-[135px]": anfrageOpened
    });

    const classesRotateKosmetik = clsx({
        "rotate-180": kosmetikOpened,
        "rotate-0": !kosmetikOpened
    });

    const classesRotateAnfrage = clsx({
        "rotate-180": anfrageOpened,
        "rotate-0": !anfrageOpened
    });

    function handleToggleMenu() {
        setMenuOpened(!menuOpened);
    }
    
    function handleToggleKosmetik() {
        setKosmetikOpened(!kosmetikOpened);
    }

    function handleToggleAnfrage() {
        setAnfrageOpened(!anfrageOpened);
    }

    function handleCloseMenu() {
        if(setMenuOpened) {
            setMenuOpened(false);
        }
    }

    return (
        <nav className="tracking-widest bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="mx-auto lg:container">
                <div className="grid grid-cols-4 text-sm xl:text-base uppercase lg:grid-cols-3 min-h-32 lg:text-white">
                    {/*menu left side */}
                    <ul className={classes + " bg-white lg:bg-transparent flex-col lg:flex lg:flex-row col-start-1 row-start-2 col-span-5 lg:row-start-1 lg:col-span-1 lg:col-start-1 lg:pl-2 xl:pl-14 2xl:pl-24 lg:items-center lg:justify-start"}>
                        <li className="lg:h-full">
                            <Link onClick={handleToggleMenu} className="block items-center py-3 pr-4 pl-4 mt-2 border-b border-gray-200 lg:h-full lg:flex lg:mt-0 lg:px-3 xl:px-5 hover:bg-gray-200 lg:hover:bg-petrol-400 lg:border-none" to="/">Home</Link>
                        </li>
                        <li className="lg:h-full">
                            <Link onClick={handleToggleMenu}  className="block items-center py-3 pr-4 pl-4 border-b border-gray-200 lg:h-full lg:flex lg:mt-0 lg:px-3 xl:px-5 hover:bg-gray-200 lg:hover:bg-petrol-400 lg:border-none" to="/fusspflege">Fusspflege</Link>
                        </li>
                        <li className="flex relative flex-col group lg:h-full lg:justify-center lg:items-center">
                            <div className="flex lg:items-center lg:h-full">
                                <button onClick={handleToggleAnfrage} className="font-WorkSans tracking-widest block flex justify-between py-3 pr-4 pl-4 w-full uppercase border-b border-gray-200 lg:group-hover:bg-petrol-400 lg:h-full lg:items-center lg:mt-0 lg:px-3 xl:px-5 hover:bg-gray-200 lg:hover:bg-petrol-400 lg:border-none">
                                    Anfrage
                                    <svg xmlns="http://www.w3.org/2000/svg" className={classesRotateAnfrage + " lg:block h-5 w-5 transition-transform transform lg:group-hover:rotate-180"} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* Anfrage submenu */}
                            <div className={classesAnfrage + " w-[220px] transition-height transition-200 lg:h-0 text-black lg:text-white overflow-hidden lg:group-hover:h-[136px] xl:group-hover:h-[145px] lg:block lg:absolute lg:z-20 lg:top-32 lg:bg-petrol-400 lg:rounded-b lg:shadow-xl"}>
                                <ul className="normal-case">
                                    <li>
                                        <Link onClick={handleToggleMenu} className="block py-3 pl-8 border-b lg:h-full lg:px-4 lg:py-3 lg:hover:bg-petrol-600" to="/termin">Termin anfragen</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleToggleMenu} className="block py-3 pl-8 border-b lg:h-full lg:px-4 lg:py-3 lg:hover:bg-petrol-600" to="/gutschein">Gutschein bestellen</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleToggleMenu} className="block py-3 pl-8 border-b lg:border-b-0 lg:h-full lg:px-4 lg:py-3 lg:hover:bg-petrol-600" to="/anfahrt">Mein Einsatzbereich</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {/* logo */}
                    <Link onClick={handleCloseMenu} className="col-span-5 col-start-1 row-start-1 self-center py-2 ml-4 h-32 lg:ml-0 lg:col-span-1 lg:col-start-2 lg:justify-self-center" to="/">
                        <LogoNav className="h-full normal-case fill-current stroke-current text-petrol-400" src={LogoNav} alt="Logo Romy Winkler"/>
                    </Link>
                    {/* menu right side */}
                    <ul className={classes + " bg-white lg:bg-transparent flex-col lg:flex lg:flex-row col-start-1 row-start-3 lg:row-start-1 col-span-5 lg:col-span-1 lg:pl-0 lg:pr-2 xl:pr-14 2xl:pr-24 lg:items-center lg:justify-end"}>
                        <li className="lg:h-full">
                            <Link onClick={handleToggleMenu}  className="block items-center py-3 pr-4 pl-4 border-b border-gray-200 lg:h-full lg:flex lg:mt-0 lg:px-3 xl:px-5 hover:bg-gray-200 lg:hover:bg-petrol-400 lg:border-none" to="/coaching">Coaching</Link>
                        </li>
                        <li className="flex relative flex-col group lg:h-full lg:justify-center lg:items-center">
                            <div className="flex lg:items-center lg:h-full">
                                <button onClick={handleToggleKosmetik} className="font-WorkSans tracking-widest block flex justify-between py-3 pr-4 pl-4 w-full uppercase border-b border-gray-200 lg:group-hover:bg-petrol-400 lg:h-full lg:items-center lg:mt-0 lg:px-3 xl:px-5 hover:bg-gray-200 lg:hover:bg-petrol-400 lg:border-none">
                                    Kosmetik
                                    <svg xmlns="http://www.w3.org/2000/svg" className={classesRotateKosmetik + " lg:block h-5 w-5 transition-transform transform lg:group-hover:rotate-180"} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* kosmetik submenu */}
                            <div className={classesKosmetik + " transition-height transition-200 lg:h-0 text-black lg:text-white overflow-hidden lg:group-hover:h-[180px] xl:group-hover:h-[196px] lg:block lg:absolute lg:z-20 lg:top-32 lg:bg-petrol-400 lg:rounded-b lg:shadow-xl"}>
                                <ul className="normal-case">
                                    <li>
                                        <Link onClick={handleToggleMenu} className="block py-3 pl-8 border-b lg:h-full lg:w-full lg:px-4 lg:py-3 lg:hover:bg-petrol-600" to="/strahlende-augen"> Strahlende Augen </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleToggleMenu} className="block py-3 pl-8 border-b lg:h-full lg:w-full lg:px-4 lg:py-3 lg:hover:bg-petrol-600" to="/gesichtsbehandlungen">Gesichtsbehandlungen</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleToggleMenu} className="block py-3 pl-8 border-b lg:h-full lg:w-full lg:px-4 lg:py-3 lg:hover:bg-petrol-600" to="/manikuere">Maniküre</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleToggleMenu} className="block py-3 pl-8 border-b lg:border-b-0 lg:h-full lg:w-full lg:px-4 lg:py-3 lg:hover:bg-petrol-600" to="/koerperbehandlungen">Körperbehandlungen</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="lg:h-full">
                            <Link onClick={handleToggleMenu}  className="block items-center py-3 pr-4 pl-4 border-b border-gray-200 lg:h-full lg:flex lg:mt-0 lg:px-3 xl:px-5 hover:bg-gray-200 lg:hover:bg-petrol-400 lg:border-none" to="/piercing">Piercing</Link>
                        </li>
                    </ul>
                    {/* mobile menu button */}
                    <div className="flex col-span-1 col-start-5 row-start-1 justify-end items-center h-full">
                        <button onClick={handleToggleMenu} type="button>" className="font-WorkSans tracking-widest block text-white lg:hidden">
                            {!menuOpened && <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 w-8 h-8 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>}
                            {menuOpened && <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 w-8 h-8 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
