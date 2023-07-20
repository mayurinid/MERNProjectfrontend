import React, { useRef, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { TiUserOutline } from 'react-icons/ti';
import { links } from '../Receipes/Receipe';
import Signin from './Signin';

const NavBar1 = () => {
  const [popup, setPopup] = useState("close");
  const [openIndex, setOpenIndex] = useState(null); // State to track the open menu index

  const open = () => {
    switch(popup){
      case "close":
        setPopup("open");
      return;
      case "open":
        setPopup("close");
      return;
      default:  setPopup("close");
      return;

    }
  }

  const handleMenuClick = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <nav className="main-nav">
        <span className="food">
          Food<span className="dot">.</span>
        </span>
        {links.map((link, index) => (
          <div key={link.name}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <span className="nav-list-item__text">
                  <span onClick={() => handleMenuClick(index)}>
                    {link.name}
                  </span>
                </span>
                {openIndex === index && (
                  <div className=''>
                    <ul className="dropdown">
                      {
                        link.sublinks.map((sublink) => (
                          <li className="dropdown__item" key={sublink.title} onClick={() => setOpenIndex(null)}>
                            {sublink.title}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        ))}
        <div className="rightbutns">
          <Link to="/Searchbar">
            <div className="search">
              <AiOutlineSearch />
            </div>
          </Link>
          <div className="save">
            <BsBookmark />
          </div>
          <div className="login">
          <Link to='/'>
              <button onClick={()=>open()}>

              <TiUserOutline />
              
              <Signin somepopup={popup} />
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar1;
