import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const FlipCard = ({ images }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function flip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  }

  let [imgIndex, setImgIndex] = useState(1);

  const [frontImage, setFrontImage] = useState(images[0]);

  const [backImage, setBackImage] = useState(images[1]);

  function nextImageIndex() {
    if (isFlipped) {
      setFrontImage(
        images[
          imgIndex + 1 >= images.length
            ? imgIndex + 1 == images.length
              ? 0
              : 1
            : imgIndex + 1
        ]
      );
    } else {
      setBackImage(
        images[
          imgIndex + 1 >= images.length
            ? imgIndex + 1 == images.length
              ? 0
              : 1
            : imgIndex + 1
        ]
      );
    }
    setImgIndex(images.length == imgIndex + 1 ? 0 : imgIndex + 1);
  }

  return (
    <div
      className="
            w-full aspect-video
            flex flex-col justify-center items-center"
      onClick={flip}
    >
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => {
          nextImageIndex();
          setIsAnimating(false);
        }}
      >
        <div className="flip-card-front">
          <img src={frontImage} />
        </div>

        <div className="flip-card-back">
          <img src={backImage} />
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
