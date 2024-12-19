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
        {
          label: "B. Proses pengangkutan zat-zat penting ke seluruh tubuh",
          value: "B",
          isCorrect: true,
        },
        { label: "C. Proses penyerapan nutrisi di usus", value: "C" },
        { label: "D. Proses ekskresi zat sisa", value: "D" },
      ],
      explanation:
        "Transportasi zat dalam tubuh manusia adalah proses pengangkutan zat-zat penting seperti oksigen, nutrisi, dan hormon ke seluruh bagian tubuh melalui sistem peredaran darah.",
    },
    {
      question: "Apa fungsi utama hemoglobin dalam darah?",
      options: [
        { label: "A. Mengangkut karbon dioksida", value: "A" },
        { label: "B. Mengangkut oksigen", value: "B", isCorrect: true },
        { label: "C. Mengatur pH darah", value: "C" },
        { label: "D. Memproduksi sel darah merah", value: "D" },
      ],
      explanation:
        "Hemoglobin adalah protein yang terdapat dalam sel darah merah dan berfungsi utama untuk mengangkut oksigen dari paru-paru ke seluruh tubuh.",
    },
    {
      question:
        "Di mana proses pertukaran gas (oksigen dan karbon dioksida) terjadi dalam tubuh manusia?",
      options: [
        { label: "A. Di jantung", value: "A" },
        { label: "B. Di paru-paru", value: "B", isCorrect: true },
        { label: "C. Di hati", value: "C" },
        { label: "D. Di ginjal", value: "D" },
      ],
      explanation:
        "Proses pertukaran gas terjadi di paru-paru, tepatnya di alveolus, di mana oksigen dari udara masuk ke dalam darah dan karbon dioksida dikeluarkan dari darah ke udara.",
    },
    {
      question: "Zat apa yang diangkut oleh sistem limfatik?",
      options: [
        { label: "A. Hormon", value: "A" },
        { label: "B. Oksigen", value: "B" },
        { label: "C. Lemak dan limfa", value: "C", isCorrect: true },
        { label: "D. Karbon dioksida", value: "D" },
      ],
      explanation:
        "Sistem limfatik berfungsi untuk mengangkut lemak yang diserap dari usus serta limfa, yang mengandung sel-sel imun, dari jaringan tubuh kembali ke aliran darah.",
    },
    {
      question:
        "Apa yang terjadi pada sel-sel tubuh saat kekurangan oksigen?",
      options: [
        { label: "A. Sel-sel akan membelah lebih cepat", value: "A" },
        { label: "B. Sel-sel akan mengalami kematian", value: "B", isCorrect: true },
        { label: "C. Sel-sel akan berfungsi lebih efisien", value: "C" },
        { label: "D. Sel-sel akan menghasilkan energi melalui respirasi aerob", value: "D" },
      ],
      explanation:
        "Kekurangan oksigen pada sel-sel tubuh dapat menyebabkan gangguan fungsi sel dan akhirnya kematian sel, karena sel tidak dapat melakukan respirasi aerob yang diperlukan untuk menghasilkan energi.",
    },
    {
      question: "Apa yang dimaksud dengan sistem peredaran darah manusia?",
      options: [
        { label: "A. Sistem yang mengatur suhu tubuh", value: "A" },
        { label: "B. Sistem yang mengangkut oksigen dan nutrisi ke seluruh tubuh", value: "B", isCorrect: true },
        { label: "C. Sistem yang mengeluarkan zat sisa dari tubuh", value: "C" },
        { label: "D. Sistem yang memproduksi hormon", value: "D" },
      ],
      explanation:
        "Sistem peredaran darah manusia berfungsi untuk mengangkut oksigen, nutrisi, dan zat-zat penting lainnya ke seluruh tubuh serta mengeluarkan produk sampingan seperti karbon dioksida.",
    },
    {
      question: "Bagaimana proses transportasi oksigen dalam darah?",
      options: [
        { label: "A. Oksigen diikat oleh hemoglobin dalam darah", value: "A", isCorrect: true },
        { label: "B. Oksigen disalurkan oleh sel darah putih", value: "B" },
        { label: "C. Oksigen langsung diserap oleh jaringan tubuh", value: "C" },
        { label: "D. Oksigen dibawa oleh sistem limfatik", value: "D" },
      ],
      explanation:
        "Oksigen diikat oleh hemoglobin dalam sel darah merah dan dibawa ke seluruh tubuh untuk disalurkan ke jaringan tubuh yang membutuhkan.",
    },
    {
      question: "Apa yang dimaksud dengan sistem peredaran limfatik?",
      options: [
        { label: "A. Sistem yang mengangkut darah ke jantung", value: "A" },
        { label: "B. Sistem yang mengangkut limfa dan lemak", value: "B", isCorrect: true },
        { label: "C. Sistem yang mengatur metabolisme tubuh", value: "C" },
        { label: "D. Sistem yang mengangkut karbon dioksida", value: "D" },
      ],
      explanation:
        "Sistem peredaran limfatik berfungsi untuk mengangkut limfa yang mengandung sel-sel imun dan lemak yang diserap dari usus.",
    },
    {
      question: "Bagaimana cara tubuh mengatur kadar oksigen dalam darah?",
      options: [
        { label: "A. Dengan meningkatkan produksi sel darah merah", value: "A", isCorrect: true },
        { label: "B. Dengan menurunkan jumlah hemoglobin", value: "B" },
        { label: "C. Dengan meningkatkan laju pernapasan", value: "C" },
        { label: "D. Dengan menurunkan tekanan darah", value: "D" },
      ],
      explanation:
        "Tubuh mengatur kadar oksigen dalam darah dengan cara meningkatkan produksi sel darah merah dan mempercepat pernapasan jika kadar oksigen menurun.",
    },
    {
      question: "Apa yang terjadi jika sistem peredaran darah terganggu?",
      options: [
        { label: "A. Tubuh akan mengalami kesulitan dalam transportasi oksigen", value: "A", isCorrect: true },
        { label: "B. Tubuh akan menjadi lebih kuat", value: "B" },
        { label: "C. Tubuh akan memiliki lebih banyak energi", value: "C" },
        { label: "D. Tubuh akan lebih mudah mencerna makanan", value: "D" },
      ],
      explanation:
        "Jika sistem peredaran darah terganggu, tubuh akan mengalami kesulitan dalam mengangkut oksigen dan nutrisi ke seluruh tubuh, yang dapat menyebabkan gangguan fungsi organ.",
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
