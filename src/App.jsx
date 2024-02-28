import { BrowserRouter } from "react-router-dom";
import { About, Feedbacks,Contact, Hero, Navbar, Works } from "./Components";
import Web3d from "./Components/web3d";
import Clients from "./Components/Clients";
import FooterBottom from "./Components/footer/FooterBottom";



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
        <Web3d/>
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
