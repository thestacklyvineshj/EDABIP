import ShieldCheckIcon from '../icons/ShieldCheckIcon';

export default function TrustBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-[3px] bg-badge-bg px-1.5 py-[3px]">
      <ShieldCheckIcon className="h-2.5 w-2.5 text-[#0B0B0B]" />
      <span className="font-lato text-[0.5rem] font-bold leading-none text-ink">{label}</span>
    </span>
  );
}
