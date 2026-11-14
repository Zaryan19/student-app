import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. Implementasi useState untuk menyimpan array of objects (minimal 5 data)
  const [mahasiswaList] = useState([
    {
      nim: '20230801001',
      nama: 'Budi Santoso',
      noHp: '081234567890',
      email: 'budi.santoso@univ.ac.id',
      alamat: 'Jl. Merdeka No. 10, Jakarta',
      prodi: 'Teknik Informatika',
      tahunMasuk: 2023,
    },
    {
      nim: '20230801002',
      nama: 'Siti Aminah',
      noHp: '081298765432',
      email: 'siti.aminah@univ.ac.id',
      alamat: 'Jl. Sudirman No. 45, Bandung',
      prodi: 'Sistem Informasi',
      tahunMasuk: 2023,
    },
    {
      nim: '20220801015',
      nama: 'Andi Wijaya',
      noHp: '085611223344',
      email: 'andi.wijaya@univ.ac.id',
      alamat: 'Jl. Diponegoro No. 88, Surabaya',
      prodi: 'Teknik Informatika',
      tahunMasuk: 2022,
    },
    {
      nim: '20240801009',
      nama: 'Rina Marlina',
      noHp: '087755667788',
      email: 'rina.marlina@univ.ac.id',
      alamat: 'Jl. Gajah Mada No. 12, Yogyakarta',
      prodi: 'Ilmu Komputer',
      tahunMasuk: 2024,
    },
    {
      nim: '20210801033',
      nama: 'Dedi Kurniawan',
      noHp: '081344556677',
      email: 'dedi.k@univ.ac.id',
      alamat: 'Jl. Ahmad Yani No. 99, Medan',
      prodi: 'Teknologi Informasi',
      tahunMasuk: 2021,
    },
  ]);

  // 2. Implementasi useState untuk menyimpan waktu saat ini
  const [currentTime, setCurrentTime] = useState(new Date());

  // 3. Implementasi useEffect untuk Live Clock dengan Cleanup
  useEffect(() => {
    // Menjalankan interval setiap 1000ms (1 detik)
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function: wajib ada untuk mencegah memory leak saat komponen di-unmount
    return () => {
      clearInterval(timerId);
    };
  }, []); // Dependency array kosong [] memastikan effect hanya berjalan sekali saat mount

  return (
    <div className="container">
      {/* Header & Subheader */}
      <header className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      {/* Baris Informasi: Jumlah Mahasiswa & Jam Digital */}
      <div className="info-bar">
        <p className="student-count">
          Total Mahasiswa: <strong>{mahasiswaList.length}</strong>
        </p>
        <p className="live-clock">
          Waktu Saat Ini: <strong>{currentTime.toLocaleTimeString('id-ID')}</strong>
        </p>
      </div>

      {/* Tabel Data Mahasiswa */}
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. Hp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {/* Looping data menggunakan .map() */}
            {mahasiswaList.map((mhs) => (
              // Menggunakan NIM sebagai key unik
              <tr key={mhs.nim}>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.noHp}</td>
                <td>{mhs.email}</td>
                <td>{mhs.alamat}</td>
                <td>{mhs.prodi}</td>
                <td>{mhs.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;