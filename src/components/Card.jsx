import React, { useContext } from 'react';
import { json, useNavigate } from 'react-router-dom';
import PlanetContext from '../data/PlanetData';



function Card({ title, description, imageUrl ,planetData}) {

  const {setknowMorePlanet,knowMorePlanet}=useContext(PlanetContext)

  const navigate = useNavigate();
  

  const handleClick = () => {
    // localStorage.setItem("planetData",JSON.stringify(planetData))
    navigate('/resident-info' )
    setknowMorePlanet(planetData)
    // console.log("this is from card", knowMorePlanet.residents)
   
  };

  return (
    <div className="card rounded-md mt-5 min-h-[33rem] cursor-pointer border border-black-800 animate__animated animate__fadeInUp transition-all duration-300 ease-in-out " style={{ width: '18rem' }} onClick={handleClick}>
    <img
      src={imageUrl}
      className="card-img-top object-cover h-50 w-full"
      alt="Card Image"
    />
    <div className="card-body flex flex-col gap-4 p-2">
      <h5 className="card-title text-xl font-semibold">{title}</h5>
      <div className="card-text">
        
        {description.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-primary absolute bottom-3 buttons font-bold outline-none decoration-black transition-all duration-300 ease-in-out hover:p-3"
        onClick={handleClick}
      >
        Know More
      </button>
    </div>
  </div>
  
  );
}

export default Card;
