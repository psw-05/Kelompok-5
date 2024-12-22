import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home'; 
import Materi from './pages/Materi';
import Quiz from './pages/Quiz';
import Bab1 from './pages/bab1';
import Bab2 from './pages/bab2';
import Bab3 from './pages/bab3';
import Bab4 from './pages/bab4';
import Bab5 from './pages/bab5';
import Bab6 from './pages/bab6';
import Bab7 from './pages/bab7';
import Bab8 from './pages/bab8';
import Tryout from './pages/tryout';
import LatihanSoal from "./pages/latihansoal";
import LatihanSoal1 from "./pages/LatihanSoal1";
import LatihanSoal2 from "./pages/LatihanSoal2";
import LatihanSoal3 from "./pages/LatihanSoal3";
import LatihanSoal4 from "./pages/LatihanSoal4";
import LatihanSoal5 from './pages/LatihanSoal5.js';
import LatihanSoal6 from "./pages/LatihanSoal6";
import LatihanSoal7 from "./pages/LatihanSoal7";
import LatihanSoal8 from "./pages/LatihanSoal8";
import VideoMateri from "./pages/VideoMateri.js";
import QuizBab1 from './pages/QuizBab1.js';
import QuizBab2 from './pages/QuizBab2.js';
import QuizBab3 from './pages/QuizBab3.js';
import LatihanQuiz from './pages/LatihanQuiz.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
       
        <Route path="/" element={<Home />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/latihanquiz" element={<LatihanQuiz />} /> 
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/quizbab1" element={<QuizBab1 />} /> 
        <Route path="/quizbab2" element={<QuizBab2 />} />
        <Route path="/quizbab3" element={<QuizBab3 />} />
        <Route path="/bab1" element={<Bab1 />} />
        <Route path="/bab2" element={<Bab2 />} />
        <Route path="/bab3" element={<Bab3 />} />
        <Route path="/bab4" element={<Bab4 />} />
        <Route path="/bab5" element={<Bab5 />} />
        <Route path="/bab6" element={<Bab6 />} />
        <Route path="/bab7" element={<Bab7 />} /> 
        <Route path="/bab8" element={<Bab8 />} />
        <Route path="/tryout" element={<Tryout />} />
        <Route path="/latihansoal" element={<LatihanSoal />} />
        <Route path="/latihansoal1" element={<LatihanSoal1 />} />
        <Route path="/latihansoal2" element={<LatihanSoal2 />} />
        <Route path="/latihansoal3" element={<LatihanSoal3 />} />
        <Route path="/latihansoal4" element={<LatihanSoal4 />} />
        <Route path="/latihansoal5" element={<LatihanSoal5/>} />
        <Route path="/latihansoal6" element={<LatihanSoal6 />} />
        <Route path="/latihansoal7" element={<LatihanSoal7 />} />
        <Route path="/latihansoal8" element={<LatihanSoal8 />} />
        <Route path="/vidioMateri" element={<VideoMateri />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;