import {useEffect} from "react";
import DocumentMeta from 'react-document-meta';

const meta = {
    title: "Romy Winkler | Mobile Fußpflege, Kosmetik & Coaching",
    description: "I am a description, and I can create multiple tags",
    canonical: "",
    meta: {
        charset: "utf-8",
        name: {
            keywords: "react,meta,document,html,tags"
        }
    }
};

function Impressum() {
    useEffect(() => {
        document.title = "Impressum | Romy Winkler";
    }, []);

    return (
        <DocumentMeta {...meta}>
            <h1>Impressum</h1>
        </DocumentMeta>
    );
}

export default Impressum;
