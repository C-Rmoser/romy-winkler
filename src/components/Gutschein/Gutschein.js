import DocumentMeta from 'react-document-meta';
import RequestForm from "../Shared/RequestForm";

const meta = {
    title: "Gutschein für mobile Fußpflege, Piercing & Kosmetik | Romy Winkler",
    description: "Verschenken Sie einen Gutschein für eines meiner zahlreichen Angebote.",
    meta: {
        charset: "utf-8",
    }
};

function Gutschein() {
    return (
        <DocumentMeta {...meta}>
            <div id="gesichtsbehandlungen-main" className="w-5/6 py-8 lg:w-2/3 xl:w-3/5 2xl:w-1/2 mx-auto">
                <h1 className="text-5xl text-gray-700 mb-4">Gutschein bestellen</h1>
                <p> Verschenken Sie einen Gutschein für eine Behandlung aus meinem Angebot oder einen Wertgutschein mit
                    dem Betrag Ihrer Wahl.</p>
                <br/>
                <p className="font-bold">So einfach geht's:</p>
                <p>Gutschein online oder telefonisch bestellen. Sie erhalten den Gutschein mit beiliegendem Zahlschein
                    versandkostenfrei auf dem Postweg.</p>
            </div>
            <RequestForm type="gutschein"/>
        </DocumentMeta>
    );
}

export default Gutschein;