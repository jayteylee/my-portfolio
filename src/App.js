import React, { useRef, useEffect, useState } from 'react';
import portrait from './images/portrait.JPG'
import headshot from './images/headshot.JPG'

function App() {
  const targetRef = useRef(null);
  // const [showNavigationBar, setShowNavigationBar] = useState(false);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
        <div class="w-44 h-44 rounded-full overflow-hidden">
          <img src={headshot} alt="Image Description" className="w-full h-full object-cover"></img>
        </div>
        <h1 className="text-8xl font-bold text-white justify-self-center">Jay Lee</h1>
        <h2 className="text-lg font-semibold font-serif mt-2 text-white">Software Developer</h2>
        <span onClick={scrollToTarget} className="text-2xl animate-bounce hover:cursor-pointer text-white">&#8650;</span>
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
      <div className="w-screen flex flex-col items-center justify-center bg-emerald-800">
        <h1 className="text-6xl font-bold text-white">My Work</h1>
        <div className='h-96'>Content goes here</div>
      </div>
    </div>
  );
}

export default App;
