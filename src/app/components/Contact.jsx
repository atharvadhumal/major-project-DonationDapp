import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className="flex flex-col lg:flex-row items-center justify-center w-full h-screen">
            <div className="lg:w-[60vw] lg:h-[60vh] flex flex-col items-center justify-between">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 underline">Contact Us:</h2>
            <a href="https://www.instagram.com/straydapp"  target="_blank">
                <div className="flex lg:w-[30vw] w-[80vw] items-center justify-center lg:justify-start p-2 m-2">
                    <img src="https://pluspng.com/img-png/instagram-logo-eps-png-instagram-logo1-instagram-logo-1915.png" alt="Contact Us" className=" h-10 lg:h-20" />
                    <p className="text-md md:text-lg lg:text-2xl font-semibold m-2">Join us on Instagram</p>
                </div>
                </a>
            <a href="https://x.com/straydapp" target="_blank">
                <div className="flex lg:w-[30vw] w-[80vw] items-center justify-center lg:justify-start p-2 m-2">
                    <img src="https://pluspng.com/img-png/twitter-png-twitter-icon-1600.png" alt="" className=" h-10 lg:h-20" />
                    <p className="text-md md:text-lg lg:text-2xl font-semibold m-2">Join Us on X </p>
                </div>
                </a>

                <a href="https://t.me/Cnctr24"  target="_blank">
                <div className="flex lg:w-[30vw] w-[80vw] items-center justify-center lg:justify-start p-2 m-2">
                    <img src="https://pluspng.com/img-png/telegram-logo-png-open-2000.png" alt="" className=" h-10 lg:h-20" />
                    <p className="text-md md:text-lg lg:text-2xl font-semibold m-2">DM Us on Telegram</p>
                </div>
                </a>
            </div>
            <div className="p-5 lg:w-[40vw]">
                <img src="https://imgur.com/RZvUkiK.png" alt="Contact us image" />
            </div>
        </div>
    )
}

export default Contact