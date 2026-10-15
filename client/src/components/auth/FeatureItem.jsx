export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid h-[2.125rem] w-[2.125rem] shrink-0 place-items-center rounded-tile bg-white shadow-tile">
        <Icon className="h-3.5 w-3.5 text-[#0B2E2E]" />
      </span>
      <span className="min-w-0">
        <span className="block font-lato text-[0.9375rem] font-bold leading-tight text-white">{title}</span>
        <span className="mt-0.5 block font-lato text-[0.59375rem] leading-tight text-white/85">
          {description}
        </span>
      </span>
    </li>
  );
}
