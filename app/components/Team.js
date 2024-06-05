import React from 'react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Dispatch Manager',
    img: '/d1.jpeg',
  },
  {
    name: 'Sara Lee',
    role: 'Logistics Coordinator',
    img: 'sara.jpeg',
  },
  {
    name: 'Tom Brown',
    role: 'Fleet Manager',
    img: 'd7.jpeg',
  },
  {
    name: 'Jane Smith',
    role: 'Route Planner',
    img: 'd5.jpeg',
  },
  {
    name: 'Mike Davis',
    role: 'Safety Supervisor',
    img: 'd4.jpeg',
  },
  {
    name: 'Emily Wilson',
    role: 'Customer Service',
    img: 'd3.jpeg',
  },
 
];

const TeamSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our team ensures seamless and efficient truck dispatching operations, providing top-notch service to meet all your logistics needs.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.img}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{member.name}</h2>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
