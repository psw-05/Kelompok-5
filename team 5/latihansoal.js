import React from "react";
import { useNavigate } from "react-router-dom";
import "./latihansoal.css";


const LatihanSoal = () => {
  const navigate = useNavigate();

  const babList = [
    { id: 1, title: "Bab 1", description: "Struktur dan Fungsi Sel", link: "/LatihanSoal1" },
    { id: 2, title: "Bab 2", description: "Pergerakan Zat melalui Membran sel", link: "/LatihanSoal2" },
    { id: 3, title: "Bab 3", description: "Proses Pengaturan pada Tumbuhan", link: "/LatihanSoal3" },
    { id: 4, title: "Bab 4", description: "Transpor dan Pertukaran Zat pada Manusia", link: "/LatihanSoal4" },
    { id: 5, title: "Bab 5", description: "Sistem Pertahanan Tubuh terhadap Penyakit", link: "/LatihanSoal5" },
    { id: 6, title: "Bab 6", description: "Mobilitas pada Manusia", link: "/latihanSoal6" },
    { id: 7, title: "Bab 7", description: "Hormon dalam Reproduksi Manusia", link: "/LatihanSoal7" },
    { id: 8, title: "Bab 8", description: "Tumbuh Kembang Makhluk Hidup", link: "/LatihanSoal8" },
  ];

  return (
    <div className="latihan-soal-container">
      <video className="video-background" autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
      </video>
      <h1>Siap Mengasah Kemampuanmu?</h1>
      <div className="bab-list">
        {babList.map((bab) => (
          <div key={bab.id} className="bab-card">
            <h2>{bab.title}</h2>
            <p>{bab.description}</p>
            <button onClick={() => navigate(bab.link)}>Mulai Latihan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatihanSoal;







