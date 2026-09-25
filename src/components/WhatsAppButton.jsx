import { WhatsAppIcon } from './Icon'
import { brand } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={brand.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-gradient-to-r from-royal to-sky py-3 pl-3 pr-3 text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Bize Yazın</span>
    </a>
  )
}
