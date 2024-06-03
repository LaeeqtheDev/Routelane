import React from 'react';
import Card from './card';

const About = () => {
  const data = [
    {
      title: "Route Planning",
      description: "Truck dispatchers are responsible for planning efficient routes for trucks to ensure timely delivery of goods. They consider factors such as distance, traffic conditions, weather, and delivery schedules to optimize routes and minimize transportation costs.",
      image: "/o4.png",
      tags: ["Mileage", "Petrol", "Diesel"]
    },
    {
      title: "Load Assignment",
      description: "Dispatchers assign loads to available trucks and drivers based on factors such as truck capacity, destination, and delivery deadlines. They ensure that each truck is utilized efficiently and that all loads are delivered on time.",
      image: "/load.png",
      tags: ["Flatbed", "BoxTruck", "Reefer"]
    },
    {
      title: "Communication",
      description: "Dispatchers maintain constant communication with truck drivers, providing them with route updates, delivery instructions, and any other relevant information. They use communication tools such as two-way radios, GPS tracking systems, and mobile phones to stay in touch with drivers and monitor their progress.",
      image: "/headphone.png",
      tags: ["24hours", "7 Days", "12 Months"]
    },
    {
      title: "Problem Solving",
      description: "Dispatchers handle various issues that may arise during transportation, such as traffic delays, mechanical breakdowns, and customer concerns. They work quickly to resolve problems, make necessary adjustments to routes or schedules, and ensure that deliveries are completed as smoothly as possible.",
      image: "/report.png",
      tags: ["Quick", "Responsive", "Patient"]
    },
    // Add more data objects as needed
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Why Us</h1>
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-7">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
