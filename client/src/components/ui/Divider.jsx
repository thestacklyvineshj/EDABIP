export default function Divider({ text }) {
  return (
    <div className="flex w-full items-center gap-2.5">
      <span className="h-px flex-1 bg-[#BDBDBD]" />
      <span className="whitespace-nowrap font-lato text-[0.625rem] text-ink">{text}</span>
      <span className="h-px flex-1 bg-[#BDBDBD]" />
    </div>
  );
}
