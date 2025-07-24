// pages/QuoteFormPage.tsx or inside your HeroSection or wherever you want
import React, { useState } from "react";
import Modal from "./Modal";
import FormsWrapper from "../FormsWrapper";

const QuoteFormPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
      >
        Get a Quote
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <FormsWrapper />
      </Modal>
    </div>
  );
};

export default QuoteFormPage;
