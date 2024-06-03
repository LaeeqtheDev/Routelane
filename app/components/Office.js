import React from 'react';

const Office = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sneak Peek into our Office</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="o1" className="absolute inset-0 w-full h-full object-cover object-center" src="/o1.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Office Space</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Work Environment</h1>
                <p className="leading-relaxed">Our office space provides a conducive environment for creativity and collaboration, with modern amenities and comfortable workstations.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="o2" className="absolute inset-0 w-full h-full object-cover object-center" src="/o2.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Conference Room</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Meetings and Presentations</h1>
                <p className="leading-relaxed">Our spacious conference room is equipped with state-of-the-art technology, perfect for meetings, presentations, and brainstorming sessions.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="o3" className="absolute inset-0 w-full h-full object-cover object-center" src="/o3.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Workspace</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Productivity Zone</h1>
                <p className="leading-relaxed">Our workspace is designed to enhance productivity and focus, with ergonomic furniture and ample natural light.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="o4" className="absolute inset-0 w-full h-full object-cover object-center" src="/o7.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Break Room</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Relaxation Area</h1>
                <p className="leading-relaxed">Our break room offers a cozy retreat for employees to unwind, recharge, and socialize during breaks and lunchtime.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="o5" className="absolute inset-0 w-full h-full object-cover object-center" src="/o5.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Office Decor</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Aesthetic Appeal</h1>
                <p className="leading-relaxed">Our office decor reflects our company culture and values, creating a welcoming and inspiring atmosphere for everyone.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="o6" className="absolute inset-0 w-full h-full object-cover object-center" src="/o6.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Workstations</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ergonomic Setup</h1>
                <p className="leading-relaxed">Our workstations are ergonomically designed to promote comfort and reduce strain, ensuring optimal health and productivity for our employees.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;
