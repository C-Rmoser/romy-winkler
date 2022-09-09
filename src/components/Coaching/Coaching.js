import LogoWifi from '../../images/logo-wifi.png';
import RequestForm from "../Shared/RequestForm";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Fußpflege & Kosmetik Coaching | Romy Winkler",
    description: "I am a description, and I can create multiple tags",
    meta: {
        charset: "utf-8",
    }
};

function Coaching() {
    return (<>
        <DocumentMeta {...meta}>
            <div className="container grid grid-cols-1 grid-flow-row auto-rows-auto py-12 mx-auto text-lg sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="w-full h-64 bg-gray-200 bg-center bg-cover bg-title-coaching row-start-1 sm:row-start-2 sm:col-start-1 lg:row-start-1 lg:col-start-1 2xl:row-start-1 2xl:col-start-1">
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 text-white bg-gradient-to-b from-petrol-400 to-petrol-600 row-start-6 sm:row-start-3 sm:col-start-2 lg:row-start-1 lg:col-start-2 2xl:row-start-1 2xl:col-start-2">
                    <p className="text-center">Erfolgreich selbstständig seit 01.02.2016</p>
                </div>
                <div className="w-full h-64 text-white bg-center bg-no-repeat bg-cover bg-title-coaching2 bg-petrol-200 row-start-7 sm:row-start-4 sm:col-start-2 lg:row-start-3 lg:col-start-2 2xl:row-start-1 2xl:col-start-3">
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 text-white bg-gradient-to-b from-petrol-400 to-petrol-600 row-start-8 sm:row-start-4 sm:col-start-1 lg:row-start-2 lg:col-start-1 2xl:row-start-1 2xl:col-start-4">
                    <p className="text-center">Mitglied der Landesinnung der Fußpfleger, Kosmetiker und Masseure.</p>
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 bg-white row-start-5 sm:row-start-3 sm:col-start-1 lg:row-start-1 lg:col-start-3 2xl:row-start-2 2xl:col-start-1">
                    <p className="text-center">Trainerin für pflegende Kosmetik am Wifi Salzburg.</p>
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 bg-gray-200 row-start-9 sm:row-start-2 sm:col-start-2 lg:row-start-3 lg:col-start-1 2xl:row-start-2 2xl:col-start-2">
                    <p className="text-center">Kursleitung Dekorative Kosmetik am Wifi Salzburg.</p>
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 bg-white row-start-2 sm:row-start-1 sm:col-start-2 lg:row-start-2 lg:col-start-2 2xl:row-start-2 2xl:col-start-3">
                    <h1 className="text-5xl font-bold text-center xl:text-5xl">Meine Qualifikationen</h1>
                </div>
                <div className="flex h-64 bg-gray-200 row-start-4 sm:row-start-5 sm:col-start-1 lg:row-start-2 lg:col-start-3 2xl:row-start-2 2xl:col-start-4">
                    <div className="flex justify-center items-center p-4 sm:p-2 md:p-4">
                        <p className="text-center sm:text-base md:text-lg lg:text-base xl:text-lg">Trainerin und Prüferin am Wifi Salzburg seit 2015.</p>
                    </div>
                    <img className="h-64" src={LogoWifi} alt="Logo Wifi Salzburg" />
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 text-white bg-gradient-to-b from-petrol-400 to-petrol-600 row-start-3 sm:row-start-1 sm:col-start-1 lg:row-start-3 lg:col-start-3 2xl:row-start-3 2xl:col-start-1">
                    <p className="text-center">Kursleitung Fußpflege am Wifi Salzburg seit 2020.</p>
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 bg-center bg-cover bg-fusspflege bg-petrol-200 row-start-10 sm:row-start-6 sm:col-start-2 lg:row-start-4 lg:col-start-1 2xl:row-start-3 2xl:col-start-2">
                </div>
                <div className="flex h-64 text-white bg-gradient-to-b from-petrol-400 to-petrol-600 row-start-11 sm:row-start-6 sm:col-start-1 lg:row-start-4 lg:col-start-2 2xl:row-start-3 2xl:col-start-3">
                    <div className="flex justify-center items-center p-4">
                        <p className="text-center">Österreichische Make-Up Vizemeisterin 2016.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center p-4 w-full h-64 bg-white row-start-12 sm:row-start-5 sm:col-start-2 lg:row-start-4 lg:col-start-3 2xl:row-start-3 2xl:col-start-4">
                    <p className="text-center">20 Jahre Berufserfahrung im Bereich <span className="font-bold">Fußpflege, Kosmetik & Make-Up.</span></p>
                </div>
            </div>

            <div id="gesichtsbehandlungen-main" className="mx-auto w-5/6 lg:w-2/3 xl:w-3/5 2xl:w-1/2">
                <h1 className="text-5xl text-gray-700 mb-4">Coaching anfragen</h1>
                <p> </p>
            </div>
            <RequestForm type="coaching" />
        </DocumentMeta>
    </>);
}

export default Coaching;