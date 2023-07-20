
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './component/SearchBar';
import Saves from './component/Saves';
import Home from './component/Home';
import Cornrecepie from './component/Compo/Cornrecepie';
import Signin from './component/Compo/Signin';
import Signup from './component/Compo/Signup';
import FinalLogin from './component/Compo/FinalLogin';


function App() {
  return (
    <>
 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Searchbar' element={<SearchBar/>}/>
      <Route path='/Saves' element={<Saves/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Cornrecepie' element={<Cornrecepie/>}/>
      <Route path='/FinalLogin' element={<FinalLogin/>}/>
     </Routes>


    </>
  );
}

export default App;
