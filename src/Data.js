import React from 'react';
import { motion } from 'framer-motion';

const insects = [
  {
    title: 'Belalang',
    description: 'Belalang adalah serangga yang dikenal dengan kaki belakangnya yang kuat dan kemampuan melompatnya yang luar biasa. Mereka memiliki tubuh yang panjang dan ramping dengan sayap yang memungkinkan mereka terbang dalam jarak pendek.',
    imageUrl: 'Belalang.jpeg',
    imageHeight: '250px',
    imageWidth: '385px',
  },
  {
    title: 'Kumbang',
    description: 'Kumbang adalah serangga yang memiliki cangkang keras yang melindungi sayap dan tubuhnya. Mereka merupakan salah satu kelompok serangga terbesar dengan berbagai macam spesies yang ditemukan di hampir setiap habitat di seluruh dunia.',
    imageUrl: 'Kumbang2.jpeg',
    imageHeight: '250px',
    imageWidth: '385px',
  },
  {
    title: 'Kupu-kupu',
    description: 'Kupu-kupu adalah serangga yang terkenal dengan sayapnya yang indah. Mereka mengalami metamorfosis melalui empat tahap: telur, ulat, kepompong, dan dewasa. Kupu-kupu sering ditemukan di berbagai habitat dan berperan penting sebagai penyerbuk. ',
    imageUrl: 'Kupu.jpeg',
    imageHeight: '250px',
    imageWidth: '385px',
  },
  {
    title: 'Nyamuk',
    description: 'Nyamuk adalah serangga yang sering menjadi hama karena gigitannya yang menyebabkan gatal. Mereka memiliki tubuh ramping, sayap transparan, dan kaki panjang. Nyamuk betina menggigit dan menghisap darah untuk memperoleh protein yang dibutuhkan untuk perkembangan telurnya.',
    imageUrl: 'Nyamuk.jpeg',
    imageHeight: '250px',
    imageWidth: '385px',
  },
  {
    title: 'Ulat',
    description: 'Ulat adalah tahap larva dari serangga seperti kupu-kupu dan ngengat. Mereka biasanya memiliki tubuh yang panjang dan berbulu, dengan beberapa segmen yang dilengkapi kaki kecil. Ulat berperan penting dalam ekosistem sebagai pemakan daun dan sumber makanan bagi banyak hewan. ',
    imageUrl: 'Ulat.jpeg',
    imageHeight: '250px',
    imageWidth: '385px',
  },
  {
    title: 'Lebah',
    description: 'Lebah adalah serangga yang dikenal dengan perannya dalam penyerbukan dan produksi madu. Mereka memiliki tubuh yang berbulu, sayap transparan, dan sengat. Lebah membantu penyerbukan bunga saat mereka mengumpulkan nektar dan serbuk sari, yang penting untuk reproduksi tanaman. ',
    imageUrl: 'Lebah.jpeg',
    imageHeight: '250px',
    imageWidth: '385px',
  },
];

const Card = ({ title, description, imageUrl, imageHeight, imageWidth }) => (
  <motion.div 
    className="max-w-sm rounded bg-white overflow-hidden shadow-lg m-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img 
      className="w-full" 
      src={imageUrl} 
      alt={title} 
      style={{ height: imageHeight, width: imageWidth }}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
    </div>
  </motion.div>
);

const Data = () => (
    <div id="Data" className="flex flex-col items-center bg-[#FCF8F3] py-16">
    <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 font-roboto"style={{ fontSize: '33px' }}>Klasifikasi Beragam Serangga</h1>
        <p className="text-gray-600 mr-48 ml-48 mb-4 font-poppins">
            Di bawah ini adalah daftar lengkap jenis-jenis serangga yang kami klasifikasikan. Temukan informasi menarik dan mendalam tentang berbagai serangga dan peran penting mereka dalam ekosistem kita.
        </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {insects.map((insect, index) => (
        <Card 
          key={index} 
          title={insect.title} 
          description={insect.description} 
          imageUrl={insect.imageUrl} 
          imageHeight={insect.imageHeight} 
          imageWidth={insect.imageWidth}
        />
      ))}
    </div>
  </div>
);

export default Data;
