// import React, { useRef, useState,useEffect } from 'react';
// import './NavBar.css';
// import { Link, NavLink } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { BsBookmark } from 'react-icons/bs';
// import { TiUserOutline } from 'react-icons/ti';
// import { links } from '../Receipes/Receipe';
// import Signin from './Signin';

// const NavBar1 = () => {
//   const [popup, setPopup] = useState("close");

//   const open = () => {
//     setPopup(popup === "open" ? "close" : "open");
//   }

//   const menuListRefs = useRef([]);
//   const menuSubListRefs = useRef([]);
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleMenuClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleOutsideClick = (event) => {
//     if (
//       !menuListRefs.current.some((ref) => ref && ref.contains(event.target)) &&
//       !menuSubListRefs.current.some((ref) => ref && ref.contains(event.target))
//     ) {
//       setOpenIndex(null);
//     }
//   };

//   // It's better to use useEffect to add event listeners and remove them when the component unmounts.
//   useEffect(() => {
//     window.addEventListener('mouseover', handleOutsideClick);
//     return () => {
//       window.removeEventListener('mouseover', handleOutsideClick);
//     };
//   }, []);

//   return (
//     <>
//       <nav className="main-nav">
//         <span className="food">
//           Food<span className="dot">.</span>
//         </span>
        // {links.map((link, index) => (
        //   <div key={link.name}>
        //     <ul className="nav-list">
        //       <li className="nav-list-item">
        //         <span className="nav-list-item__text">
        //           <span
        //             ref={(el) => (menuListRefs.current[index] = el)}
        //             onMouseEnter={() => handleMenuClick(index)}
        //           >
        //             {link.name}
        //           </span>
        //         </span>
        //         {openIndex === index && link.submenu && (
        //           <ul className="dropdown" ref={(el) => (menuSubListRefs.current[index] = el)}>
        //             {link.submenu.map((mysublink) => ( // Corrected 'sublinks' to 'submenu'
        //               <li className="dropdown__item" key={mysublink.title}>
        //                 <div>{mysublink.title}</div>
        //               </li>
        //             ))}
        //           </ul>
        //         )}
        //       </li>
        //     </ul>
//           </div>
//         ))}
//         <div className="rightbutns">
//           <Link to="/Searchbar">
//             <div className="search">
//               <AiOutlineSearch />
//             </div>
//           </Link>
//           <div className="save">
//             <BsBookmark />
//           </div>
//           <div className="login">
//             <button onClick={open}>
//               <TiUserOutline />
//                <Signin somepopup={popup} />
//             </button>
           
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBar1;
