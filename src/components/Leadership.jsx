import React from 'react';
import { imageUrl } from '../imageUrl';
import '../css/header.css'


const Leadership = () => {
  const leaders = [
    {
      name: "CA. Charanjot Singh Nanda",
      title: "President, ICAI",
      image: imageUrl.charanjot
    },
    {
      name: "CA. Prasanna Kumar D",
      title: "Vice – President, ICAI",
     image: imageUrl.parasana
    },
    {
      name: "Jay Chhaira",
      title: "Chairperson",
        image: imageUrl.jay

    },
    {
      name: "Vishnu Kumar Agarwal",
      title: "Vice – Chairman",
         image: imageUrl.vishnu

    },
  ];

  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center ">
              <div className="mb-4">
               <div className='imageBackGround'>
                 <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 object-cover rounded-3xl bg-red-900"
                />
               </div>
              </div>
              <h3 className="font-bold text-blue-900 text-base mb-1 leaderText">
                {leader.name}
              </h3>
              <p className="font-semibold text-gray-600 text-sm  leaderTitle">
                {leader.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;