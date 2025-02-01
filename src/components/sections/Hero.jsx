import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="font-mono md:w-2/3">
          <TypeAnimation
            sequence={[
              'Web Developer ✍🏾',
              2000,
              'Graphic Designer ✍🏾',
              2000,
              'Tech Writer ✍🏾',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-3xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
          <br />
          <p className="text-2xl text-gray-200">
          Hi There! 👋  I'm Onwell ⚡️
          </p>
          <br />
          <p className="text-xl text-gray-300">
          I specialize in cutting-edge web development, crafting dynamic and responsive applications using tools like ReactJS, NodeJS, Git, HTML, and more. Beyond coding, I bring creativity to life as a graphic designer, delivering compelling branding and eye-catching flyer designs that leave a lasting impression.
          
            <br /> <br />
            Bring your ideas to life with creativity and innovation!
          </p>
        </div>
        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
            <img
              src= "/photo.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
