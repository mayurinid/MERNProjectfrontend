

const Renderdisplayone = (props) => {
   

  const { imgUrl, label, category } = props;
  return (
  
    <>
    

    <div state={{ label: label, imgUrl: imgUrl, category: category }} className="datamapping">
      
      
                        <img src={imgUrl} alt="not found"/>
        <div className='mapping'>    
        <h4>RECEIPE</h4>   
        <h6>{label}</h6>
        <h2>{category}</h2>
           </div>
           </div> 
    
    
    </>
  )
}

export default Renderdisplayone