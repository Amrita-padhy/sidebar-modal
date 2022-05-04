import React from "react";
import {links,social} from "./data"
import { useGlobalContext } from './context';

const SideBar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  
    return (
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src="#" className='logo' alt='coding addict' />
          <button className='close-btn' onClick={closeSidebar}>
          <i className="bi bi-x-square-fill"></i>
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='social-icons'>
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  };

export default SideBar