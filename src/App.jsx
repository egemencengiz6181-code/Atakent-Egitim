import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import RouteEffects from './components/RouteEffects'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'

const Kurumsal = lazy(() => import('./pages/Kurumsal'))
const Hakkimizda = lazy(() => import('./pages/Hakkimizda'))
const EgitimFelsefemiz = lazy(() => import('./pages/EgitimFelsefemiz'))
const Bolgelerimiz = lazy(() => import('./pages/Bolgelerimiz'))
const Kurumlarimiz = lazy(() => import('./pages/Kurumlarimiz'))
const KurumDetay = lazy(() => import('./pages/KurumDetay'))
const Iletisim = lazy(() => import('./pages/Iletisim'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-navy-100 border-t-sky" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <RouteEffects />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<Kurumsal />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/egitim-felsefemiz" element={<EgitimFelsefemiz />} />
            <Route path="/bolgelerimiz" element={<Bolgelerimiz />} />
            <Route path="/kurumlarimiz" element={<Kurumlarimiz />} />
            <Route path="/kurumlarimiz/:slug" element={<KurumDetay />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
