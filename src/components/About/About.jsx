// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <p className="text-lg mb-4">
//               I'm a passionate web developer with 5 years of experience creating modern web applications. I specialize in React, JavaScript, HTML5, and CSS3.
//             </p>
//             <p className="text-lg mb-4">
//               My journey in web development started at [University/Company], where I learned the fundamentals of creating user-friendly interfaces and writing clean, maintainable code.
//             </p>
//             <p className="text-lg">
//               When I'm not coding, you can find me hiking, reading, or exploring new coffee shops around the city.
//             </p>
//           </div>
//           <div className="md:w-1/2 md:pl-12">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
//                 <h3 className="font-bold mb-2">Education</h3>
//                 <p>B.S. in Computer Science<br />University Name</p>
//               </div>
//               <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
//                 <h3 className="font-bold mb-2">Experience</h3>
//                 <p>5+ Years<br />Professional Experience</p>
//               </div>
//               <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
//                 <h3 className="font-bold mb-2">Location</h3>
//                 <p>San Francisco, CA<br />United States</p>
//               </div>
//               <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
//                 <h3 className="font-bold mb-2">Languages</h3>
//                 <p>English (Native)<br />Spanish (Conversational)</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm [Your Name], a passionate developer with experience in...</p>
          <p>My journey in web development began...</p>
          <p>When I'm not coding, I enjoy...</p>
        </div>
        <div className="about-image">
          <img src="/path-to-your-image.jpg" alt="Your Name" />
        </div>
      </div>
    </section>
  );
};

export default About;