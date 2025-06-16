import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Story from './pages/Story';
import Legal from './pages/Legal';
import Help from './pages/Help';
import Footer from './components/Footer';
import gradientBg from './assets/gradient-bg.png';


const BgWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  @media (max-width: 375px) {
  background : linear-gradient(180deg, #fff0 27.7%, #fff 64.82%,url(${gradientBg}));
}
`;

export default function App() {
  return (
    <BgWrapper>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/help-center" element={<Help />} />
          <Route path="/legal-notes" element={<Legal />} />
        </Routes>
        <Footer />
      </Router>
    </BgWrapper>
  )
}