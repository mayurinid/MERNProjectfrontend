import React, { useState } from 'react'
import Home from '../Home';
import Signin from './Signin';

const FinalLogin = () => {
    const [showSignUp, setShowSignUp] = useState(false); // State to control the visibility of the SignUp component

  const handleOpenSignUp = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
   <>
   <Home/>
   {showSignUp && (
        <div className="signup-modal">
          <Signin onClose={handleOpenSignUp} />
        </div>
      )}
   </>
  )
}

export default FinalLogin