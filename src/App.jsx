import React from "react";

function App() {
  return <>
  <div className="bg-black h-screen">
     <div className="text-center p-2 m-2">
        <h1 className="text-4xl font-extrabold h-[90px] font-serif flex items-center justify-center rounded transition-all duration-500 ease-in-out shadow-lg shadow-yellow-400 text-white bg-orange-500 animate-pulse">
          THE PROTECTOR KIT
        </h1>
      </div>  

      <div className="bg-orange-500 m-3 mt-35 p-4 rounded shadow-yellow-400 shadow-lg justify-evenly content-around items-center">
        <div className="flex items-center w-[120px] gap-3 ">
          <img src="/img/CleanGuard.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-sky-300 shadow-sky-800 animate-bounce" />
          <img src="/img/RideGuard.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-yellow-300 shadow-amber-700 animate-pulse " />
          <img src="/img/MonsoonGuard.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-sky-300 shadow-sky-700 animate-bounce" />
          <img src="/img/ToolShield.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-red-300 shadow-red-700 animate-pulse" />
          <img src="/img/CommuteShield.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-black shadow-black animate-spin " />
          <img src="/img/GardenShield.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-green-300 shadow-green-800 animate-spin" />
          <img src="/img/TechGuard.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-300 shadow-blue-700 animate-pulse" />
          <img src="/img/KitchenArmor.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-orange-300 shadow-orange-700 animate-bounce" />
          <img src="/img/SummerShield.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-yellow-300 shadow-yellow-700 animate-pulse" />
          <img src="/img/WinterGuard.webp" alt="img" className="rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-sky-300 shadow-sky-700 animate-bounce " />

        </div>
      
      </div>

  </div>
  
  </>;
}

export default App;
