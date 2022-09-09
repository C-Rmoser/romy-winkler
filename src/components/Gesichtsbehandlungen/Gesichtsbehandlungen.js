import Service from "../Shared/Service";
import {useEffect, useState} from "react";
import Services from "../../data/gesichtServices.json";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Gesichtsbehandlung | Romy Winkler",
    description: "Erleben Sie puren Luxus mit einer tiefenwirksamen Pflege – perfekt auf Ihren Hauttyp abgestimmt.",
    meta: {
        charset: "utf-8",
    }
};

function Gesichtsbehandlungen() {
    const [services, setServices] = useState([{}]);

    useEffect(() => {
        setServices(Services);
    }, []);

    return (<>
        <DocumentMeta {...meta}>
            <div className="scroll-smooth relative h-[calc(100vh-8rem)] w-full bg-title-gesichtsbehandlungen bg-no-repeat bg-cover bg-center">
                <a className="absolute bottom-12 left-1/2 border border-gray-300 transform -translate-x-1/2 p-3 bg-white hover:bg-petrol-400 rounded-full center-bottom" href="#gesichtsbehandlungen-main">
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:block h-10 w-10 transition-transform transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div id="gesichtsbehandlungen-main" className="mx-4 py-8 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                <h1 className="text-5xl text-gray-700 mb-4">Gesichtsbehandlungen</h1>
                <p>Erleben Sie puren Luxus mit einer tiefenwirksamen Pflege – perfekt auf Ihren Hauttyp abgestimmt. Nach einer ausführlichen Gesichtsanalyse folgt ein Verwöhnprogramm, das perfekt und individuell auf Ihre Haut abgestimmt ist.</p>
            </div>
            <div className="pb-8">
                {
                    services.map((service, index) => {
                        return <Service key={index} service={service}/>
                    })
                }
            </div>
        </DocumentMeta>
    </>);
}

export default Gesichtsbehandlungen;