import React from "react";
import { useGlobalContext } from './context';

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    return (
      <main>
        <button onClick={openSidebar} className='sidebar-toggle'>
        <i className="bi bi-list"></i>
        </button>
        <button onClick={openModal} className='btn'>
          show modal
        </button>
      </main>
    );
  };

export default Home