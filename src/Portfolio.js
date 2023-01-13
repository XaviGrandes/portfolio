import React from 'react';
import xaviGrandes from './images/Xavi-Grandes.png';

export default function App() {
  return (
    <main className="bg-[#111827] h-full">
      <section className="flex flex-col text-center gap-3 pt-10">
        <h1 className="text-[#6fd0c8] text-4xl " >Xavi Grandes Rovira</h1>
        <h2 className="text-white text-2xl">Full stack developer</h2>
        <p className="text-white">Graduated in business management and marketing with a master's degree in digital marketing.
        <br/>
        Recently I finished my bootcamp and I'm gratuated as a Full Stack developer. I learn programming languages and frameworks (HTML, CSS, JavaSript with React and also Insomnia, Nodejs, MongoDB and Mongoose)
        <br/>
        Here I show you my projects</p>
        <div>
          <a className="text-white">Linkedin</a>
          <a className="text-white">Github</a>
        </div>
        <img className='h-full w-full border rounded-[50%]' src="{xaviGrandes}" alt='image profile'/>
      </section>
    </main>
  );
}