import React from "react";
import Slider from "react-slick";

import Image from "next/image";
import Link from "next/link";
import classes from "./slider.module.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    //autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <section className={classes["slider-section"]}>
      <div style={{width:'100%'}}>
        <Slider {...settings}>
          <div>
            <div className={classes["slider-container"]}>
              <div className={classes["slider-description"]}>
                <h1 className={classes["slider-heading"]}>
                  2024 Housing - Now Open
                </h1>
                <p className={classes["slider-content"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu justo id mauris dictum bibendum a sit amet diam. Morbi
                  massa odio, tristique tincidunt nibh nec, tincidunt dignissim
                  diam.
                </p>

                <Link href='/' className={classes["slider-cta"]}>
                  Register Now
                </Link>
              </div>
              <div>
                <Image
                  src='/images/construction-1.jpg'
                  width={400}
                  height={400}
                  alt=''
                />
              </div>
            </div>
          </div>
          <div>
            <div className={classes["slider-container"]}>
              <div className={classes["slider-description"]}>
                <h1 className={classes["slider-heading"]}>
                  2024 Housing - Now Open
                </h1>
                <p className={classes["slider-content"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu justo id mauris dictum bibendum a sit amet diam. Morbi
                  massa odio, tristique tincidunt nibh nec, tincidunt dignissim
                  diam.
                </p>
              </div>
              <div>
                <Image
                  src='/images/construction-2.jpg'
                  width={400}
                  height={400}
                  alt=''
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
