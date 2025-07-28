// import React from 'react';

// const Skills = () => {
//   const frontendSkills = [
//     { name: 'HTML5', level: 90 },
//     { name: 'CSS3', level: 85 },
//     { name: 'JavaScript', level: 90 },
//     { name: 'React', level: 88 },
//     { name: 'Tailwind CSS', level: 80 },
//   ];
  
//   const backendSkills = [
//     { name: 'Node.js', level: 75 },
//     { name: 'Express', level: 70 },
//     { name: 'MongoDB', level: 65 },
//     { name: 'RESTful APIs', level: 85 },
//     { name: 'Firebase', level: 70 },
//   ];
  
//   const otherSkills = [
//     { name: 'Git & GitHub', level: 85 },
//     { name: 'Responsive Design', level: 90 },
//     { name: 'UI/UX Design', level: 75 },
//     { name: 'Testing', level: 70 },
//     { name: 'Performance Optimization', level: 80 },
//   ];
  
//   const renderSkillBars = (skills) => {
//     return skills.map((skill, index) => (
//       <div key={index} className="mb-4">
//         <div className="flex justify-between mb-1">
//           <span className="font-medium">{skill.name}</span>
//           <span>{skill.level}%</span>
//         </div>
//         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
//           <div 
//             className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" 
//             style={{ width: `${skill.level}%` }}
//           ></div>
//         </div>
//       </div>
//     ));
//   };
  
//   return (
//     <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-bold mb-6 text-center">Frontend</h3>
//             {renderSkillBars(frontendSkills)}
//           </div>
          
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-bold mb-6 text-center">Backend</h3>
//             {renderSkillBars(backendSkills)}
//           </div>
          
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-bold mb-6 text-center">Other</h3>
//             {renderSkillBars(otherSkills)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 80 },
    // Add more skills
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;