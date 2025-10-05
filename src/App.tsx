import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TravelGuides from './pages/TravelGuides';
import Documentaries from './pages/Documentaries';
import CulturalTours from './pages/CulturalTours';
import TravelBlogs from './pages/TravelBlogs';
import DestinationDetail from './pages/DestinationDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel-guides" element={<TravelGuides />} />
            <Route path="/documentaries" element={<Documentaries />} />
            <Route path="/cultural-tours" element={<CulturalTours />} />
            <Route path="/travel-blogs" element={<TravelBlogs />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;