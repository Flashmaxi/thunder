const AmbientBackground = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />

      <div
        className="absolute inset-0 opacity-[0.05] hidden sm:block"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(250,140,218,0.08),_transparent_60%)]" />
      <div className="absolute inset-0 bg-thunder-bg/40" />
    </div>
  )
}

export default AmbientBackground
