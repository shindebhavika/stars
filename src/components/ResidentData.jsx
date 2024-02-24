import { useContext } from "react";
import ResidentCard from "./ResidentCard";
import PlanetContext from "../data/PlanetData";
import { RevolvingDot } from "react-loader-spinner";
function ResidentData() {
  const {knowMorePlanet,loading}=useContext(PlanetContext)
  // const storedData = localStorage.getItem("planetData");


const residentUrl=knowMorePlanet.residents
// console.log(residentUrl)
  return (
    <div>
      
        <ul>
          {residentUrl.map((profileUrl, index) => (
            <ResidentCard key={index} profileUrl={profileUrl} />
          ))}
        </ul>
  
    </div>
    
  );
}

export default ResidentData;
