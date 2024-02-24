import { useContext } from "react";
import ResidentCard from "./ResidentCard";
import PlanetContext from "../data/PlanetData";
import { ThreeDots } from "react-loader-spinner";

function ResidentData() {
  const { knowMorePlanet, loading } = useContext(PlanetContext);

  if (!knowMorePlanet) {
    // Handle the case where knowMorePlanet is not available yet, you might want to display a loading spinner or some message.
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <ThreeDots color="#002661" />
      </div>
    );
  }
  const planetEntries = Object.entries(knowMorePlanet);
  const limitedEntries = planetEntries.slice(0, 9);
  const { name, residents,  } = knowMorePlanet;
  console.log(knowMorePlanet);
  return (
    <div>
      <div className="bg-white card-extra h-[500px] text-black rounded-xl overflow-hidden shadow-md ml-14 mt-6 text-center ">
        <div className="card-body flex flex-col gap-4 p-2 ">
          <h5 className="card-title text-xl font-semibold">{name}</h5>
          <div className="card-text">
            {limitedEntries.map(([key, value], index) => (
              <p key={index} className="mb-3">
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        </div>
        
      </div>
      <h1 className="bold text-black mt-14 ml-20">The Residents data of {name}  planet below ↓</h1>
      <ul>
     
        {residents.map((profileUrl, index) => (
          <ResidentCard key={index} profileUrl={profileUrl} />
        ))}
      </ul>
    </div>
  );
}

export default ResidentData;
