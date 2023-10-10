import about from '../assets/about.jpg'
import { GiChurch } from 'react-icons/gi'

const About = () => {
  return (
    <section className='min min-h-screen h-fit w-full flex-col space-y-20  flex justify-center text-center items-center my-auto px-40' id="about">
      <div className="flex flex-col heading justify-center items-center">
        <GiChurch className=" text-rose-600" />
        <p className="text-5xl font-bold">Welcome to Our Church</p>
        <i className="thin font-thin bg-transparent text-gray-400 text-4xl">God loves us all</i>
      </div>
      <div className="flex w-full h-fit">
        <div className="leftdiv flex w-[50%] flex-col  py-3">
          <p className="text-lg leading-loose text-left pr-6">
          Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id. Phasellus fringilla nisl sed sem scelerisque, eget aliquam magna vehicula.nteger nec bibendum lacus.
          </p>
          <button className="text-white font-bold text-2xl  p-4 w-fit mt-7 bottom-28 bg-rose-600 rounded-md">
      Explore more
      </button>        </div>
        <div className="rightdiv flex w-[50%] bg-slate-200">
          <img src={about} alt='about'/>
        </div>
      </div>
    </section>
  )
}

export default About