export default function InfoIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7.15V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="5.15" r="0.7" fill="currentColor" />
    </svg>
  );
}
