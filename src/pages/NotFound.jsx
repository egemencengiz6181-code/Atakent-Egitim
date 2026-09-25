import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 hero-grid" />
      <div className="container-x text-center">
        <p className="font-display text-[7rem] font-extrabold leading-none gradient-text sm:text-[10rem]">404</p>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-navy-900">Sayfa bulunamadı</h1>
        <p className="mx-auto mt-4 max-w-md text-navy-600">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Anasayfaya dönerek devam edebilirsiniz.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Anasayfaya Dön <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
