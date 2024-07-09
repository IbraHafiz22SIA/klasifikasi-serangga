import React from 'react';

const AboutUs = () => {
  return (
    <div id="AboutUs" className="bg-[#FCF8F3] w-full relative" style={{ height: '605px' }}>
      <div className="relative flex flex-col items-center">
        <img src='tempat1.png' alt="Center Image" className="h-[85px] w-[384px]" />
        <h2 className="absolute font-semibold p-3" style={{ fontSize: '33px', color: '#FCFFFF' }}>About Us</h2>
      </div>
      <div className="flex justify-center items-center mb-4">
        <img src='ladybug1.png' alt="Ladybug" style={{ height: '384px', width: '480px' }} />
        <div className="text-left mr-96 ml-18 mx-auto">
          <h3 className="text-2xl mt-12 font-bold font-poppins" style={{ fontSize: '36px'}}>Klasifikasi Serangga</h3>
          <p className="text-gray-700 text-left font-poppins mt-4 leading-[150%]" style={{ fontSize: '22px'}}>
            Proyek kami berfokus pada pengembangan model prediksi untuk mengidentifikasi jenis serangga secara akurat menggunakan teknik Machine Learning. Dengan menganalisis berbagai fitur dan pola dalam data, model kami dapat membedakan berbagai jenis serangga dengan akurat. Proyek ini melibatkan pengumpulan data ekstensif tentang karakteristik serangga, pelatihan dan pengujian model kami, serta peningkatan akurasinya secara terus-menerus melalui penyempurnaan iteratif.
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <img src='Bulat3.png' alt="Bulat" style={{ height: '168px', width: '100px' }} />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src='petak1.png' alt="Bulat" style={{ height: '39px', width: '638px' }} />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src='ladybug2.png' alt="Ladybug" style={{ height: '325px', width: '217px' }} />
      </div>
    </div>
  );
};

export default AboutUs;