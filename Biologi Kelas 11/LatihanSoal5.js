import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal5 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa fungsi utama dari sistem imun manusia?",
      options: [
        { label: "A. Mengatur suhu tubuh", value: "A" },
        { label: "B. Melindungi tubuh dari infeksi penyakit", value: "B", isCorrect: true },
        { label: "C. Menyaring racun dalam tubuh", value: "C" },
        { label: "D. Menghasilkan energi", value: "D" },
      ],
      explanation:
        "Fungsi utama dari sistem imun adalah melindungi tubuh dari infeksi oleh mikroorganisme patogen seperti bakteri, virus, dan jamur.",
    },
    {
      question: "Bagaimana tubuh mengidentifikasi patogen?",
      options: [
        { label: "A. Dengan memproduksi sel darah merah", value: "A" },
        { label: "B. Dengan menggunakan sel-sel imun yang mengenali antigen", value: "B", isCorrect: true },
        { label: "C. Dengan meningkatkan suhu tubuh", value: "C" },
        { label: "D. Dengan memproduksi hormon tertentu", value: "D" },
      ],
      explanation:
        "Tubuh mengidentifikasi patogen melalui sel-sel imun yang mengenali antigen, yang merupakan molekul yang terdapat pada permukaan patogen.",
    },
    {
      question: "Sel darah putih yang berfungsi untuk melawan infeksi adalah …",
      options: [
        { label: "A. Limfosit", value: "A", isCorrect: true },
        { label: "B. Trombosit", value: "B" },
        { label: "C. Eritrosit", value: "C" },
        { label: "D. Sel darah merah", value: "D" },
      ],
      explanation:
        "Limfosit adalah sel darah putih yang berperan penting dalam respon imun tubuh, seperti mengenali dan menghancurkan patogen.",
    },
    {
      question: "Apa yang dimaksud dengan antibodi?",
      options: [
        { label: "A. Protein yang melawan infeksi dengan mengikat antigen", value: "A", isCorrect: true },
        { label: "B. Sel yang menghasilkan energi untuk tubuh", value: "B" },
        { label: "C. Hormon yang mengatur metabolisme tubuh", value: "C" },
        { label: "D. Sel yang mengangkut oksigen", value: "D" },
      ],
      explanation:
        "Antibodi adalah protein yang diproduksi oleh tubuh untuk mengenali dan menetralkan antigen, seperti virus dan bakteri, dalam tubuh.",
    },
    {
      question: "Vaksin bekerja dengan cara...",
      options: [
        { label: "A. Memberikan imunitas dengan cara melatih tubuh mengenali patogen tertentu", value: "A", isCorrect: true },
        { label: "B. Menghancurkan patogen secara langsung", value: "B" },
        { label: "C. Menyembuhkan penyakit secara langsung", value: "C" },
        { label: "D. Mengaktifkan sistem pencernaan tubuh", value: "D" },
      ],
      explanation:
        "Vaksin bekerja dengan cara memperkenalkan tubuh pada patogen yang telah dilemahkan atau dimodifikasi, sehingga tubuh bisa membangun kekebalan terhadap patogen tersebut tanpa menimbulkan penyakit.",
    },
    {
      question: "Apa peran utama dari sel T dalam sistem imun?",
      options: [
        { label: "A. Mengangkut oksigen ke jaringan tubuh", value: "A" },
        { label: "B. Menghasilkan antibodi", value: "B" },
        { label: "C. Menghancurkan sel yang terinfeksi patogen", value: "C", isCorrect: true },
        { label: "D. Menyimpan informasi genetik", value: "D" },
      ],
      explanation:
        "Sel T berperan dalam menghancurkan sel yang telah terinfeksi oleh patogen, serta membantu mengatur respon imun tubuh.",
    },
    {
      question: "Apa yang dimaksud dengan imunitas pasif?",
      options: [
        { label: "A. Imunitas yang diperoleh melalui vaksinasi", value: "A" },
        { label: "B. Imunitas yang diperoleh dari antibodi orang lain", value: "B", isCorrect: true },
        { label: "C. Imunitas yang diperoleh dari olahraga", value: "C" },
        { label: "D. Imunitas yang diperoleh melalui infeksi sebelumnya", value: "D" },
      ],
      explanation:
        "Imunitas pasif adalah jenis imunitas yang diperoleh ketika seseorang menerima antibodi dari sumber luar, seperti melalui ASI atau injeksi antibodi.",
    },
    {
      question: "Apa fungsi dari limfa dalam sistem imun?",
      options: [
        { label: "A. Mengangkut nutrisi ke sel", value: "A" },
        { label: "B. Menyaring patogen dari cairan tubuh", value: "B", isCorrect: true },
        { label: "C. Menghasilkan energi", value: "C" },
        { label: "D. Mengatur suhu tubuh", value: "D" },
      ],
      explanation:
        "Limfa berfungsi menyaring patogen dan partikel asing dari cairan tubuh serta membantu melawan infeksi.",
    },
    {
      question: "Apa yang terjadi saat tubuh mengalami peradangan?",
      options: [
        { label: "A. Suhu tubuh menurun", value: "A" },
        { label: "B. Jaringan tubuh memperbaiki kerusakan", value: "B", isCorrect: true },
        { label: "C. Produksi sel darah merah meningkat", value: "C" },
        { label: "D. Sistem pencernaan aktif", value: "D" },
      ],
      explanation:
        "Peradangan adalah respon alami tubuh untuk melindungi dan memperbaiki jaringan yang rusak akibat infeksi atau cedera.",
    },
    {
      question: "Apa yang dimaksud dengan autoimunitas?",
      options: [
        { label: "A. Kondisi di mana tubuh menyerang sel-sel asing", value: "A" },
        { label: "B. Kondisi di mana tubuh menyerang sel-sel sendiri", value: "B", isCorrect: true },
        { label: "C. Kondisi di mana tubuh tidak merespon infeksi", value: "C" },
        { label: "D. Kondisi di mana tubuh menghasilkan energi berlebih", value: "D" },
      ],
      explanation:
        "Autoimunitas adalah kondisi di mana sistem imun tubuh secara keliru menyerang sel dan jaringan tubuh sendiri.",
    },
    {
      question: "Apa fungsi utama dari antibodi dalam sistem imun manusia?",
      options: [
        { label: "A. Mengangkut oksigen", value: "A" },
        { label: "B. Menetralkan antigen seperti bakteri dan virus", value: "B", isCorrect: true },
        { label: "C. Mengatur tekanan darah", value: "C" },
        { label: "D. Menghasilkan energi untuk tubuh", value: "D" },
      ],
      explanation:
        "Fungsi utama antibodi adalah menetralkan antigen seperti bakteri dan virus, membantu tubuh melawan infeksi.",
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
          <p>Skor Anda: {score}/{questions.length} </p>
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
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
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

export default LatihanSoal5;
