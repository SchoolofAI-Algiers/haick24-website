// PhotoSlider.jsx
import React from 'react';
import { motion } from 'framer-motion';
import left from './logo/left1.svg';
import right from './logo/right1.svg';
import sonatrach from './logo/sonatrach.svg';
import nvidia from './logo/nvidia.svg';
import ai from './logo/ai.svg';

const photos = [
  sonatrach,
  nvidia,
  ai,
  // Add more photo URLs here
];

const Sponsors = () => {
  const duplicatedPhotos = [
    ...photos,
    ...photos,
    ...photos,
    ...photos,
    ...photos,
    ...photos,
  ];

  return (
    <div id='sponsors' className="w-full bg-skyBlueColor pb-20 text-white relative ">
      <img src={right} alt="" className="absolute  -top-32 left-0   z-[10]" />
      <img src={left} alt="" className="absolute  -top-32 right-0   z-[10]" />

      <h1 className=" text-6xl  font-bold text-center py-20">Our Sponsors</h1>
       <p className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[50%] font-bold text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem]">COMING SOON</p>
      <div className="flex justify-center blur-md opacity-50">
        <div
          className="md:w-3/4 mx-auto sm:w-4/5 lg:w-3/4 w-4/5 inline-flex flex-nowrap overflow-hidden "
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
          }}
        >
          <motion.div
            className="flex"
            animate={{
              x: ['-100%', '0%'],
              transition: {
                ease: 'linear',
                duration: 20,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedPhotos.map((photoUrl, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 lg:w-1/6 md:w-1/5 sm:w-1/4 m-auto "
              >
                <img
                  src={photoUrl}
                  alt={`Photo ${index + 1}`}
                  className="m-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

// import React, { useEffect, useRef } from 'react';
// import '../App.css'; // Make sure to import the Tailwind CSS file

// const PhotoSlider = () => {
//   const logosRef = useRef(null);

//   useEffect(() => {
//     const ul = logosRef.current;
//     ul.insertAdjacentHTML('afterend', ul.outerHTML);
//     ul.nextSibling.setAttribute('aria-hidden', 'true');
//   }, []);

//   return (
//     <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 ">
//       <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
//         <div className="text-center">
//           <div
//             className="w-full inline-flex flex-nowrap overflow-hidden"
//             style={{
//               maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
//             }}
//           >
//             <ul ref={logosRef} className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll">
//               <li>
//                 <img src="./hey.png" alt="Facebook"  />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default PhotoSlider;
