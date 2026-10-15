import { forwardRef } from 'react';

const Checkbox = forwardRef(function Checkbox(
  { label, labelClassName = '', className = '', ...props },
  ref,
) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-[0.35rem] ${className}`}>
      <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
      <span
        aria-hidden="true"
        className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[2px] border border-brand-border bg-white peer-checked:border-brand peer-checked:bg-brand peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[rgba(20,78,79,0.4)] [&>svg]:invisible peer-checked:[&>svg]:visible"
      >
        <svg viewBox="0 0 12 12" className="h-[9px] w-[9px]" fill="none">
          <path
            d="M2.1 6.2 4.7 8.7 10 3.3"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`font-lato text-[0.625rem] leading-none ${labelClassName}`}>{label}</span>
    </label>
  );
});

export default Checkbox;
