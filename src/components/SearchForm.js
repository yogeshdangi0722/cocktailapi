import React from 'react';
import { useGlobalContext } from '../Context';


const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext();
  

  return (
    <div className='searchboxContainer'>
          <p>Search your favourite cocktail</p>
          <input type={'text'} className='inputBox' onChange={(e)=>{setSearchTerm(e.target.value)}}  />
    </div>
  )
}

export default SearchForm;