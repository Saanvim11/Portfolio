// import React, { useState } from 'react';
// import { Menu, X, Moon, Sun } from 'lucide-react';

// const Header = ({ darkMode, toggleTheme }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
  
//   const toggleMenu = () => setMenuOpen(!menuOpen);
  
//   return (
//     <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//           YourName
//         </a>
        
//         <div className="flex items-center">
//           <button onClick={toggleTheme} className="p-2 mr-4">
//             {darkMode ? <Sun size={24} /> : <Moon size={24} />}
//           </button>
          
//           <nav className="hidden md:block">
//             <ul className="flex space-x-8">
//               <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
//               <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
//               <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
//               <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
//             </ul>
//           </nav>
          
//           <button className="md:hidden" onClick={toggleMenu}>
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
      
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
//           <nav className="container mx-auto px-4 py-4">
//             <ul className="space-y-4">
//               <li><a href="#about" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>About</a></li>
//               <li><a href="#skills" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>Skills</a></li>
//               <li><a href="#projects" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>Projects</a></li>
//               <li><a href="#contact" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import React from 'react';
//import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Your Name</h1>
        <p>Web Developer | Designer | Your Title</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;