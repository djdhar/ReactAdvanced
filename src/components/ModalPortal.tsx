import { useState } from "react";
import Modal from "./Modal";

export function ModalPortal() 
    {
        const [isModalOpen, setIsModalOpen] = useState(false);
      
        const toggleModal = () => {
          setIsModalOpen(!isModalOpen);
        };
      
        return (
          <div>
            <h1>React Portal Example (Without Inline Styles)</h1>
            <button onClick={toggleModal}>Open Modal</button>
            
            {/* Render Modal using React Portal */}
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <h2>My Modal Content</h2>
              <p>This is a modal rendered using React Portal, and styled with external CSS!</p>
            </Modal>
          </div>
        );
      };
