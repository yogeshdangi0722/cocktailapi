import React from 'react';
import {useGlobalContext} from '../Context';
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {
    const {cocktails,loading} = useGlobalContext();
    
    
    console.log(cocktails);
    if(loading){
      return <Loading />;
    }

    if(cocktails.length<1){
      return <h2 className='section-title'>
      No Drink found
      </h2>
    }
    

  return (
    <>
    <h2 className='section-title'>
    Cocktails
    </h2>
    <section className='section'>
    <div className='cocktails-center'>
    {cocktails.map((item)=>{return <Cocktail key={item.id}{...item} />})}
    </div>
    </section>
    </>
  )
}

export default CocktailList;