import React from 'react'

const RenderSearchBar = (props) => {
    
  const { imgUrl, label, category } = props;
  return (
   <>
<div state={{ label: label, imgUrl: imgUrl, category: category }} className="cravingmap">
<img src={imgUrl} alt="not found"/>
<div className='cravmapping'>    
<h4>COLLECTION</h4>   
<h2>24 FREEZER FRINENDLY <br/>MEALS</h2>

</div>
</div> 

   </>
  )
}

export default RenderSearchBar