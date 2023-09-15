import React, { useRef } from 'react';

function App() {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold">Jay Lee</h1>
        <h2 className="text-lg font-semibold font-serif mt-2">Software Developer</h2>
        <span onClick={scrollToTarget} className="text-2xl animate-bounce hover:cursor-pointer">&#8650;</span>
      </div>
      <div className="w-screen h-screen flex flex-row items-center justify-center bg-slate-400">
        <div className="basis-1/3 h-full bg-yellow-200"></div>
        <div ref={targetRef} className="basis-2/3 h-full">
          <h1 className="text-8xl font-bold">About Me</h1>
          <h2 className="text-lg font-semibold font-serif mt-2">Software Developer</h2>
          <span className="text-2xl animate-bounce hover:font-bold hover:cursor-pointer">&#8650;</span>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-8xl font-bold text-white">My Work</h1>
        <h2 className="text-lg font-semibold font-serif mt-2 text-white">Software Developer</h2>
        <span className="text-2xl animate-bounce hover:font-bold hover:cursor-pointer text-white">&#8650;</span>
      </div>
    </div>
  );
}

export default App;
