import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan transportasi zat dalam tubuh manusia?",
      options: [
        { label: "A. Proses pencernaan makanan", value: "A" },
        { label: "B. Proses pengangkutan zat-zat penting ke seluruh tubuh", value: "B", isCorrect: true },
        { label: "C. Proses penyerapan nutrisi di usus", value: "C" },
        { label: "D. Proses ekskresi zat sisa", value: "D" },
      ],
      explanation: "Transportasi zat dalam tubuh manusia adalah proses pengangkutan zat-zat penting seperti oksigen, nutrisi, dan hormon ke seluruh bagian tubuh melalui sistem peredaran darah.",
    },
    {
      question: "Apa fungsi utama hemoglobin dalam darah?",
      options: [
        { label: "A. Mengangkut karbon dioksida", value: "A" },
        { label: "B. Mengangkut oksigen", value: "B", isCorrect: true },
        { label: "C. Mengatur pH darah", value: "C" },
        { label: "D. Memproduksi sel darah merah", value: "D" },
      ],
      explanation: "Hemoglobin adalah protein yang terdapat dalam sel darah merah dan berfungsi utama untuk mengangkut oksigen dari paru-paru ke seluruh tubuh.",
    },
    {
      question: "Di mana proses pertukaran gas (oksigen dan karbon dioksida) terjadi dalam tubuh manusia?",
      options: [
        { label: "A. Di jantung", value: "A" },
        { label: "B. Di paru-paru", value: "B", isCorrect: true },
        { label: "C. Di hati", value: "C" },
        { label: "D. Di ginjal", value: "D" },
      ],
      explanation: "Proses pertukaran gas terjadi di paru-paru, tepatnya di alveolus, di mana oksigen dari udara masuk ke dalam darah dan karbon dioksida dikeluarkan dari darah ke udara.",
    },
    {
      question: "Zat apa yang diangkut oleh sistem limfatik?",
      options: [
        { label: "A. Hormon", value: "A" },
        { label: "B. Oksigen", value: "B" },
        { label: "C. Lemak dan limfa", value: "C", isCorrect: true },
        { label: "D. Karbon dioksida", value: "D" },
      ],
      explanation: "Sistem limfatik berfungsi untuk mengangkut lemak yang diserap dari usus serta limfa, yang mengandung sel-sel imun, dari jaringan tubuh kembali ke aliran darah.",
    },
    {
      question: "Apa yang terjadi pada sel-sel tubuh saat kekurangan oksigen?",
      options: [
        { label: "A. Sel-sel akan membelah lebih cepat", value: "A" },
        { label: "B. Sel-sel akan mengalami kematian", value: "B", isCorrect: true },
        { label: "C. Sel-sel akan berfungsi lebih efisien", value: "C" },
        { label: "D. Sel-sel akan menghasilkan energi melalui respirasi aerob", value: "D" },
      ],
      explanation: "Kekurangan oksigen pada sel-sel tubuh dapat menyebabkan gangguan fungsi sel dan akhirnya kematian sel, karena sel tidak dapat melakukan respirasi aerob yang diperlukan untuk menghasilkan energi.",
    },
    {
      question: "Apa fungsi utama pembuluh darah kapiler?",
      options: [
        { label: "A. Mengangkut darah kembali ke jantung", value: "A" },
        { label: "B. Tempat pertukaran zat antara darah dan jaringan", value: "B", isCorrect: true },
        { label: "C. Menyimpan darah cadangan", value: "C" },
        { label: "D. Mengatur suhu tubuh", value: "D" },
      ],
      explanation: "Pembuluh darah kapiler adalah tempat utama terjadinya pertukaran zat seperti oksigen, karbon dioksida, nutrisi, dan limbah metabolisme antara darah dan jaringan tubuh.",
    },
    {
      question: "Apa yang dimaksud dengan cairan limfa?",
      options: [
        { label: "A. Cairan yang mengangkut oksigen dalam darah", value: "A" },
        { label: "B. Cairan yang membawa limfosit dan lemak", value: "B", isCorrect: true },
        { label: "C. Cairan yang membantu proses pencernaan", value: "C" },
        { label: "D. Cairan yang diproduksi oleh hati", value: "D" },
      ],
      explanation: "Cairan limfa adalah cairan yang mengandung limfosit (sel darah putih) dan lemak, yang diangkut melalui sistem limfatik untuk menjaga keseimbangan cairan dan melawan infeksi.",
    },
    {
      question: "Apa peran utama plasma darah?",
      options: [
        { label: "A. Mengangkut oksigen", value: "A" },
        { label: "B. Membawa nutrisi, hormon, dan sisa metabolisme", value: "B", isCorrect: true },
        { label: "C. Membekukan darah", value: "C" },
        { label: "D. Menghancurkan bakteri", value: "D" },
      ],
      explanation: "Plasma darah membawa berbagai zat penting seperti nutrisi, hormon, dan limbah metabolisme ke seluruh tubuh.",
    },
    {
      question: "Bagaimana karbon dioksida dikeluarkan dari tubuh?",
      options: [
        { label: "A. Melalui kulit", value: "A" },
        { label: "B. Melalui paru-paru", value: "B", isCorrect: true },
        { label: "C. Melalui ginjal", value: "C" },
        { label: "D. Melalui hati", value: "D" },
      ],
      explanation: "Karbon dioksida, sebagai produk sisa metabolisme, dikeluarkan dari tubuh melalui paru-paru saat bernapas.",
    },
    {
      question: "Apa yang terjadi di glomerulus ginjal?",
      options: [
        { label: "A. Penyerapan oksigen ke dalam darah", value: "A" },
        { label: "B. Penyaringan darah untuk membentuk urin", value: "B", isCorrect: true },
        { label: "C. Pengangkutan nutrisi ke jaringan", value: "C" },
        { label: "D. Pengeluaran hormon insulin", value: "D" },
      ],
      explanation: "Glomerulus adalah struktur di ginjal yang berfungsi untuk menyaring darah dan memulai pembentukan urin.",
    },
  ];
  

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option.value;
    setAnswers(updatedAnswers);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsCorrect(option.isCorrect || false);
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(answers[currentQuestionIndex + 1] !== undefined);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] !== undefined);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };
  const resetQuiz = () => {
    setAnswers([]);
    setIsAnswered(false);
    setIsCorrect(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>
            Skor Anda: {score}/{questions.length}
          </p> 

          <button className="latihan-soal1-reset-button" onClick={resetQuiz}>
          Ulangi Latihan
        </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Mode Bionik</h1>
        <div className="latihan-soal1-question">
          <h2>
            Soal Nomor {currentQuestionIndex + 1}/{questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${
                answers[currentQuestionIndex] === option.value
                  ? "latihan-soal1-selected-answer"
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex] !== undefined}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] !== undefined && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
        <button
  className="latihan-soal1-nav-button prev"
  onClick={goToPreviousQuestion}
  disabled={currentQuestionIndex === 0}
>
  ← Soal Sebelumnya
</button>
<button
  className="latihan-soal1-nav-button next"
  onClick={
    currentQuestionIndex === questions.length - 1
      ? handleFinishQuiz
      : goToNextQuestion
  }
>
  {currentQuestionIndex === questions.length - 1
    ? "Selesai"
    : "Soal Selanjutnya →"}
</button>

        </div>
      </div>
    </div>
  );
};
export default LatihanSoal;
