import {useState, useEffect} from "react";
import CardImage from "./CardImage";

function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards([
            {
                id: 1,
                backgroundImage:"bg-title-fusspflege",
                headline: "Fußpflege",
                paragraph: "Zwanzig Jahre Erfahrung und aktuelles Fachwissen geben mir die Möglichkeit, auf die Problemzonen Ihrer Füße einzugehen.",
                link: "fusspflege"
            },
            {
                id: 2,
                backgroundImage:"bg-title-piercing",
                headline:"Piercing",
                paragraph:"Körperschmuck auf Ihren persönlichen Wunsch abgestimmt – ich lege größten Wert auf Hygiene und Qualität.",
                link: "piercing"
            },
            {
                id: 3,
                backgroundImage:"bg-card-kosmetik",
                headline:"Kosmetik",
                paragraph:"Erleben Sie puren Luxus mit einer tiefenwirksamen Pflege – perfekt auf Ihren Hauttyp abgestimmt. ",
                link: "gesichtsbehandlungen"
            },
            {
                id: 4,
                backgroundImage:"bg-title-manikuere",
                headline:"Maniküre",
                paragraph:"Schöne, gepflegte Hände sind eine Visitenkarte mit einer nicht zu unterschätzenden Wirkung.",
                link: "manikuere"
            },
            {
                id: 5,
                backgroundImage:"bg-title-haarentfernung",
                headline:"Körperbehandlungen",
                paragraph:"Der Körperwickel wirkt entschlackend, entgiften und sorgt für eine straffere Haut.",
                link: "koerperbehandlungen"
            },
            {
                id: 6,
                backgroundImage:"bg-title-strahlende-augen",
                headline:"Strahlende Augen",
                paragraph:"Intensivieren Sie Ihren Blick durch professionelles Färben Ihrer Wimpern und Augenbrauen.",
                link: "strahlende-augen"
            }
        ])
    }, []);

    return (<>
        <div className="bg-gray-100 pt-12 pb-4 mx-auto">
            <div className="container mx-auto flex flex-wrap justify-center">
                {
                    cards.map(card => {
                        return <CardImage key={card.id} backgroundImage={card.backgroundImage} headline={card.headline} paragraph={card.paragraph} link={card.link} />
                    })
                }
            </div>
        </div>
    </>);
}

export default Cards;