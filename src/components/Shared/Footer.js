import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ContactContent from "../../data/contact.json";

function Footer() {

    const [contact, setContact] = useState([]);

    useEffect(() => {
        setContact(ContactContent);
    }, []);

    return (<>
        <div className="self-end w-screen">
        <div className="bg-gray-900 pt-4">
            <div className="container xl:w-5/6 2xl:w-4/6 flex flex-col md:justify-center gap-1 items-center px-4 pb-4 md:pb-0 mx-auto text-white md:flex-row">
                <Link className="p-4 mb-2 md:mb-0 w-full rounded border border-gray-800 md:px-0 bg-petrol-400 hover:bg-petrol-600" to="/coaching">
                    <button className="w-full">
                        <span className=""> Coaching anfragen </span>
                    </button>
                </Link>
                <Link className="p-4 mb-2 md:mb-0 w-full rounded border border-gray-800 md:px-0 bg-petrol-400 hover:bg-petrol-600" to="/termin">
                    <button className="w-full">
                        <span> Termin anfragen</span>
                    </button>
                </Link>
                <Link className="p-4 mb-2 md:mb-0 w-full rounded border border-gray-800 md:px-0 bg-petrol-400 hover:bg-petrol-600" to="/gutschein">
                    <button className="w-full">
                        <span>Gutschein bestellen</span>
                    </button>
                </Link>
            </div>
        </div>

        <div className="bg-gray-900 xs:bg-yellow-500 pb-4 md:pb-0 md:pt-0 md:pt-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2 px-4 xl:w-5/6 2xl:w-4/6 px-4 md:pb-0">
                <div className="flex gap-2 items-center lg:pt-0">
                    <div className="h-32 w-32 bg-center bg-cover bg-siegel-meisterbetrieb">
                    </div>
                    <div className="h-32 w-32 bg-center bg-cover bg-siegel-fusspflege">
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="h-32 w-32 bg-center bg-cover bg-siegel-piercing">
                    </div>
                    <div className="h-32 w-32 bg-center bg-cover bg-siegel-kosmetik">
                    </div>
                </div>
            </div>
        </div>

        <div className="md:hidden bg-gray-900">
            <div className="container px-4 mx-auto w-full">
                <div className="pb-2 text-white md:flex md:justify-between">
                    <div className="flex items-center mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-petrol-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="ml-2">{contact.phone}</span>
                    </div>
                    <div className="flex items-center md:ml-16 lg:ml-32 xl:ml-48 2xl:ml-64">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-petrol-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-2">{contact.email}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex relative flex-col justify-end items-center w-full bg-gray-900">
            <div className="w-full">
                <div className="container xl:w-5/6 2xl:w-4/6 px-4 py-8 mx-auto h-12">
                    <div className="flex flex-row-reverse justify-between h-full">
                        <div className="flex lg:flex-row-reverse md:gap-8">
                            <Link className="flex items-center text-white text-lg hover:underline ml-2" to="/impressum">
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-6 w-6 text-petrol-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                <span className="ml-2">Impressum</span>
                            </Link>
                            <div className="md:flex items-center text-white hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-petrol-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="ml-2">{contact.phone}</span>
                            </div>
                            <div className="md:flex items-center text-white hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-petrol-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-2">{contact.email}</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-full">
                            <a href="https://www.facebook.com/romy.winkler.12" rel="noreferrer" target="_blank">
                                <div className="w-12 h-12 bg-center bg-contain bg-logo-fb">

                                </div>
                            </a>
                            <a href="https://www.instagram.com/romy.winkler/?hl=en" rel="noreferrer" target="_blank">
                                <div className="ml-4 w-12 h-12 bg-center bg-contain lg:ml-6 bg-logo-insta">

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>);
}

export default Footer;