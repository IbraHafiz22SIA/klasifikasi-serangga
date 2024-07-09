import React from 'react';

const teamMembers = [
  {
    name: 'Ibra Hafiz',
    role: 'Fullstack',
    imageUrl: 'g3.png',
    email: 'ibra22si@mahasiswa.pcr.ac.id',
  },
  {
    name: 'M. Raditya Habibie',
    role: 'UI/UX Designer',
    imageUrl: 'bospasti.png',
    email: 'raditya22si@mahasiswa.pcr.ac.id',
  },
];

const TeamMemberCard = ({ name, role, imageUrl, email }) => (
  <div className="w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-lg m-4 transition delay-150 duration-300 ease-in-out transform hover:scale-105">
    <div className="flex justify-center mt-4 ">
      <div className="w-36 h-36 rounded-full overflow-hidden ">
        <img className="object-contain w-full h-full" src={imageUrl} alt={name} />
      </div>
    </div>
    <div className="px-6 py-4 text-center">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-600 mb-2">{role}</p>
      <p className="text-gray-700 text-base">{email}</p>
    </div>
    <div className="flex justify-center mb-4">
      <div className="w-20 h-1 bg-yellow-400 rounded-full mx-2"></div>
      <div className="w-20 h-1 bg-purple-400 rounded-full mx-2"></div>
      <div className="w-20 h-1 bg-blue-400 rounded-full mx-2"></div>
    </div>
  </div>
);

const TeamSection = () => (
  <div id='Team' className="relative bg-[#fffbe8] py-16">
    <div className="absolute top-0 left-0">
      <img src="p1.png" alt="Decoration" className="w-50 h-50" />
    </div>
    <div className="absolute bottom-0 right-0">
      <img src="p2.png" alt="Decoration" className="w-50 h-50" />
    </div>
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-[#B88E2F]">OUR TEAM MEMBERS</h1>
      <p className="text-black">MEET OUR TEAM!</p>
    </div>
    <div className="flex flex-wrap justify-center ">
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          imageUrl={member.imageUrl}
          email={member.email}
        />
      ))}
    </div>
  </div>
);

export default TeamSection;
