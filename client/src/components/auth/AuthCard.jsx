export default function AuthCard({ children }) {
  return (
    <section className="w-[min(92vw,23.25rem)] rounded-card bg-white px-[clamp(1.35rem,5vw,3.375rem)] py-7 shadow-card">
      {children}
    </section>
  );
}
