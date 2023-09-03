import React from "react";
function App() {
  return (
      <div className = "w-full h-screen bg-[#e9af4b] overflow-y-scroll snap-y snap-mandatory">
        <div className="w-full h-full flex items-center justify-center  snap-start px-4 py-2">
          <div className="container h-full flex flex-col lg:flex-row gap-y-8 gap-x-4 items-center justify-center">
            <div className="basis-3/5 flex flex-col gap-y-4 justify-start items-start">
              <h1 className="text-6xl leading-normal font-bold mb-4 break-keep">
              Open in screen of full viewport height
              </h1>
              <p className="mb-4 hidden xs:block font-normal leading-normal text-gray-500 ">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="flex-grow hidden xs:block overflow-hidden relative w-full h-full ">
                <img
                  src="https://placedog.net/500/280"
                  className=" object-contain w-full h-full"
                  alt = "cute-dog"
                />
              
            </div>
          </div>
        </div>

        {/* This below section shows up only when the screen size is less than 640px */}
        <div className="w-full h-full flex xs:hidden items-center justify-center  snap-start px-4 py-2">
          <div className="container h-full flex flex-col lg:flex-row gap-y-8 items-center justify-center">
            Showing for small screen sizes
            <div className="overflow-hidden items-center">
            <img
                src="https://placedog.net/500/280"
                className=" object-contain w-full h-full"
                alt = "cute-dog"
              />
            </div>
            <div className="flex flex-col gap-y-4 justify-start items-start">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
