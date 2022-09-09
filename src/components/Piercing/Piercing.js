import Service from "../Shared/Service";
import {useEffect, useState} from "react";
import Services from "../../data/piercingServices.json";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Piercing | Romy Winkler",
    description: "Körperschmuck auf Ihren persönlichen Wunsch abgestimmt – ich lege größten Wert auf Hygiene und Qualität. ",
    meta: {
        charset: "utf-8",
    }
};

function Piercing() {
    const [services, setServices] = useState([{}]);

    useEffect(() => {
        setServices(Services);
    }, []);

    return (<>
        <DocumentMeta {...meta}>
            <div className="scroll-smooth relative h-[calc(100vh-8rem)] w-full bg-title-piercing bg-no-repeat bg-cover bg-center">
                <a className="absolute bottom-12 left-1/2 border border-gray-300 transform -translate-x-1/2 p-3 bg-white hover:bg-petrol-400 rounded-full center-bottom" href="#piercing-main">
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:block h-10 w-10 transition-transform transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div id="piercing-main" className="mx-4 py-8 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                <h1 className="text-5xl text-gray-700 mb-4">Piercing</h1>
                <p>Körperschmuck auf Ihren persönlichen Wunsch abgestimmt – ich lege größten Wert auf Hygiene und Qualität. Gerne erfülle ich Ihnen Ihren Piercing-Wunsch nach ausführlicher Beratung, unter Verwendung von moderner Technik und hochwertigen Materialien.</p>
            </div>
            <div className="pb-8">
                <div className="mx-4 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                    <h2 className="text-4xl text-gray-700 mb-2">Ohr</h2>
                </div>
                {
                    services.map((service, index) => {
                        if (service?.category?.toLowerCase() === "ohr") {
                            return <Service key={index} service={service}/>
                        }
                        else {
                            return null;
                        }
                    })
                }
                <div className="mx-4 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                    <h2 className="text-4xl text-gray-700 mb-2">Nase</h2>
                </div>
                {
                    services.map((service, index) => {
                        if (service?.category?.toLowerCase() === "nase") {
                            return <Service key={index} service={service}/>
                        }
                        else {
                            return null;
                        }
                    })
                }
                <div className="mx-4 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                    <h2 className="text-4xl text-gray-700 mb-2">Lippen</h2>
                </div>
                {
                    services.map((service, index) => {
                        if (service?.category?.toLowerCase() === "lippen") {
                            return <Service key={index} service={service}/>
                        }
                        else {
                            return null;
                        }
                    })
                }
                <div className="mx-4 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                    <h2 className="text-4xl text-gray-700 mb-2">Brust</h2>
                </div>
                {
                    services.map((service, index) => {
                        if (service?.category?.toLowerCase() === "brust") {
                            return <Service key={index} service={service}/>
                        }
                        else {
                            return null;
                        }
                    })
                }
                <div className="mx-4 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                    <h2 className="text-4xl text-gray-700 mb-2">Bauchnabel</h2>
                </div>
                {
                    services.map((service, index) => {
                        if (service?.category?.toLowerCase() === "bauchnabel") {
                            return <Service key={index} service={service}/>
                        }
                        else {
                            return null;
                        }
                    })
                }
            </div>
        </DocumentMeta>
    </>);
}

export default Piercing;