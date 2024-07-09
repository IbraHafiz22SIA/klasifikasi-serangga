import React, { useState } from 'react';

const FileInput = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('');
  const [confidence, setConfidence] = useState('');
  const [hasil, setHasil] = useState('');
  const [description, setDescription] = useState('');

  const descriptions = {
    'Belalang': {
      category: 'Predator',
      manfaat: 'Belalang dapat membantu mengontrol populasi tanaman tertentu dengan memakan mereka dalam jumlah besar.',
      dampak: 'Dapat menjadi hama pertanian yang merusak tanaman dalam jumlah besar, menyebabkan kerugian ekonomi yang signifikan bagi petani.'
    },
    'Kumbang': {
      category: 'Predator',
      manfaat: 'Beberapa spesies kumbang berperan dalam pengendalian hama alami dengan memakan serangga yang merusak tanaman.',
      dampak: 'Namun, beberapa spesies kumbang juga dapat menjadi hama yang merusak tanaman, kayu, dan produk pertanian lainnya.'
    },
    'Kupu-kupu': {
      category: 'Penyerbuk',
      manfaat: 'Kupu-kupu berperan penting dalam penyerbukan bunga, membantu dalam reproduksi tanaman berbunga dan meningkatkan keanekaragaman hayati.',
      dampak: 'Larva kupu-kupu dapat merusak tanaman dengan memakan daun, tetapi kerusakan ini seringkali diimbangi oleh manfaat penyerbukan yang mereka berikan.'
    },
    'Lebah': {
      category: 'Penyerbuk',
      manfaat: 'Lebah sangat penting untuk penyerbukan banyak tanaman pangan, yang mempengaruhi produksi makanan dan keberlanjutan ekosistem. Mereka juga menghasilkan madu yang memiliki nilai ekonomi dan kesehatan.',
      dampak: 'Sengatan lebah dapat menyebabkan reaksi alergi pada beberapa orang, yang dalam kasus yang parah dapat berakibat fatal. Selain itu, populasi lebah yang menurun dapat berdampak negatif pada produksi tanaman.'
    },
    'Nyamuk': {
      category: 'Hama',
      manfaat: 'Meskipun sering dianggap sebagai hama, nyamuk juga merupakan bagian penting dari rantai makanan, menjadi sumber makanan bagi berbagai hewan seperti ikan, burung, dan kelelawar.',
      dampak: 'Nyamuk dapat menyebarkan penyakit berbahaya seperti malaria, demam berdarah, dan Zika, yang berdampak signifikan pada kesehatan manusia dan dapat menyebabkan kematian.'
    },
    'Ulat': {
      category: 'Hama',
      manfaat: 'Ulat memainkan peran dalam ekosistem sebagai makanan bagi banyak spesies hewan lain, termasuk burung dan mamalia kecil.',
      dampak: 'Ulat dapat menyebabkan kerusakan besar pada tanaman dengan memakan daun dan batang, yang dapat menghambat pertumbuhan tanaman dan mengurangi hasil panen.'
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (typeof onFileChange === 'function') {
      onFileChange(file);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    const apiUrl = 'https://9921-34-74-103-217.ngrok-free.app/predict';

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        setStatus('<div style="text-align:center font-roboto text-28;">File berhasil diproses!</div>');
      } else {
        setStatus('<div style="text-align:center font-roboto text-28;">File gagal diproses!</div>');
      }

      setConfidence(json.confidence);
      let resultLabel = 'Tidak Terdeteksi';
      switch (json.label) {
        case 0:
          resultLabel = 'Belalang';
          break;
        case 1:
          resultLabel = 'Kumbang';
          break;
        case 2:
          resultLabel = 'Kupu-kupu';
          break;
        case 3:
          resultLabel = 'Lebah';
          break;
        case 4:
          resultLabel = 'Nyamuk';
          break;
        case 5:
          resultLabel = 'Ulat';
          break;
        default:
          resultLabel = 'Tidak Terdeteksi';
      }
      setHasil(resultLabel);

      const insectInfo = descriptions[resultLabel] || { category: 'Tidak ada', manfaat: 'Tidak ada', dampak: 'Tidak ada' };
      const fullDescription = `
        <b>Kategori:</b> ${insectInfo.category} <br/>
        <b>Manfaat:</b> ${insectInfo.manfaat} <br/>
        <b>Dampak:</b> ${insectInfo.dampak}
      `;
      setDescription(fullDescription);
    } catch (error) {
      console.error('Error:', error);
      setStatus('<div style="text-align:center;">File gagal diproses!</div>');
    }
  };

  return (
    <div id="FileInput" className="flex flex-col items-center justify-center mt-10 mb-10 p-6">
      <h1 className="font-semibold text-center mb-6 text-gray-800 font-roboto" style={{ fontSize: '33px' }}>
        Input Gambar Untuk Klasifikasi
      </h1>
      <div className="w-full max-w-sm rounded-lg p-6 shadow-lg bg-white transition-all hover:shadow-2xl border-2 border-dashed border-orange-300">
        <label htmlFor="file" className="w-full flex flex-col items-center px-4 py-10 bg-orange-50 text-orange-700 rounded-lg tracking-wide border-2 border-dashed border-orange-300 cursor-pointer hover:bg-orange-100">
          <svg className="w-12 h-12 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-lg leading-normal font-poppins">Masukkan Gambar</span>
          <input
            id="file"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        {selectedFile && (
          <div className="mt-4 flex flex-col items-center">
            <div className="overflow-hidden rounded-lg border-2 border-dashed border-orange-300 shadow-lg">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="max-w-full h-auto"
                style={{ maxHeight: '200px' }}
              />
            </div>
            <p className="text-sm mt-2 text-center">File yang dipilih: {selectedFile.name}</p>
          </div>
        )}
        <button
          className="bg-[#B88E2F] hover:bg-[#a87e2a] text-[#FCFFFF] font-bold py-2 px-4 rounded mt-6 transition-all hover:scale-105 w-full" style={{ fontSize: '18px' }}
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
      {status && (
        <div className="mt-8 bg-[#8EBA43] p-6 rounded-lg shadow-lg text-center w-full max-w-sm" style={{ color: '#FCFFFF' }}>
          <p dangerouslySetInnerHTML={{ __html: status }} />
          <div className="mt-4">
            <h2 className="text-xl font-bold font-roboto" style={{ fontSize: '18px' }}>Hasil Identifikasi</h2>
            <p className="text-lg mt-2 font-bold font-roboto" style={{ fontSize: '18px' }}><strong>Jenis:</strong> {hasil}</p>
            <p className="text-lg mt-2 font-bold font-roboto" style={{ fontSize: '18px' }}><strong>confidence:</strong> {confidence}%</p>
          </div>
          <div className="mt-6 bg-[#7AAA3B] p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-bold">Detail Deskripsi</h3>
            <p className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FileInput;
