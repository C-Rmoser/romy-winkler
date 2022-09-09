import {useEffect, useState} from "react";
import TextInput from "./TextInput";
import Label from "./Label";

function RequestForm(props) {

    const [isCoaching, setIsCoaching] = useState(false);
    const [isFull, setIsFull] = useState(false);
    const [isGutschein, setIsGutschein] = useState(false);
    const [formName, setFormName] = useState("full");
    const [couponIsWert, setCouponIsWert] = useState(true);
    const [couponIsBehandlung, setCouponIsBehandlung] = useState(false);

    useEffect(() => {
        if(props.type === "coaching") {
            setIsCoaching(true);
            setIsFull(false);
            setIsGutschein(false);
            setFormName("coaching");
        } else if (props.type === "gutschein") {
            setIsGutschein(true);
            setIsCoaching(false);
            setIsFull(false);
            setFormName("gutschein")
        } else {
            setIsFull(true);
            setIsCoaching(false);
            setIsGutschein(false);
        }
    },[props.type]);

    function handleCouponChange(e) {
        if(e.target.value === "Wert") {
            setCouponIsWert(true);
            setCouponIsBehandlung(false);
        } else {
            setCouponIsWert(false);
            setCouponIsBehandlung(true);
        }
    }

    return (<>
        <div className="mx-auto flex justify-center">
            <form name={formName} method="post" className="flex flex-col w-5/6 lg:w-2/3 xl:w-3/5 2xl:w-1/2">
                <input type="hidden" name="form-name" value={formName} />
                <p className="hidden">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>
                {(isFull && !isCoaching) &&
                    <div className="flex flex-col">
                            <Label htmlFor="Kategorie">Kategorie:</Label>
                            <select name="Kategorie" className="sm:h-12 lg:h-14 p-2 mb-2 outline-none rounded-lg border-0 focus:border border-2 focus:border-petrol-400">
                                <option value="Coaching">Coaching</option>
                                <option value="Fusspflege">Fußpflege</option>
                                <option value="Piercing">Piercing</option>
                                <option value="Kosmetik">Kosmetik</option>
                            </select>
                    </div>
                }
                <div className="sm:flex gap-2">
                    {isGutschein &&
                        <div className="flex flex-col">
                            <Label htmlFor="Gutschein-Kategorie">Art des Gutscheins:</Label>
                            <select name="Gutschein-Kategorie" onChange={handleCouponChange} className="sm:h-12 lg:h-14 p-2 mb-2 outline-none rounded-lg border-0 focus:border border-2 focus:border-petrol-400">
                                <option value="Wert">Wert</option>
                                <option value="Behandlung">Behandlung</option>
                            </select>
                        </div>
                    }

                    {(isGutschein && couponIsWert)  && <>
                    <div className="flex flex-col">
                        <Label htmlFor="Wert">Gutschein im Wert von:</Label>
                        <select name="Wert" className="sm:h-12 lg:h-14 p-2 mb-2 outline-none rounded-lg border-0 focus:border border-2 focus:border-petrol-400">
                            <option value="10">10 Euro</option>
                            <option value="25">25 Euro</option>
                            <option value="50">50 Euro</option>
                            <option value="100">100 Euro</option>
                            <option value="150">150 Euro</option>
                            <option value="200">200 Euro</option>
                        </select>
                    </div>
                    </>}
                </div>
                    {(isGutschein && couponIsBehandlung) && <>
                    <div className="flex flex-col">
                            <label htmlFor="Behandlung">Behandlung:</label>
                            <TextInput name="Behandlung" />
                    </div>
                    </>}
                <div className="sm:flex gap-2">
                    <div className="flex flex-col sm:w-1/2">
                        <Label htmlFor="Vorname">Vorname:</Label>
                        <TextInput name="Vorname" />
                    </div>
                    <div className="flex flex-col sm:w-1/2">
                        <Label htmlFor="Nachname">Nachname:</Label>
                        <TextInput name="Nachname" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <Label htmlFor="EMail">E-Mail:</Label>
                    <TextInput name="EMail" />
                </div>
                <div className="flex flex-col">
                    <Label htmlFor="Adresse">Adresse:</Label>
                    <TextInput name="Adresse" />
                </div>
                <div className="flex flex-col">
                        <Label htmlFor="Anfrage">Anfrage:</Label>
                        <textarea name="Anfrage" className="h-48 p-2 mb-2 outline-none rounded-lg border-0 focus:border border-2 focus:border-petrol-400" />
                </div>
                <button className="w-64 sm:h-12 lg:h-14 ml-1 border border-gray-800 text-white bg-petrol-400 w-28 h-10 rounded hover:bg-petrol-600 mb-4 mt-2" type="submit">Abschicken</button>
            </form>
        </div>
    </>);
}

export default RequestForm;