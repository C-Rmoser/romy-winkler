import {GoogleMap, LoadScript} from '@react-google-maps/api';
import { Circle } from '@react-google-maps/api';
import {useEffect, useState} from "react";
import DocumentMeta from 'react-document-meta';

const containerStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
};

const center = {
    lat: 47.9754485,
    lng: 13.2432871
};

const circleOptions = {
    strokeColor: '#01779f',
    strokeOpacity: 1,
    strokeWeight: 2,
    fillColor: '#01779f',
    fillOpacity: 0.15
}

const meta = {
    title: "Romy Winkler | Mobile Fußpflege, Kosmetik & Coaching",
    description: "Ich komme zu Ihnen, nicht Sie zu mir. Mein Einsatzgebiet befindet sich in Straßwalchen & Salzburg.",
    canonical: "",
    meta: {
        charset: "utf-8",
        name: {
            keywords: "react,meta,document,html,tags"
        }
    }
};

function Anfahrt() {

    const [infoIsVisible, setInfoIsVisible] = useState(true);

    function handleHideInfoClick() {
        setInfoIsVisible(false);
    }

    useEffect(() => {
            document.title = "Einsatzgebiet in Straßwalchen & Salzburg | Romy Winkler";
        }, []);

    return (
        <DocumentMeta {...meta}>
            <div className="relative w-full h-[calc(100vh-8rem)]">
                <LoadScript googleMapsApiKey="AIzaSyAIRca_qfm1hRtCc9cwq0N0mK0hbKUa1UU">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={9}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <>
                        <Circle center={center} radius={20000} options={circleOptions}/>
                        </>
                    </GoogleMap>
                </LoadScript>

                {infoIsVisible &&
                    <div className="flex flex-col justify-center items-center absolute w-full md:w-96 md:bottom-6 md:right-20 bg-white bottom-0 mx-auto rounded shadow-2xl p-4">
                    <h1 className="center tracking-widest font-semibold text-petrol-600 mb-2">Mein
                        Einsatzbereich</h1>
                    <p className="mb-4"> Ich bin für Sie im <span className="font-bold">Raum Straßwalchen</span>,
                        sowie in der <span className="font-bold"> Stadt Salzburg </span> im Einsatz! </p>
                    <button onClick={handleHideInfoClick}
                            className="border border-gray-800 text-white bg-petrol-400 w-28 h-10 rounded hover:bg-petrol-600"> Ok
                    </button>
                </div>
                }
            </div>
        </DocumentMeta>
    )
}

export default Anfahrt;
