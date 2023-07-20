import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineAmazon, AiOutlineClose } from 'react-icons/ai';
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [close,setClose]=useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleCloseClick = () => {
    setClose(false);
  };

  if (!close) {
        return null;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/register", {
        email,
        password,
      });
      
      const data = response.data;
     
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className='signincontainer'>
      <button className='btn1' onClick={handleCloseClick}>
      <AiOutlineClose/>
      </button>
      <h1>CREATE AN ACCOUNT</h1>
      {/* <h3>Save recipes across devices, write reviews, and share your own photos</h3> */}
      <div  className='email'style={{display:"flex"}}>
      <div>
      <label>EMAIL</label>
      </div>
      <div>
      <input type='text' name="email" value={email} placeholder='your@gmail.com'  onChange={(e) => setEmail(e.target.value)}/>
      </div>
      </div>
      <div className='password'style={{display:"flex"}}>
        <div>
      <label>PASSWORD</label>
      </div>
      <div>
      <input type='text'name="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
    </div>
    </div>
    <button className='btn' onClick={handleSubmit}>CREATE ACCOUNT</button>
    <h2>Fortgot Password?</h2>
    <h3>OR CONTINUE WITH</h3>
    <div className='icons'style={{display:'flex'}}>
            <div><BsGoogle/></div>
      <div><AiOutlineAmazon/></div>
    </div>
    <h4>
    Already a member?{' '}
    <Link to='/Signin'>
    <span style={{ color: 'blue' }}>Log In</span>
  </Link>
</h4>
    </div>
    </>
  )
}

export default Signup