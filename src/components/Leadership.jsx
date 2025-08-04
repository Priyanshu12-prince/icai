import React from 'react';

const Leadership = () => {
  const leaders = [
    {
      name: "CA. Charanjot Singh Nanda",
      title: "President, ICAI",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=223&h=191&fit=crop",
    },
    {
      name: "CA. Prasanna Kumar D",
      title: "Vice – President, ICAI",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=223&h=191&fit=crop",
    },
    {
      name: "Jay Chhaira",
      title: "Chairperson",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=223&h=191&fit=crop",
    },
    {
      name: "Vishnu Kumar Agarwal",
      title: "Vice – Chairman",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=223&h=191&fit=crop",
    },
  ];

  return (
    <section className="w-full py-12 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 object-cover rounded-3xl"
                />
              </div>
              <h3 className="font-bold text-blue-900 text-base mb-1">
                {leader.name}
              </h3>
              <p className="font-semibold text-gray-600 text-sm">
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