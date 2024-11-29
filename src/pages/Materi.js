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
      question: "Apa yang dimaksud dengan mobilitas fisik?",
      options: [
        { label: "A. Kemampuan untuk berpindah tempat secara sosial", value: "A" },
        { label: "B. Kemampuan untuk bergerak dengan bebas dan efektif", value: "B", isCorrect: true },
        { label: "C. Kemampuan untuk berkomunikasi dengan orang lain", value: "C" },
        { label: "D. Kemampuan untuk mengakses informasi", value: "D" },
      ],
      explanation: "Mobilitas fisik merujuk pada kemampuan individu untuk bergerak dengan bebas dan efektif dalam melakukan aktivitas sehari-hari, seperti berjalan, berlari, dan melakukan gerakan lainnya.",
    },
    {
      question: "Apa fungsi utama sistem otot dalam mobilitas manusia?",
      options: [
        { label: "A. Menghasilkan energi", value: "A" },
        { label: "B. Menyimpan mineral", value: "B" },
        { label: "C. Menghasilkan gerakan", value: "C", isCorrect: true },
        { label: "D. Mengatur suhu tubuh", value: "D" },
      ],
      explanation: "Sistem otot berfungsi untuk menghasilkan gerakan dengan berkontraksi dan menarik tulang, sehingga memungkinkan individu untuk bergerak.",
    },
    {
      question: "Apa yang dapat terjadi pada mobilitas seseorang seiring bertambahnya usia?",
      options: [
        { label: "A. Meningkatnya kekuatan otot", value: "A" },
        { label: "B. Penurunan fleksibilitas dan kekuatan otot", value: "B", isCorrect: true },
        { label: "C. Peningkatan mobilitas sosial", value: "C" },
        { label: "D. Tidak ada perubahan signifikan", value: "D" },
      ],
      explanation: "Seiring bertambahnya usia, banyak orang mengalami penurunan fleksibilitas dan kekuatan otot, yang dapat mengurangi kemampuan mereka untuk bergerak dengan bebas.",
    },
    {
      question: "Sendi mana yang memungkinkan gerakan rotasi?",
      options: [
        { label: "A. Sendi engsel", value: "A" },
        { label: "B. Sendi peluru", value: "B" },
        { label: "C. Sendi geser", value: "C" },
        { label: "D. Sendi pivot", value: "D", isCorrect: true },
      ],
      explanation: "Sendi pivot memungkinkan gerakan rotasi, seperti yang terjadi pada sendi antara tulang leher dan tulang tengkorak.",
    },
    {
      question: "Apa yang dapat dilakukan untuk meningkatkan mobilitas pada usia lanjut?",
      options: [
        { label: "A. Menghindari aktivitas fisik", value: "A" },
        { label: "B. Melakukan latihan kekuatan dan fleksibilitas", value: "B", isCorrect: true },
        { label: "C. Mengurangi asupan nutrisi", value: "C" },
        { label: "D. Tidur lebih lama", value: "D" },
      ],
      explanation: "Melakukan latihan kekuatan dan fleksibilitas dapat membantu meningkatkan mobilitas pada usia lanjut dengan menjaga kekuatan otot dan fleksibilitas sendi.",
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

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>
            Skor Anda: {score}/{questions.length}
          </p> 
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
