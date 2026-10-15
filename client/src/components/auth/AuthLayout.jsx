import bgAuth from '../../assets/bg-auth.jpg';
import logoLockup from '../../assets/edabip-logo.png';
import BrandPanel from './BrandPanel';
import FloatingLogoBadge from './FloatingLogoBadge';

const COPY = {
  login:
    'Log in to access your Enterprise Data Analytics & Business Intelligence Platform and continue making data-driven decisions with confidence',
  signup:
    'Sign in to access your Enterprise Data Analytics & Business Intelligence Platform and continue making data-driven decisions with confidence',
};

export default function AuthLayout({ variant = 'login', children }) {
  return (
    <div className="relative h-screen overflow-hidden bg-page">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgAuth})` }}
        aria-hidden="true"
      />

      <div className="absolute left-[2.625rem] top-[1.65rem] z-20">
        <img src={logoLockup} alt="EDABIP" className="h-10 w-auto" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[calc((100%-23.25rem)/2)] items-center justify-center lg:flex">
        <div className="pointer-events-auto">
          <BrandPanel description={COPY[variant] || COPY.login} />
        </div>
      </div>

      <main className="relative z-10 grid h-full place-items-center overflow-y-auto px-4 py-4">
        {children}
      </main>

      <footer className="absolute bottom-5 left-0 z-10 hidden w-[calc((100%-23.25rem)/2)] text-center lg:block">
        <p className="font-lato text-[0.625rem] leading-[1.35] text-[#CFCFCF]">
          Trusted by Fortune 500 companies worldwide
        </p>
        <p className="font-lato text-[0.625rem] leading-[1.35] text-[#CFCFCF]">
          © 2026 EDABIP. Enterprise Data Analytics & Business Intelligence Platform.
        </p>
      </footer>

      <FloatingLogoBadge />
    </div>
  );
}
