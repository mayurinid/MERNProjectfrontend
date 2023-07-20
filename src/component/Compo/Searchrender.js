
import React from 'react'

const Searchrender = (props) => {
    const { imgUrl, label, category } = props; 
  return (
    <>
    <div state={{ label: label, imgUrl: imgUrl, category: category }} className='searchcontainer1'>
        
           <img src={imgUrl} alt="not found"/>
           <div className='cravmapping'>
           <h6>{label}</h6>
           <h2>{category}</h2>
           </div>
        </div>
  
    </>
  )
}

export default Searchrender