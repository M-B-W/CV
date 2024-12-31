import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl w-[85%] mx-auto'
  >
    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        <p className='text-white font-medium text-[18px] text-right'>{name}</p>
        <p className='mt-1 text-blue-800 text-[16px] text-right'>
          {designation}
        </p>
      </div>
    </div>
    <p className='text-white font-black text-[48px] mt-5'>"</p>

    <div className='mt-1'>
    <p className='text-[16px] max-md:text-[8px] text-white tracking-wider'>{testimonial}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Always show one card per page
    slidesToScroll: 1, // Scroll one card at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 15000,
    responsive: [
      {
        breakpoint: 1200, // Large tablets or small desktops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile and tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>In my position</p>
          <h2 className={styles.sectionHeadText}>Internships.</h2>
        </motion.div>
      </div>
      {/* Carousel showing one card per page */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
