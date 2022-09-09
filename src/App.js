import {Routes, Route} from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Navbar from "./components/Shared/Navbar.js";
import Footer from "./components/Shared/Footer";
import Home from "./components/Home/Home.js"
import Fusspflege from "./components/Fusspflege/Fusspflege.js";
import Anfahrt from "./components/Anfahrt/Anfahrt.js";
import Piercing from "./components/Piercing/Piercing.js"
import StrahlendeAugen from "./components/StrahlendeAugen/StrahlendeAugen.js";
import Manikuere from "./components/Manikuere/Manikuere.js";
import Koerperbehandlungen from "./components/Koerperbehandlungen/Koerperbehandlungen.js";
import Gesichtsbehandlungen from "./components/Gesichtsbehandlungen/Gesichtsbehandlungen.js";
import Coaching from "./components/Coaching/Coaching";
import Impressum from "./components/Impressum/Impressum";
import Termin from "./components/Termin/Termin";
import Gutschein from "./components/Gutschein/Gutschein";

function App() {
  return (<>
      <main className="bg-gray-100 flex flex-col justify-between min-h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/fusspflege" element={<Fusspflege />} />
            <Route path="/piercing" element={<Piercing />} />
            <Route path="/anfahrt" element={<Anfahrt />} />
            <Route path="/strahlende-augen" element={<StrahlendeAugen />} />
            <Route path="/gesichtsbehandlungen" element={<Gesichtsbehandlungen />} />
            <Route path="/manikuere" element={<Manikuere />} />
            <Route path="/koerperbehandlungen" element={<Koerperbehandlungen />} />
            <Route path="/termin" element={<Termin />} />
            <Route path="/gutschein" element={<Gutschein />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        <Footer />
      </main>
      <CookieConsent buttonText="Einverstanden" disableStyles={true} containerClasses="lg:flex lg:items-center lg:justify-around w-full bg-white p-4 box-shadow border-t border-gray-900 fixed bottom-0 text-black" buttonClasses="self-center border border-gray-800 text-white bg-petrol-400 w-28 h-10 rounded hover:bg-petrol-600 mt-2">
        <p className="">Um die Website optimal gestalten und verbessern zu können, verwendet diese Website Cookies. </p>
      </CookieConsent>
    </>);
}

export default App;