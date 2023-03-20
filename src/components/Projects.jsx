import React from 'react'
import Projectitem from './Projectitem'
import athleticImg from "../assets/website-athletic.png"
import gameImg from "../assets/website-game.png"

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 pt-16 pb-16'>
        <h1 className='text-4xl font-bold text-center text-red-700'>Projects</h1>
        <p className='text-center py-8'>Gladly visit all my projects below and you can visit all the source code for my projects by just clicking on "More info"</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <Projectitem img={athleticImg} title='Website Athletic' />
            <Projectitem img={gameImg} title='Website Game' />
        </div>
    </div>
  )
}

export default Projects