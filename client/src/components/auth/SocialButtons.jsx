export default function SocialButtons({ buttons }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {buttons.map((button) => (
        <button
          key={button.id}
          type="button"
          aria-label={button.label}
          onClick={button.onClick}
          className="grid h-[2.375rem] w-[2.375rem] place-items-center rounded-[3px] border border-brand-border bg-white text-brand"
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
}
