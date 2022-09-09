import Romy from '../../images/romy.jpg';
import WelcomeContent from "../../data/welcome.json";
import ContactContent from "../../data/contact.json";
import {useEffect, useState} from "react";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Romy Winkler | Mobile Fußpflege, Kosmetik & Coaching",
    description: "Everyone has a story...",
    canonical: "",
    meta: {
        charset: "utf-8",
        name: {
            keywords: "react,meta,document,html,tags"
        }
    }
};

function Welcome() {

    const [welcome, setWelcome] = useState([]);
    const [contact, setContact] = useState([]);

    useEffect(() => {
        setWelcome(WelcomeContent);
        setContact(ContactContent);
    }, []);

    return (
        <DocumentMeta {...meta}>
            <div className="grid grid-cols-1 pb-8 bg-gray-100 lg:grid-cols-12 lg:pt-16 lg:pb-16">
                <div className="hidden col-span-1 col-start-1 row-start-1 bg-gradient-to-b from-gray-900 to-gray-800 rounded-r-lg lg:block lg:col-start-1 lg:col-span-6 xl:col-start-1 xl:col-span-5">
                </div>
                <div className="col-span-1 col-start-1 row-start-2 justify-center items-center px-4 lg:flex lg:flex-col lg:w-full lg:row-start-1 lg:col-start-8 lg:col-span-5 xl:col-start-7 xl:col-span-6">
                    <div className="justify-self-center md:px-8 lg:px-0 lg:max-w-sm xl:max-w-xl">
                        <h1 className="font-Forum pb-2 text-4xl font-bold xl:text-5xl md:text-left text-gray-700 2xl:text-5xl">{welcome.headline}</h1>
                        <p className="pb-4 text-lg text-gray-500">{welcome.content}</p>
                    </div>
                    <div className="w-64 text-black md:w-64 md:mx-8 lg:mt-8">
                        <div className="flex items-center font-bold mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-petrol-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="ml-2">{contact.phone}</span>
                        </div>
                        <div className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-petrol-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-2">{contact.email}</span>
                        </div>
                    </div>
                </div>
                <div className="row-start-1 py-12 pr-8 md:pr-48 lg:p-0 lg:mx-6 lg:py-16 lg:row-start-1 lg:col-start-2 lg:col-span-6 xl:col-span-5 xl:col-start-2">
                    <img className="rounded-r-lg shadow-2xl lg:rounded-lg" src={Romy} alt="Romy Winkler Portrait"/>
                </div>
            </div>
        </DocumentMeta>
    );
}

export default Welcome;