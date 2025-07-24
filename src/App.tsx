import { useState } from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import FormsWrapper from "./Components/FormsWrapper";
import Modal from "./Components/UI_Components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
     
        <NavBar onGetQuoteClick={()=> setIsModalOpen(true) } />
      

      <HeroSection onGetQuoteClick={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormsWrapper />
      </Modal>
    </div>
  );
};

export default App;
