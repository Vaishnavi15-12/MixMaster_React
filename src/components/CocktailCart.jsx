import React from 'react'
import Wrapper from '../assets/wrappers/CocktailCard'
import { Link, useOutletContext } from 'react-router-dom'

const CocktailCart = ({id,name,image,info,glass}) => {
  // const data = useOutletContext();
  // console.log(data);
  return (
    <Wrapper>
        <div className="img-container">
            <img src={image} alt={name} className='img'></img>
        </div>
        <div className="footer">
            <h4>{name}</h4>
            <h5>{glass}</h5>
            <p>{info}</p>
            <Link to={`/cocktail/${id}`} className='btn'>Details</Link>
        </div>
    </Wrapper>
  )
}

export default CocktailCart
