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
      question: "Hormon apa yang bertanggung jawab untuk merangsang ovulasi pada wanita?",
      options: [
        { label: "A. Estrogen", value: "A" },
        { label: "B. Progesteron", value: "B" },
        { label: "C. Luteinizing Hormone (LH)", value: "C", isCorrect: true },
        { label: "D. Follicle Stimulating Hormone (FSH)", value: "D" },
      ],
      explanation: "Luteinizing Hormone (LH) adalah hormon yang berperan penting dalam merangsang ovulasi, yaitu pelepasan sel telur dari ovarium.",
    },
    {
      question: "Hormon yang dihasilkan oleh testis dan berfungsi untuk memproduksi sperma adalah?",
      options: [
        { label: "A. Estrogen", value: "A" },
        { label: "B. Testosteron", value: "B", isCorrect: true },
        { label: "C. Progesteron", value: "C" },
        { label: "D. Luteinizing Hormone (LH)", value: "D" },
      ],
      explanation: "Testosteron adalah hormon yang dihasilkan oleh testis dan berperan dalam perkembangan dan pematangan sperma, serta pengembangan karakteristik seksual pria.",
    },
    {
      question: "Apa fungsi dari hormon estrogen dalam siklus menstruasi?",
      options: [
        { label: "A. Mempromosikan pertumbuhan folikel dan mempersiapkan endometrium", value: "A", isCorrect: true },
        { label: "B. Menstabilkan kadar progesteron", value: "B" },
        { label: "C. Menghambat ovulasi", value: "C" },
        { label: "D. Menyebabkan menstruasi", value: "D" },
      ],
      explanation: "Estrogen berfungsi untuk mempromosikan pertumbuhan folikel ovarium dan mempersiapkan lapisan endometrium untuk kemungkinan implantasi sel telur yang dibuahi.",
    },
    {
      question: "Hormon mana yang dihasilkan oleh korpus luteum dan berperan penting dalam mempertahankan kehamilan?",
      options: [
        { label: "A. Estrogen", value: "A" },
        { label: "B. Progesteron", value: "B", isCorrect: true },
        { label: "C. Luteinizing Hormone (LH)", value: "C" },
        { label: "D. Follicle Stimulating Hormone (FSH)", value: "D" },
      ],
      explanation: "Progesteron dihasilkan oleh korpus luteum setelah ovulasi dan berperan penting dalam mempertahankan kehamilan dengan mempersiapkan dan menjaga lapisan endometrium.",
    },
    {
      question: "Apa yang terjadi jika kadar hormon progesteron menurun drastis pada wanita hamil?",
      options: [
        { label: "A. Kehamilan akan berlanjut dengan baik", value: "A" },
        { label: "B. Terjadi ovulasi", value: "B" },
        { label: "C. Terjadi keguguran", value: "C", isCorrect: true },
        { label: "D. Tidak ada perubahan yang signifikan", value: "D" },
      ],
      explanation: "Penurunan kadar progesteron yang drastis dapat menyebabkan keguguran, karena hormon ini penting untuk mempertahankan kehamilan dengan menjaga lapisan endometrium.",
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
