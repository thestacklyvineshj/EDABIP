import LogoMark from '../icons/LogoMark';

export default function FloatingLogoBadge() {
  return (
    <div
      className="absolute bottom-10 right-10 z-20 grid h-12 w-12 place-items-center rounded-full bg-[#0E3B3B] text-white"
      style={{ boxShadow: '0 0 0 2px #2BB8B0, 0 0 18px rgba(64,200,190,0.6)' }}
    >
      <LogoMark className="h-8 w-8" />
    </div>
  );
}
