import React from 'react';

const teamMembers = [
  {
    name: 'Muhammad Mahrus Zain, S.S.T., M.T.I.',
    role: 'Framework Lanjutan',
    imageUrl: 'DosenPakMahruz.jpeg',
  },
  {
    name: 'Mardhiah Fadli, S.T., M.T.',
    role: 'Manajemen Proyek',
    imageUrl: 'DosenBukMardiah.jpg',
  },
  {
    name: 'Dini Nurmalasari, S.T., M.T',
    role: 'Data Mining',
    imageUrl: 'DosenBukDini.jpg',
  },
];

const TeamMemberCard = ({ name, role, imageUrl }) => (
  <div className="w-full max-w-xs rounded overflow-hidden shadow-lg m-4 transform transition-transform hover:scale-105">
    <img className="w-full h-48 object-contain" src={imageUrl} alt={name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{role}</p>
    </div>
  </div>
);

const TeamSection = () => (
  <div id="Lecture" className="text-center py-16">
    <h1 className="text-3xl font-bold mb-4">Dosen Pengampu</h1>
    <div className="flex flex-wrap justify-center">
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  </div>
);

export default TeamSection;
