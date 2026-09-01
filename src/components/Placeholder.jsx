const PALETTES = {
  sand: ['#e9e2d3', '#d8cbaf'],
  sage: ['#dde6d3', '#c3d3ae'],
  slate: ['#dfe3e6', '#c3ccd1'],
  plum: ['#e5dcea', '#cdb9d8'],
  amber: ['#f0e2c9', '#e0c48f'],
  rose: ['#f0dcdc', '#dcb9b9'],
  dark: ['#2b2f27', '#171a14'],
}

export default function Placeholder({
  label,
  palette = 'sand',
  className = '',
  icon = null,
  ratio = 'aspect-square',
}) {
  const [a, b] = PALETTES[palette] || PALETTES.sand
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${ratio} ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${a}, ${b})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 12px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-1.5 px-2 text-center">
        {icon}
        {label && (
          <span className="text-[10px] font-medium uppercase tracking-wide text-black/45">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
