import {useEffect, useState} from "react";
import Service from "../Shared/Service";
import Services from "../../data/fusspflegeServices.json";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Fußpflege | Romy Winkler",
    description: "Für einen perfekten Auftritt - mit höchsten Hygienestandards und Kompetenz dank 20 Jahren Berufserfahrung.",
    meta: {
        charset: "utf-8",
    }
};

function Fusspflege() {
    const [services, setServices] = useState([{}]);

    useEffect(() => {
        setServices(Services);
    }, []);

    return (<>
        <DocumentMeta {...meta}>
            <div className="scroll-smooth relative h-[calc(100vh-8rem)] w-full bg-title-fusspflege bg-no-repeat bg-cover bg-center">
                <a className="absolute bottom-12 left-1/2 border border-gray-300 transform -translate-x-1/2 p-3 bg-white hover:bg-petrol-400 rounded-full center-bottom" href="#fusspflege-main">
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:block h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div id="fusspflege-main" className="mx-4 py-8 lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
                <h1 className="text-5xl text-gray-700 mb-4">Fußpflege</h1>
                <p className="mb-4"> Für einen perfekten Auftritt - mit höchsten hygienischen Standards und einer Behandlung nach den österreichischen medizinischen Richtlinien aus fußpflegerischer Sicht, biete ich Ihren Füßen die Pflege, die sie verdienen. </p>
                <p> Eine ausführlichen Fußanalyse ermöglicht, bei der professionellen Pflege auf die ganz individuellen Bedürfnisse Ihrer Füße einzugehen und um Ihnen ein persönliches Pflegeprogramm für die Heimpflege zusammenzustellen. </p>
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

export default Fusspflege;