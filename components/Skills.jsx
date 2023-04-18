import React from 'react'
import {FaReact,FaCss3} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiHtml5,SiTailwindcss,SiNextdotjs,SiPostgresql,SiElectron,SiExpress,SiNodedotjs,SiPython,SiMongodb} from 'react-icons/si'

const Skills = () => {
  return (
    <article className="dark:text-white text-Cuarto w-full h-full flex flex-col items-center ">
      <h2 className="text-2xl">Skills</h2>
      <section className="w-full h-full p-8 grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center text-boton">
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-primary items-center">
          <FaCss3 className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-orange items-center">
          <SiHtml5 className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-yellow-400 items-center">
          <DiJavascript1 className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-primario items-center">
          <FaReact className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-grayDrak items-center">
          <SiNextdotjs className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-Primario items-center">
          <SiTailwindcss className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-sky-600 items-center">
          <SiElectron className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-sky-800 items-center">
          <SiPython className="w-16 h-16 md:w-32 md:h-32 text-yellow-400" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-secondary items-center">
          <SiExpress className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-sky-800 items-center">
          <SiPostgresql className="w-16 h-16 md:w-32 md:h-32 text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-Tercero items-center">
          <SiNodedotjs className="w-16 h-16 md:w-32 md:h-32  text-white" />
        </div>
        <div className="w-24 h-24 md:w-40 md:h-40 cir flex justify-center bg-info items-center">
          <SiMongodb className="w-16 h-16 md:w-32 md:h-32 text-tercero" />
        </div>
      </section>
    </article>
  );
}

export default Skills
