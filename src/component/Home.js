// import NavBar from './NavBar';
// import Cornrecepie from './Compo/Cornrecepie';
import { NavLink } from 'react-router-dom';
import NavBar1 from './Compo/NavBar1';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import RenderSearchBar from './Compo/RenderSearchBar';
import Searchrender from './Compo/Searchrender';
import Rendertwo from './Compo/Rendertwo';
import { AiOutlineSearch } from 'react-icons/ai';

const Home = () => {


  const [visibleResults, setVisibleResults] = useState(4);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [visibleResults1, setVisibleResults1] = useState(5);
const search1=useRef()

  const APP_ID = "bb045867";
  const APP_KEY = "19f72d9ecfb60620391da1469575dcda";
  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState("");

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
  useEffect(() => {
    const filtered = data.filter((element) => {
      return element.food.foodId === "food_bwrgmmqau78xrdazxx79obeezumz";
    });
    setFilterdata(filtered);
    console.log(data.food)
  }, [data]);
  
  const handleLoadMore = () => {
    setVisibleResults(prevVisibleResults => prevVisibleResults + 4); // Increase the number of visible results
  };
  
  return (
    <>
          <NavBar1/>
      <div className="image-container">
        <img src="https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg" alt="Your Image" />
        <div className="text-overlay">
          <p>56 GRILLED CHICKEN RECIPES</p>
          <NavLink to='Cornrecepie'><button className='btn'>SEE THEM ALL</button></NavLink>
        </div>
      </div>
      
      <h6 className='crave'>WHAT WE'RE CRAVING</h6>
      <NavLink to='Cornrecepie'>
      <div className='craving'>
      <div className='rendersearch'>
      
     
       
      {filterdata && filterdata.map((recipe) => (
        <RenderSearchBar
          key={recipe.food.foodId}
          label={recipe.food.label}
          category={recipe.food.category}
          imgUrl={recipe.food.image}
        />
          ))}
          </div>
          <div className='rendersearch'>
      
     
    {filterdata && filterdata.map((recipe) => (
      <RenderSearchBar
        key={recipe.food.foodId}
        label={recipe.food.label}
        category={recipe.food.category}
        imgUrl={recipe.food.image}
      />
        ))}
        </div>
        <div className='rendersearch'>
      
      
     
    {filterdata && filterdata.map((recipe) => (
      <RenderSearchBar
        key={recipe.food.foodId}
        label={recipe.food.label}
        category={recipe.food.category}
        imgUrl={recipe.food.image}
      />
        ))}
        </div>
        </div>
        </NavLink>
        <div className='trend'>
          <h2>EXPLORE MORE</h2>
        <div className='searchcontainer4' >
         <div className='searchcontainer4'>
         {data.slice(0, visibleResults1).map((recipe) => (
          <Rendertwo
            key={recipe.food.foodId}
            label={recipe.food.label}
            imgUrl={recipe.food.image}
          />
        ))}
      </div>
    
      </div>
        </div>
        <div className='trend'>
          <h2>TRENDING NOW</h2>
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
          <button className='load-more' onClick={handleLoadMore}>Load More</button>
        </div>
      )}
      </div>
        </div>
       <div className='searchf'>
<h2>FIND MORE RECIPES</h2>
<div>
<input type='text' placeholder='i am craving....' ref={search1}/>
</div>
<div className="search1">
              <AiOutlineSearch />
            </div>
            <div>
              <button className='btnsearch'>Search</button>
              </div>
       </div>

         </>
  );
};

export default Home;

