import React from "react";
import heroImg from "../../assets/resorces/hero.png";

const Banner = () => {

  

    const statesData = [
  {
    id: 1,
    title: "Total Downloads",
    value: "29.6M",
    description: "21% More Then Last Month"
  },
  {
    id: 2,
    title: "Total Reviews",
    value: "906K",
    description: "46% More Than Last Month"
  },
  {
    id: 3,
    title: "Active Apps",
    value: "132+",
    description: "31 More Will Launch"
  }
];
  return (
    <>
    <div className="text-center max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        We Build <br/> <span className="text-primary">Productive</span> Apps
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600  md:text-lg opacity-80">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border px-4 py-2 flex gap-1 rounded shadow hover:shadow-md hover:scale-105"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_0h02gFL7no5XxP2MTl4a-eZL_YhYwp7Pg&s"
            alt="Google Play"
            className="h-6"
          />
          <p className='font-bold'>Google Play</p>
        </a>

        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border px-4 py-2 flex gap-1 rounded shadow  hover:shadow-md hover:scale-105"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAiQ1GPZcUE3N_AedeebocT8rT68fPoxMpQ&s"
            alt="App Store"
            className="h-6"
          />
          <p className='font-bold'>App Store</p>
        </a>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-10">
        <img
          src={heroImg}
          alt="App Screenshot"
          className="h-[500px] md:h-[600px] object-contain"
        />
      </div>


      
    </div>
    <div className="text-center bg-gradient-to-r from-purple-500 to-purple-700 p-10 text-white -mt-30">
      <h2 className="text-3xl font-bold mb-10">Trusted By Millions, Built For You</h2>
      <div className="flex justify-center gap-10">
        {statesData.map(stat => (
          <div key={stat.id}>

            <p className="font-medium opacity:50 mb-5">{stat.title}</p>
            <h3 className="text-4xl font-extrabold">{stat.value}</h3>
            <span className="text-sm text-gray-200 opacity:50 mt-5">{stat.description}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Banner;
