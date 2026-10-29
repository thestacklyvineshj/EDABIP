import { forwardRef, useState } from 'react';
import EyeIcon from '../icons/EyeIcon';
import EyeOffIcon from '../icons/EyeOffIcon';
import InfoIcon from '../icons/InfoIcon';

const fieldClass =
  'h-[1.875rem] w-full rounded-[3px] border bg-white font-lato text-[0.625rem] text-ink placeholder:text-[#4A605D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[rgba(20,78,79,0.4)]';

const PasswordInput = forwardRef(function PasswordInput(
  { error, inline = false, showToggle = true, borderTone = 'default', className = '', ...props },
  ref,
) {
  const [visible, setVisible] = useState(false);
  const border = borderTone === 'light' ? 'border-brand-light' : 'border-brand-border';
  const showInline = inline && Boolean(error);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          {...props}
          ref={ref}
          type={showInline || visible ? 'text' : 'password'}
          readOnly={showInline || undefined}
          aria-invalid={showInline || undefined}
          value={showInline ? error : props.value}
          className={
            showInline
              ? `h-[1.875rem] w-full rounded-[3px] border border-[#E25C5C] bg-[#FDECEC] px-2.5 pr-8 font-lato text-[0.625rem] text-[#E25C5C] ${className}`
              : `${fieldClass} ${border} ${showToggle ? 'px-2.5 pr-8' : 'px-2.5'} ${className}`
          }
        />
        {showInline ? (
          <span className="pointer-events-none absolute right-1.5 top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center text-[#E25C5C]">
            <InfoIcon className="h-3.5 w-3.5" />
          </span>
        ) : null}
        {showToggle && !showInline ? (
          <button
            type="button"
            aria-label={visible ? 'Hide password' : 'Show password'}
            aria-pressed={visible}
            onClick={() => setVisible((value) => !value)}
            className="absolute right-1.5 top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center text-brand-light"
          >
            {visible ? <EyeIcon className="h-3.5 w-3.5" /> : <EyeOffIcon className="h-3.5 w-3.5" />}
          </button>
        ) : null}
      </div>
      {error && !inline ? (
        <p className="mt-1 text-left text-[0.5625rem] leading-tight text-[#D93025]">{error}</p>
      ) : null}
    </div>
  );
});

export default PasswordInput;
