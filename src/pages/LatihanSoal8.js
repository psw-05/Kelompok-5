import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan pertumbuhan pada makhluk hidup?",
      options: [
        { label: "A. Perubahan posisi makhluk hidup", value: "A" },
        { label: "B. Proses pembelahan sel yang tidak teratur", value: "B" },
        { label: "C. Penambahan ukuran dan massa tubuh makhluk hidup", value: "C", isCorrect: true },
        { label: "D. Perubahan tingkah laku makhluk hidup", value: "D" },
      ],
      explanation: "Pertumbuhan pada makhluk hidup adalah proses penambahan ukuran dan massa tubuh yang terjadi secara teratur dan terukur, biasanya diakibatkan oleh pembelahan sel.",
    },
    {
      question: "Apa yang dimaksud dengan perkembangan pada makhluk hidup?",
      options: [
        { label: "A. Proses perubahan fisik dan fisiologis yang terjadi seiring waktu", value: "A", isCorrect: true },
        { label: "B. Proses bertambahnya ukuran tubuh", value: "B" },
        { label: "C. Proses reproduksi yang terjadi pada makhluk hidup", value: "C" },
        { label: "D. Proses adaptasi terhadap lingkungan", value: "D" },
      ],
      explanation: "Perkembangan pada makhluk hidup merujuk pada proses perubahan fisik dan fisiologis yang terjadi seiring waktu, termasuk perubahan dalam struktur, fungsi, dan tingkah laku.",
    },
    {
      question: "Hormon apa yang berperan penting dalam pertumbuhan tanaman?",
      options: [
        { label: "A. Estrogen", value: "A" },
        { label: "B. Testosteron", value: "B" },
        { label: "C. Auksin", value: "C", isCorrect: true },
        { label: "D. Insulin", value: "D" },
      ],
      explanation: "Auksin adalah hormon tumbuhan yang berperan penting dalam merangsang pertumbuhan, terutama dalam proses pemanjangan sel dan pengaturan pertumbuhan akar dan batang.",
    },
    {
      question: "Apa yang dimaksud dengan metamorfosis?",
      options: [
        { label: "A. Proses pertumbuhan yang terjadi pada tanaman", value: "A" },
        { label: "B. Perubahan bentuk dan struktur tubuh yang signifikan selama siklus hidup", value: "B", isCorrect: true },
        { label: "C. Proses pembelahan sel yang tidak teratur", value: "C" },
        { label: "D. Proses reproduksi pada hewan", value: "D" },
      ],
      explanation: "Metamorfosis adalah proses perubahan bentuk dan struktur tubuh yang signifikan selama siklus hidup suatu organisme, seperti yang terjadi pada kupu-kupu dari telur menjadi larva, pupa, dan akhirnya menjadi kupu-kupu dewasa.",
    },
    {
      question: "Apa yang dapat mempengaruhi tumbuh kembang makhluk hidup?",
      options: [
        { label: "A. Hanya faktor genetik", value: "A" },
        { label: "B. Hanya faktor lingkungan", value: "B" },
        { label: "C. Faktor genetik dan lingkungan", value: "C", isCorrect: true },
        { label: "D. Tidak ada faktor yang mempengaruhi", value: "D" },
      ],
      explanation: "Tumbuh kembang makhluk hidup dipengaruhi oleh kombinasi faktor genetik (yang diwariskan dari orang tua) dan faktor lingkungan (seperti nutrisi, suhu, cahaya, dan kelembapan).",
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
