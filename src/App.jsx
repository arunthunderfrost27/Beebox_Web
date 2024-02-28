import { BrowserRouter } from "react-router-dom";
import { About, Feedbacks,Contact, Hero, Navbar, Works } from "./components";
import Web3d from "./components/web3d";
import Clients from "./components/Clients.jsx";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-loop-mute bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Clients/>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
        <FooterBottom/>
      </div>
    </BrowserRouter>
  );
}

export default App;
