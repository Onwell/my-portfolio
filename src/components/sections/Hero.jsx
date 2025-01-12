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
              'Technical Documentation Engineer ✍🏾',
              2000,
              'Building Developer Experiences ✍🏾',
              2000,
              'Creating API Documentation ✍🏾',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
          <br />
          <p className="text-2xl text-gray-200">
          Hi There! 👋  I'm Stephanie ⚡️
          </p>
          <br />
          <p className="text-xl text-gray-300">
          I specialize in simplifying complex technical concepts and I am experienced in creating API, product and developer documentation. My attention to detail ensures top-notch work delivered on time.
          
            <br /> <br />
            Let's transform your ideas into reality!!!
          </p>
        </div>
        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
            <img
              src= "src/assets/photo.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
