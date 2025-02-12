import React from 'react';

const Mission = () => {
    return (
        <div name='mission' className="flex flex-col lg:flex-row items-center justify-center w-full h-screen bg-[#F9F3EE]">
            <div className="lg:w-[60vw] lg:h-[60vh] flex flex-col items-center justify-between">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 underline">Our Mission</h2>
                <div className="flex lg:w-[30vw] w-[80vw] items-center justify-center lg:justify-start p-2 m-2">
                    <img src="https://imgur.com/1r9JA2b.png" alt="" className=" h-10 lg:h-20" />
                    <p className="text-md md:text-lg lg:text-2xl font-semibold m-2">Provide food for strays</p>
                </div>
                <div className="flex lg:w-[30vw] w-[80vw] items-center justify-center lg:justify-start p-2 m-2">
                    <img src="https://imgur.com/w50cIQI.png" alt="" className=" h-10 lg:h-20" />
                    <p className="text-md md:text-lg lg:text-2xl font-semibold m-2">Vaccinations and Shelter</p>
                </div>
                <div className="flex lg:w-[30vw] w-[80vw] items-center justify-center lg:justify-start p-2 m-2">
                    <img src="https://imgur.com/VZW6a1Z.png" alt="" className=" h-10 lg:h-20" />
                    <p className="text-md md:text-lg lg:text-2xl font-semibold m-2">Lots of Love</p>
                </div>
            </div>
            <div className="p-5 lg:w-[40vw]">
                <img src="https://imgur.com/dtgDYk1.png" alt="hero img" />
            </div>
        </div>
    )
}

export default Mission