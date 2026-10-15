export default function EyeOffIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2.6 12S6.2 6.5 12 6.5 21.4 12 21.4 12 17.8 17.5 12 17.5 2.6 12 2.6 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.15" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.2 18.4 18.8 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
