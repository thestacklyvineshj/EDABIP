export default function CubeIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.1 18.8 7v8.2L12 19.1 5.2 15.2V7L12 3.1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.2" r="2.15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
