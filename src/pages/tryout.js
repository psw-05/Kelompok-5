import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tryout.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Apa fungsi enzim katalase?", options: ["Memecah lemak", "Menguraikan hidrogen peroksida", "Mengubah amilum", "Mengangkut oksigen"], answer: "Menguraikan hidrogen peroksida" },
    { question: "2. Proses fotosintesis terjadi di bagian mana?", options: ["Kloroplas", "Sitoplasma", "Ribosom", "Mitokondria"], answer: "Kloroplas" },
    { question: "3. Unit terkecil dari makhluk hidup adalah?", options: ["Sel", "Jaringan", "Organ", "Sistem organ"], answer: "Sel" },
    { question: "4. Apa produk utama fotosintesis?", options: ["Glukosa dan oksigen", "Karbon dioksida", "Air dan oksigen", "ATP dan NADPH"], answer: "Glukosa dan oksigen" },
    { question: "5. Dimana terjadi proses glikolisis?", options: ["Sitoplasma", "Mitokondria", "Kloroplas", "Nukleus"], answer: "Sitoplasma" },
    { question: "6. Apa fungsi utama mitokondria?", options: ["Produksi energi", "Sintesis protein", "Fotosintesis", "Replikasi DNA"], answer: "Produksi energi" },
    { question: "7. Hormon apa yang berperan dalam pengaturan gula darah?", options: ["Insulin", "Adrenalin", "Kortisol", "Tiroksin"], answer: "Insulin" },
    { question: "8. Apa nama tahap pembelahan sel dimana kromosom berjajar di tengah sel?", options: ["Profase", "Metafase", "Anafase", "Telofase"], answer: "Metafase" },
    { question: "9. Apa fungsi stomata pada daun?", options: ["Mengatur pertukaran gas", "Menyerap air", "Mengangkut hasil fotosintesis", "Melindungi permukaan daun"], answer: "Mengatur pertukaran gas" },
    { question: "10. Apa nama organ yang menyaring darah pada sistem ekskresi?", options: ["Ginjal", "Hati", "Jantung", "Paru-paru"], answer: "Ginjal" },
    { question: "11. Pada respirasi aerob, molekul oksigen digunakan pada tahap?", options: ["Siklus Krebs", "Glikolisis", "Transpor elektron", "Fermentasi"], answer: "Transpor elektron" },
    { question: "12. Apa komponen utama penyusun membran sel?", options: ["Fosfolipid", "Protein", "Karbohidrat", "Kolesterol"], answer: "Fosfolipid" },
    { question: "13. Apa fungsi utama hemoglobin dalam darah?", options: ["Mengangkut oksigen", "Mengatur suhu tubuh", "Mengatur gula darah", "Melawan infeksi"], answer: "Mengangkut oksigen" },
    { question: "14. Apa produk akhir dari fermentasi alkohol?", options: ["Etanol dan karbon dioksida", "Asam laktat", "Air dan oksigen", "ATP"], answer: "Etanol dan karbon dioksida" },
    { question: "15. Organisme apa yang pertama kali muncul dalam rantai makanan?", options: ["Produsen", "Konsumen pertama", "Konsumen kedua", "Pengurai"], answer: "Produsen" },
    { question: "16. Jaringan apa yang berfungsi untuk mengangkut hasil fotosintesis?", options: ["Floem", "Xilem", "Epidermis", "Parenkim"], answer: "Floem" },
    { question: "17. Apa nama proses perpindahan molekul air melalui membran?", options: ["Osmosis", "Difusi", "Endositosis", "Eksositosis"], answer: "Osmosis" },
    { question: "18. Apa nama organ reproduksi jantan pada tumbuhan berbunga?", options: ["Benang sari", "Putik", "Kepala sari", "Ovarium"], answer: "Benang sari" },
    { question: "19. Apa yang terjadi pada tanaman jika stomata tertutup terlalu lama?", options: ["Fotosintesis menurun", "Penyerapan air meningkat", "Transpirasi meningkat", "Pertukaran gas meningkat"], answer: "Fotosintesis menurun" },
    { question: "20. Apa yang dimaksud dengan jaringan meristem?", options: ["Jaringan yang aktif membelah", "Jaringan pelindung", "Jaringan pengangkut", "Jaringan penyokong"], answer: "Jaringan yang aktif membelah" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    setShowResult(true);
  };

  const handleContinue = () => {
    setShowResult(false);
    setCurrentQuestion(0); 
    setScore(0); 
  };

  return (
    <div className="app">
      <h1>Tryout Biologi Kelas XI</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
          <button onClick={handleContinue} className="continue-button">Ulangi Tryout</button>
        </div>
      ) : (
        <>
          <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          />
        </>
      )}
    </div>
  );
};

export default Tryout;
