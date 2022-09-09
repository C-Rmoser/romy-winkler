import Bio from "./Bio.js";
import Welcome from "./Welcome.js";
import Cards from "./Cards";

function Home() {
    return (<>
        <Welcome />
        <Bio />
        <Cards />
    </>);
}

export default Home;
