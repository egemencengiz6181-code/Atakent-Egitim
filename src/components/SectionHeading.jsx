import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, desc, align = 'center', light = false }) {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? 'border-white/20 bg-white/10 text-white' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-navy-600'}`}>
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  )
}
