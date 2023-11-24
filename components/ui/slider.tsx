"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
export default function Slider(reference: any) {
  return (
    <>
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {reference.reference.fields.photos.map((el: any) => (
            <div key={el.fields.file.url} className="w-full">
              <Image
                width={800}
                height={500}
                className="mx-auto"
                //  src={`https:${el.fields.file.url}`}
                src="/ref1.png"
                alt={el.fields.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
