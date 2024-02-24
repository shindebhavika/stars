import React from "react";
import slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Profile() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const data = [
    {
      name: "bhaviks ashinsw",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      age: "23",
    },
    {
      name: "jaggu ashinsw",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      age: "23",
    },
    {
      name: "leena ashinsw",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      age: "23",
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      
       
          <div key={index} className="bg-white h-[450px] text-black rounded-xl overflow-hidden shadow-md">

            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full" />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.age}</p>
            </div>
          </div>
       
       
      </div>
    </div>
  );
}

export default Profile;
