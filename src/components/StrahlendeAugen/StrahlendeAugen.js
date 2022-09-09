import {useState, useEffect} from "react";
import Service from "../Shared/Service.js";
import Services from "../../data/augenServices.json";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Strahlende Augen | Romy Winkler",
    description: "Intensivieren Sie Ihren Blick durch professionelle Behandlung und Pflege Ihrer Augenbrauen.",
    meta: {
        charset: "utf-8",
    }
};

function StrahlendeAugen() {
    const [services, setServices] = useState([{}]);
    
    useEffect(() => {
        setServices(Services);
    }, []);

    return (<>
        <DocumentMeta {...meta}>
            <div className="scroll-smooth relative h-[calc(100vh-8rem)] w-full bg-title-strahlende-augen bg-no-repeat bg-cover bg-center">
                <a className="absolute bottom-12 left-1/2 border border-gray-300 transform -translate-x-1/2 p-3 bg-white hover:bg-petrol-400 rounded-full center-bottom" href="#augen-main">
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:block h-10 w-10 transition-transform transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div id="augen-main" className="mx-4 py-8 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                <h1 className="text-5xl text-gray-700 mb-4">Strahlende Augen</h1>
                <p>Intensivieren Sie Ihren Blick! Durch professionelles Färben Ihrer Augenbrauen und Wimpern wird ein langanhaltendes Farbergebnis erzielt. Durch zupfen oder enthaaren mit Wachsstreifen werden Ihre Augenbrauen perfekt in Form gebracht.</p>
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

export default StrahlendeAugen;