import {useState, useEffect} from "react";
import { ReactComponent as LogoBackground } from '../../images/logo.svg';
import BioContent from "../../data/bio.json";

function Bio() {

    const [bio, setBio] = useState([]);

    useEffect(() => {
        setBio(BioContent);
    }, []);

    return (
        <div className="bg-gray-100">
            <div className="w-full h-48 bg-gray-800 transform -skew-y-6">
            </div>
            <div className="-mt-32 bg-gradient-to-t from-gray-900 to-gray-800 transform lg:-mt-48">
                <div className="container grid grid-cols-1 pb-8 mx-auto lg:auto-rows-auto lg:py-8">
                    <div className="col-start-1 row-start-1 justify-self-center self-end w-4/5 lg:self-center lg:justify-self-end lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:mr-16 lg:w-2/5 lg:p-0 xl:w-1/3 2xl:w-1/3">
                        <LogoBackground className="hidden fill-current stroke-current lg:block text-background-gray lg:text-petrol-400 lg:mx-auto" />
                    </div>
                    <div className="col-start-1 row-start-1 self-center lg:pb-1 lg:pl-1 lg:col-start-1 lg:col-span-1 lg:row-start-1">
                        <div className="p-2 lg:p-4 lg:w-2/3 xl:w-3/5 xl:ml-32 2xl:w-1/2 2xl:ml-64">
                            <h1 className="font-Forum ml-6 relative text-3xl text-white mb-2 lg:text-4xl 2xl:text-5xl lg:mb-3"> My professional Story </h1>
                            <div className="ml-6 bg-petrol-400 w-20 h-0.5 mb-4 md:mb-6 lg:mb-6">

                            </div>
                            <ul className="text-gray-200 font text-md lg:text-md">
                                {
                                    bio.map((bio, index) => {
                                        return (
                                        <div key={index} className="flex mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-none mt-1 w-4 h-4 fill-current text-petrol-300" viewBox="0 0 20 20">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                            <li className="pl-2">{bio.milestone}</li>
                                        </div>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;