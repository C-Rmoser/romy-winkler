import RequestForm from "../Shared/RequestForm";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Termin anfragen | Piercing, Coaching, Fußpflege, Kosmetik",
    description: "I am a description, and I can create multiple tags",
    meta: {
        charset: "utf-8",
    }
};

function Termin() {
    return (<>
        <DocumentMeta {...meta}>
                <div id="termin-main" className="w-5/6 mx-auto py-8 lg:w-2/3 xl:w-3/5 2xl:w-1/2 min-h-full">
                    <h1 className="justify-center text-5xl text-gray-700 mb-4">Termin anfragen</h1>
                    <p>Sie können ganz einfach mithilfe des nachstehen Online-Formulares oder auch gerne telefonisch unter der Nummer <b>0664/45 87 391</b> unverbindlich einen Termin anfragen.</p>
                </div>
                <RequestForm type="full" />
        </DocumentMeta>
    </>);
}

export default Termin;
