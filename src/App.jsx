import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Kurumsal from './pages/Kurumsal'
import BasariModeli from './pages/BasariModeli'
import Felsefe from './pages/Felsefe'
import Kampusler from './pages/Kampusler'
import Iletisim from './pages/Iletisim'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/basari-modeli" element={<BasariModeli />} />
          <Route path="/egitim-felsefemiz" element={<Felsefe />} />
          <Route path="/kampuslerimiz" element={<Kampusler />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
