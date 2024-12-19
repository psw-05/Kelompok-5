import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal2 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan transportasi pasif dalam pergerakan zat pada sel?",
      options: [
        { label: "A. Pergerakan zat melawan gradien konsentrasi dengan memerlukan energi", value: "A" },
        { label: "B. Pergerakan zat tanpa memerlukan energi", value: "B", isCorrect: true },
        { label: "C. Pergerakan zat menggunakan vesikel", value: "C" },
        { label: "D. Pergerakan zat melalui saluran protein", value: "D" },
      ],
      explanation: "Transportasi pasif adalah pergerakan zat yang tidak memerlukan energi. Zat bergerak mengikuti gradien konsentrasi, dari daerah dengan konsentrasi tinggi ke daerah dengan konsentrasi rendah. Contoh dari transportasi pasif adalah difusi, osmosis, dan fasilitasi difusi.",
    },
    {
      question: "Apa yang dimaksud dengan osmosis?",
      options: [
        { label: "A. Pergerakan molekul air melalui membran semipermeabel dari konsentrasi air tinggi ke rendah", value: "A", isCorrect: true },
        { label: "B. Pergerakan molekul air dari daerah dengan konsentrasi rendah ke tinggi", value: "B" },
        { label: "C. Pergerakan oksigen dari luar sel ke dalam sel", value: "C" },
        { label: "D. Pergerakan glukosa melalui protein pembawa", value: "D" },
      ],
      explanation: "Osmosis adalah pergerakan molekul air melalui membran semipermeabel, yang memungkinkan air bergerak dari daerah dengan konsentrasi air tinggi ke daerah dengan konsentrasi air rendah. Proses ini penting untuk menjaga keseimbangan cairan dalam sel.",
    },
    {
      question: "Manakah dari berikut ini yang memerlukan energi dalam proses transportasi zat melintasi membran sel?",
      options: [
        { label: "A. Diffusi", value: "A" },
        { label: "B. Osmosis", value: "B" },
        { label: "C. Pompa Natrium-Kalium", value: "C", isCorrect: true },
        { label: "D. Fasilitasi difusi", value: "D" },
      ],
      explanation: "Pompa Natrium-Kalium adalah mekanisme transportasi aktif yang memerlukan energi dalam bentuk ATP. Proses ini memindahkan ion natrium keluar dan ion kalium masuk ke dalam sel, meskipun melawan gradien konsentrasi. Berbeda dengan transportasi pasif yang tidak memerlukan energi.",
    },
    {
      question: "Jika terjadi gangguan pada protein transportasi seperti pada penyakit cystic fibrosis, bagaimana hal ini dapat mempengaruhi pergerakan zat dalam sel?",
      options: [
        { label: "A. Molekul air tidak dapat bergerak keluar dari sel ", value: "A" },
        { label: "B. Proses osmosis terhambat, menyebabkan pembengkakan sel", value: "B" },
        { label: "C.Transportasi zat penting seperti klorida terganggu ", value: "C", isCorrect: true },
        { label: "D.Endositosis tidak dapat mengambil zat besar ke dalam sel", value: "D" },
      ],
      explanation: "Pada penyakit cystic fibrosis, terdapat mutasi pada protein pembawa yang mengganggu transportasi zat-zat penting seperti ion klorida. Hal ini mengganggu keseimbangan ion dalam sel, yang berakibat pada ketidakseimbangan cairan tubuh dan gangguan dalam fungsi berbagai organ.",
    },
    {
      question: "Jika sebuah sel mengalami gangguan dalam mekanisme osmosis, apa yang dapat terjadi pada sel tersebut?",
      options: [
        { label: "A.Sel tidak dapat membentuk vesikel ", value: "A" },
        { label: "B.Sel akan mengalami pembengkakan atau dehidrasi ", value: "B", isCorrect: true },
        { label: "C.Sel tidak bisa menyintesis protein ", value: "C" },
        { label: "D.Sel tidak dapat membentuk membran semipermeabel", value: "D" },
      ],
      explanation: "Gangguan pada proses osmosis dapat menyebabkan ketidakseimbangan cairan dalam sel. Jika osmosis tidak berjalan dengan baik, sel bisa mengalami pembengkakan (jika terlalu banyak air masuk) atau dehidrasi (jika air keluar dari sel), yang dapat mengganggu fungsi normal sel.",
    },
    {
      question: "Apa yang dimaksud dengan transportasi aktif?",
      options: [
        { label: "A. Pergerakan zat melawan gradien konsentrasi dengan memerlukan energi", value: "A", isCorrect: true },
        { label: "B. Pergerakan zat dengan memanfaatkan energi dari sinyal luar", value: "B" },
        { label: "C. Pergerakan zat dengan bantuan protein pembawa", value: "C" },
        { label: "D. Pergerakan zat melalui saluran protein", value: "D" },
      ],
      explanation: "Transportasi aktif adalah pergerakan zat melawan gradien konsentrasi yang memerlukan energi, biasanya dalam bentuk ATP. Ini termasuk proses seperti pompa natrium-kalium.",
    },
    {
      question: "Manakah dari berikut ini yang merupakan contoh transportasi aktif?",
      options: [
        { label: "A. Osmosis", value: "A" },
        { label: "B. Diffusi", value: "B" },
        { label: "C. Pompa Proton", value: "C", isCorrect: true },
        { label: "D. Fasilitasi difusi", value: "D" },
      ],
      explanation: "Pompa proton adalah contoh transportasi aktif, yang memindahkan proton (ion H+) melawan gradien konsentrasi dengan menggunakan energi.",
    },
    {
      question: "Apa yang terjadi pada sel jika terjadi ketidakseimbangan dalam proses osmosis?",
      options: [
        { label: "A. Sel akan kehilangan air dan mengkerut", value: "A" },
        { label: "B. Sel akan membengkak dan bisa pecah", value: "B", isCorrect: true },
        { label: "C. Sel akan tetap stabil", value: "C" },
        { label: "D. Sel akan menghasilkan lebih banyak protein", value: "D" },
      ],
      explanation: "Ketidakseimbangan osmosis dapat menyebabkan sel membengkak jika air masuk ke dalam sel atau mengkerut jika air keluar dari sel.",
    },
    {
      question: "Bagaimana sel menjaga keseimbangan cairan melalui membran?",
      options: [
        { label: "A. Melalui mekanisme osmosis", value: "A", isCorrect: true },
        { label: "B. Melalui proses endositosis", value: "B" },
        { label: "C. Melalui difusi", value: "C" },
        { label: "D. Melalui transportasi aktif", value: "D" },
      ],
      explanation: "Sel menjaga keseimbangan cairan melalui osmosis, yang memungkinkan molekul air bergerak melintasi membran semipermeabel untuk menyeimbangkan konsentrasi zat di dalam dan luar sel.",
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
      setIsAnswered(answers[currentQuestionIndex + 1] ? true : false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] ? true : false);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const handleRestartQuiz = () => {
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setIsAnswered(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
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
              className={`latihan-soal1-answer-button ${answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""}`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex]}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${currentQuestion.options.find((opt) => opt.isCorrect)?.value}`}
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
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal2;
