import React from "react";

const CrawlingText = () => {
  return (
    <div className="md:max-w-7xl mb-10 flex items-center justify-between md:mx-auto overflow-hidden relative bg-black h-[60px]">
      <div className="flex items-center  ">
        <div className="uppercase z-50 text-xl text-center p-4 font-extrabold  bg-[#FD8226]">
          <p className="leading-5">Breaking</p>
          <p className="leading-5 text-3xl">News</p>
        </div>

        <div className=" text-white absolute whitespace-nowrap font-semibold animate-crawl">
          <p>
            +++Wir sind umgezogen! Unsere Adresse lautet ab sofort:
            Friedrich-Sertürner-Straße 18, 51377 Leverkusen+++
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrawlingText;
