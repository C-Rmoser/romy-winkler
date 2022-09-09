import {useState} from "react";
import AnimateHeight from 'react-animate-height';
import clsx from "clsx";

function Service(props) {
    const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);
    const [height, setHeight] = useState(0);

    function toggleDescription() {
        setDescriptionIsOpen(!descriptionIsOpen);
        setHeight(descriptionIsOpen ? 0 : 'auto' );
   }
    
   const classesRotate = clsx({
       'rotate-180': descriptionIsOpen,
       'rotate-0': !descriptionIsOpen
   });
    
    return (
        <div className="mx-4 mb-4 bg-white rounded border border-gray-500 shadow-lg lg:w-2/3 xl:w-3/5 2xl:w-1/2 lg:mx-auto">
            <div onClick={toggleDescription} className="flex justify-between p-1 mx-auto cursor-pointer lg:items-center">
                <div className="ml-2 lg:ml-4">
                    <h1 className="text-xl font-semibold leading-6 text-petrol-400">{props.service.title}</h1>
                    <p className="text-gray-500">{props.service.duration} Minuten</p>
                    <p className="w-auto lg:mx-0 block lg:hidden">{props.service.price} Euro</p>
                </div>
                <div className="flex flex-col-reverse justify-center lg:flex lg:flex-row lg:justify-between">
                    <p className="w-auto lg:mx-0 hidden lg:block">{props.service.price} Euro</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className={classesRotate + " transform transition-transform h-6 w-6 mx-2 text-petrol-400 stroke-current self-end lg:self-center"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <AnimateHeight
                duration={200}
                height={ height }>
                <div className="overflow-hidden p-4 mx-auto w-full bg-white rounded-b">
                    <p>{props.service.description}</p>
                </div>
            </AnimateHeight>
        </div>
    );
}

export default Service;