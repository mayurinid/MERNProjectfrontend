import React, { useEffect, useRef, useState } from 'react';
import './Compo/NavBar.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { TiUserOutline } from 'react-icons/ti';
import { links } from './Receipes/Receipe';
import axios from 'axios'
import Searchrender from './Compo/Searchrender';

const SearchBar = () => {
  const [visibleResults, setVisibleResults] = useState();
  const [showLoadMore, setShowLoadMore] = useState(true);
  const APP_ID = "bb045867";
  const APP_KEY = "19f72d9ecfb60620391da1469575dcda";
  const [data, setData] = useState([]);
  


  const getRecipes = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(response.data.hints);
 
      setData(response.data.hints);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);
  const itemsearchRef=useRef()
  const menuListRefs = useRef([]);
  const menuSubListRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [searchText, setSearchText] = useState('');
const handleClear = () => {
  setSearchText('');
  itemsearchRef.current.value = ''; 
};

  const handleMenuClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const handleOutsideClick = (event) => {
    if (
      !menuListRefs.current.some((ref) => ref && ref.contains(event.target)) &&
      !menuSubListRefs.current.some((ref) => ref && ref.contains(event.target))
    ) {
      setOpenIndex(null);
    }
  };

  window.addEventListener('mouseover', handleOutsideClick);
  
  const handleLoadMore = () => {
    setVisibleResults(prevVisibleResults => prevVisibleResults + 4); // Increase the number of visible results
  };
  
  return (
    <>
   <div className='searchcontainer'>
   <nav className="main-nav">
        <div className="food">
          Food<span className="dot">.</span>
        </div>
        <div style={{display: "flex" }}>
        {links.map((link, index) => (
          <div key={link.name}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <span className="nav-list-item__text">
                  <span
                    ref={(el) => (menuListRefs.current[index] = el)}
                    onMouseEnter={() => handleMenuClick(index)}
                  >
                    {link.name}
                  </span>
                </span>
                {openIndex === index && link.submenu && (
                  <ul className="dropdown" ref={(el) => (menuSubListRefs.current[index] = el)}>
                    {link.sublinks.map((mysublink) => (
                      <li className="dropdown__item" key={mysublink.title}>
                        <div>{mysublink.title}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        ))}
        </div>
        <div className="rightbutns" style={{display: "flex" }} >
          <Link to="/Searchbar">
            <div className="search">
              <AiOutlineSearch />
            </div>
          </Link>
          <div className="save">
            <BsBookmark />
          </div>
          <div className="login">
            <TiUserOutline />
          </div>
          </div>
      <div className='searchitem' style={{display: "flex" }}>
        <input type='text' ref={itemsearchRef} className='texttyp'/>
        <hr/>
        <div className='make'>I WANT TO MAKE</div>
        <div className="search2">
              <AiOutlineSearch />
            </div>
            <div onClick={handleClear}className='clearbtn'>
              clear
             
            </div>
            <div onClick={handleClear} className='clearclosebtn'>
              <AiOutlineClose/>
            </div>
            
      </div>
      
     
      </nav>
      <div className='results'>1200 RESULTS</div>
      </div>
         <div className='searchcontainer2' >
         <div className='searchcontainer2'>
        {data.slice(0, visibleResults).map((recipe) => (
          <Searchrender
            key={recipe.food.foodId}
            label={recipe.food.label}
            imgUrl={recipe.food.image}
          />
        ))}
      </div>
      {showLoadMore && visibleResults < data.length && (
        <div className='load-more-container'>
          <button className='load-more-button' onClick={handleLoadMore}>Load More</button>
        </div>
      )}
      </div>
    
    </>
  )
}

export default SearchBar