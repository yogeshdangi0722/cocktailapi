import React from 'react';
import {About,Error,Home,SingleCocktail} from './pages/Index';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navigation from './pages/Navigation';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigation />}>
            <Route index  element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
            <Route path='/cocktail/:id' element ={<SingleCocktail />} />
            </Route>
        </Routes>
      </BrowserRouter>
    
    
    
    
  )
}

export default App