import { forwardRef } from 'react';

const fieldClass =
  'h-[1.875rem] w-full rounded-[3px] border bg-white px-2.5 font-lato text-[0.625rem] text-ink placeholder:text-[#4A605D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[rgba(20,78,79,0.4)]';

const TextInput = forwardRef(function TextInput({ error, className = '', ...props }, ref) {
  return (
    <div className="w-full">
      <input
        ref={ref}
        className={`${fieldClass} border-brand-border ${className}`}
        {...props}
      />
      {error ? (
        <p className="mt-1 text-left text-[0.5625rem] leading-tight text-[#D93025]">{error}</p>
      ) : null}
    </div>
  );
});

export default TextInput;
