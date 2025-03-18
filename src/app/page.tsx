import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Carrousel from "./components/carrousel";
import Marcas from "./components/marcas";


export default function Home() {
  return (
    <div className="flex flex-col" >
      <NavBar />
      <Carrousel/>
      <AboutUs/>
      <Marcas/>
    </div>
  );
}
