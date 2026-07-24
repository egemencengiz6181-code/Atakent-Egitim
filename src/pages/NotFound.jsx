import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-[74px]">
      <div className="absolute inset-0 -z-10 hero-grid" />
      <div className="container-x text-center">
        <p className="font-display text-[7rem] font-extrabold leading-none gradient-text sm:text-[10rem]">404</p>
        <h1 className="mt-2 font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">Sayfa bulunamadı</h1>
        <p className="mx-auto mt-4 max-w-md text-navy-600">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Sizi anasayfaya geri götürelim.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Icon name="arrow" className="h-4 w-4 rotate-180" /> Anasayfaya dön
        </Link>
      </div>
    </section>
  )
}
