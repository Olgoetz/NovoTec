"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "./slider.styles.css";
function Arrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider extends Component<any> {
  render() {
    const settings = {
      dots: true,
      className: "center",

      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    console.log(this.props.reference.fields.photos);
    return (
      <div className="w-[1000px] mx-auto ">
        <Slider {...settings}>
          {this.props.reference.fields.photos.map((el: any) => (
            <div key={el.sys.id} className="w-full">
              <Image
                width={800}
                height={500}
                className="mx-auto"
                src={`https:${el.fields.file.url}`}
                alt={el.fields.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
