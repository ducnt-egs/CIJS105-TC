import React from "react";

const Explore = ({ selectedMovie }) => {
  return (
    <>
      <div className="my-[29px]">
        <h2 className="text-[32px] font-medium">Explore</h2>
        <p className="text-[22px] py-[29px] text-[#868686]">
          What are you gonna watch today ?
        </p>
        <div className="relative rounded-lg overflow-hidden h-[400px]">
          <img
            src={selectedMovie.image}
            alt={selectedMovie.movieName}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
       
          <div className="relative h-full flex flex-col justify-end ">
            <div className="text-white max-w-2xl pl-[47px] pb-[39px]">
              <h3 className="text-[36px] font-bold mb-4">{selectedMovie.movieName}</h3>
              <p className="text-[16px] text-gray-200 leading-relaxed">
                {selectedMovie.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
