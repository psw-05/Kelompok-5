import React, { useState } from "react";
import "./latihansoal.css";

const LatihanSoal3 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan pengaturan pada tumbuhan?",
      options: [
        { label: "A. Proses yang memungkinkan tumbuhan berkembang biak secara seksual.", value: "A" },
        { label: "B. Proses yang memungkinkan tumbuhan merespons dan menyesuaikan diri dengan perubahan lingkungan.", value: "B", isCorrect: true },
        { label: "C. Proses fotosintesis yang terjadi pada tumbuhan.", value: "C" },
        { label: "D. Proses pengaturan suhu tubuh pada tumbuhan.", value: "D" },
      ],
      explanation: "Pengaturan pada tumbuhan melibatkan proses adaptasi terhadap perubahan lingkungan untuk menjaga keseimbangan internal tumbuhan.",
    },
    {
      question: "Apa peran hormon auksin dalam tumbuhan?",
      options: [
        { label: "A. Merangsang pembentukan bunga pada tumbuhan.", value: "A" },
        { label: "B. Mengatur pemanjangan sel pada ujung batang dan akar.", value: "B", isCorrect: true },
        { label: "C. Menyebabkan penguapan air melalui stomata.", value: "C" },
        { label: "D. Meningkatkan pembelahan sel pada tunas lateral.", value: "D" },
      ],
      explanation: "Auksin bertanggung jawab dalam mengatur pemanjangan sel, terutama pada ujung batang dan akar, serta berperan dalam fototropisme dan gravitropisme.",
    },
    {
      question: "Apa fungsi utama stomata pada tumbuhan?",
      options: [
        { label: "A. Menyimpan cadangan makanan.", value: "A" },
        { label: "B. Mengatur pernapasan pada tumbuhan.", value: "B" },
        { label: "C. Mengatur pertukaran gas dan transpirasi.", value: "C", isCorrect: true },
        { label: "D. Menghasilkan klorofil untuk fotosintesis.", value: "D" },
      ],
      explanation: "Stomata berperan dalam pertukaran gas (CO₂ dan O₂) serta mengatur penguapan air (transpirasi) untuk menjaga keseimbangan air dalam tubuh tumbuhan.",
    },
    {
      question: "Fototropisme pada tumbuhan menyebabkan pertumbuhannya menuju sumber cahaya. Hormon yang paling berperan dalam proses ini adalah:",
      options: [
        { label: "A. Giberelin", value: "A" },
        { label: "B. Auksin", value: "B", isCorrect: true },
        { label: "C. Sitokinin", value: "C" },
        { label: "D. Asam absisat", value: "D" },
      ],
      explanation: "Auksin mengatur pertumbuhan sel pada sisi batang yang tidak terkena cahaya, yang menyebabkan tumbuhan tumbuh menuju cahaya (fototropisme positif).",
    },
    {
      question: "Hormon giberelin berperan dalam perkecambahan biji dengan cara:",
      options: [
        { label: "A. Merangsang pembelahan sel pada tunas lateral.", value: "A" },
        { label: "B. Mengatur pertumbuhan akar yang lebih cepat.", value: "B" },
        { label: "C. Memecah cadangan makanan dalam biji untuk mendukung perkecambahan.", value: "C", isCorrect: true },
        { label: "D. Menghambat proses fotosintesis pada biji.", value: "D" },
      ],
      explanation: "Giberelin merangsang perkecambahan biji dengan memecah cadangan makanan dalam biji, memberikan energi untuk pertumbuhan awal.",
    },
    {
      question: "Apa yang dimaksud dengan gravitropisme pada tumbuhan?",
      options: [
        { label: "A. Pertumbuhan tumbuhan menuju cahaya.", value: "A" },
        { label: "B. Pertumbuhan tumbuhan terhadap gaya gravitasi.", value: "B", isCorrect: true },
        { label: "C. Perubahan bentuk tumbuhan akibat suhu.", value: "C" },
        { label: "D. Pergerakan tumbuhan terhadap air.", value: "D" },
      ],
      explanation: "Gravitropisme adalah respons tumbuhan terhadap gaya gravitasi, yang menyebabkan akar tumbuh ke bawah dan batang tumbuh ke atas.",
    },
    {
      question: "Hormon sitokinin berfungsi untuk:",
      options: [
        { label: "A. Merangsang pembelahan sel.", value: "A", isCorrect: true },
        { label: "B. Mengatur pertumbuhan akar.", value: "B" },
        { label: "C. Menghambat pertumbuhan tanaman.", value: "C" },
        { label: "D. Meningkatkan proses fotosintesis.", value: "D" },
      ],
      explanation: "Sitokinin berfungsi merangsang pembelahan sel dan memperlambat proses penuaan pada tumbuhan.",
    },
    {
      question: "Apa yang terjadi jika tumbuhan tidak dapat menghasilkan hormon etilen?",
      options: [
        { label: "A. Tumbuhan tidak dapat tumbuh ke atas.", value: "A" },
        { label: "B. Tumbuhan tidak dapat mengalami pematangan buah.", value: "B", isCorrect: true },
        { label: "C. Tumbuhan akan mati.", value: "C" },
        { label: "D. Tumbuhan akan tumbuh lebih cepat.", value: "D" },
      ],
      explanation: "Etilen adalah hormon yang berperan dalam pematangan buah. Tanpa etilen, buah tidak dapat matang dengan baik.",
    },
    {
      question: "Apa yang dimaksud dengan transpiras pada tumbuhan?",
      options: [
        { label: "A. Proses penguapan air melalui stomata.", value: "A", isCorrect: true },
        { label: "B. Proses penyimpanan air dalam akar.", value: "B" },
        { label: "C. Proses fotosintesis pada daun.", value: "C" },
        { label: "D. Proses pengambilan air dari tanah.", value: "D" },
      ],
      explanation: "Transpirasi adalah proses penguapan air melalui stomata yang membantu mengatur suhu dan keseimbangan air pada tumbuhan.",
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
          <p>Skor Anda: {score}/{questions.length}</p>
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
                answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""
              }`}
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

export default LatihanSoal3;
