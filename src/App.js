import React, { useRef, useEffect, useState } from 'react';
import portrait from './images/portrait.JPG'
import headshot from './images/headshot.JPG'
import ProjectCard from './components/project';
import projectData from './projects.json';
import { motion } from 'framer-motion';

function App() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // const [showNavigationBar, setShowNavigationBar] = useState(false);

  // Trigger the function when the component mounts
  useEffect(() => {
    document.title = 'Jays Portfolio'
    showElementAfterDelay();
  }, []);

  // Function to trigger the appearance of the element after a delay
  const showElementAfterDelay = () => {
    setTimeout(() => {
      setIsVisible(true);
    }, 700); // 700 milliseconds (0.7 seconds) delay
  };

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center h-5/6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }} // Start with some initial scale and rotation
          animate={{ rotate: 0, scale: 1 }} // Animate to the final scale and rotation
          transition={{
            type: "spring",
            stiffness: 80, // Increase stiffness for a slower spring animation
            damping: 10, // Increase damping for a smoother animation
            delay: 0.3, // Delay the animation for 0.5 seconds
          }}
        >
          <div class="w-44 h-44 rounded-full overflow-hidden">
            <img src={headshot} alt="Description" className="w-full h-full object-cover"></img>
          </div>
        </motion.div>
        <h1 className="text-8xl font-bold text-white justify-self-center">Jay Lee</h1>
        <h2 className="text-lg font-semibold font-serif mt-2 text-white">Software Developer</h2>
        </div>
        <div className="h-1/6 flex justify-end items-end mb-12">
        {isVisible && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-2xl animate-bounce hover:cursor-pointer text-white"
            onClick={scrollToTarget}
          >
            &#8650;
          </motion.span>
        )}
        </div>
      </div>
      <div ref={targetRef} className="w-screen h-screen flex flex-row bg-black">
        <div className="basis-1/2 h-full flex flex-col justify-center items-end" >
          <h1 className="text-6xl font-bold m-11 justify-end  text-white">About Me</h1>
          <p className='w-3/4 text-end text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="basis-1/2 h-full flex justify-center items-center">
          <img src={portrait} alt="Portrait of Jay Lee" className="w-4/6 h-4/6 object-contain" ></img>
        </div>
      </div>
      <div className="w-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-white mb-11">My Work</h1>
        <div className='h-96 w-full flex flex-row justify-center gap-9 mx-7'>
          {projectData.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
