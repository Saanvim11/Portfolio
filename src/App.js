
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Vision from './components/Vision/Vision';
import Education from './components/Education/Education';
import Resume from './components/Resume/Resume';
import Research from './components/Research/Research'
//import FloatingCharacter from './components/FloatingCharacter/FloatingCharacter';
// import Login from './saanvi.jsx';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
     <div className="App">
       <Header />
       <main>
         {/* <FloatingCharacter /> */}
         <About />
         <Education />
         <Vision />
         <Projects />
         <Research />
         <Skills />
         <Contact />
         <Resume />
       </main>
       <Footer />
     </div>
    // //<table><tr><th>saanvi</th></tr></table>
    // <div className="App">
    //   <Login/>
    // </div>
  );
}

export default App;
