import React, { useEffect, useState} from 'react'
import axios from 'axios';
import Renderdisplayone from './Renderdisplayone';
import NavBar from '../NavBar';
import { AiOutlineClose } from 'react-icons/ai';
import NavBar1 from './NavBar1';

const Cornrecepie = () => {
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
  return (
   <>
    <div className='renderone'>
        <NavBar1/>
        <h6>PART OF SEASONAL COOKING: SUMMER</h6>
        <h1>24 BEST CORN RECIPES TO MAKE THIS SUMMER</h1>
        <p>Nothing says summer like fresh sweet corn. Whether you like it served on the cob or mixed into a salad, we've got the recipe for you.</p>
      {data && data.map((recipe) => (
        <Renderdisplayone
          key={recipe.food.foodId}
          label={recipe.food.label}
          category={recipe.food.category}
          imgUrl={recipe.food.image}
        />
          ))}
          </div>
          <div className='advertise'>
      
        <img src="https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg" alt="Your Image" />
       <button className='closebtn'><AiOutlineClose/></button>
          <p className='advert'>ADVERTISEMENT</p>
        
      
      </div>
          
         
   
   </>
  )
}

export default Cornrecepie