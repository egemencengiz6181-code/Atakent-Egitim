import { Link } from 'react-router-dom'

// Kurumsal logo — kullanıcının yüklediği gerçek Atakent logosu
export default function Logo({ className = '', imgClass = 'h-12 sm:h-14' }) {
  return (
    <Link
      to="/"
      aria-label="Atakent Eğitim Kurumları"
      className={`group inline-flex items-center ${className}`}
    >
      <img
        src="/media/atakent-logo.jpeg"
        alt="Atakent Eğitim Kurumları"
        className={`w-auto rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.04] ${imgClass}`}
      />
    </Link>
  )
}
