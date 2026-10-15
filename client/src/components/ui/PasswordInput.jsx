import { forwardRef, useState } from 'react';
import EyeIcon from '../icons/EyeIcon';
import EyeOffIcon from '../icons/EyeOffIcon';

const fieldClass =
  'h-[1.875rem] w-full rounded-[3px] border bg-white font-lato text-[0.625rem] text-ink placeholder:text-[#4A605D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[rgba(20,78,79,0.4)]';

const PasswordInput = forwardRef(function PasswordInput(
  { error, showToggle = true, borderTone = 'default', className = '', ...props },
  ref,
) {
  const [visible, setVisible] = useState(false);
  const border = borderTone === 'light' ? 'border-brand-light' : 'border-brand-border';

  return (
    <div className="w-full">
      <div className="relative">
        <input
          {...props}
          ref={ref}
          type={visible ? 'text' : 'password'}
          className={`${fieldClass} ${border} ${showToggle ? 'px-2.5 pr-8' : 'px-2.5'} ${className}`}
        />
        {showToggle ? (
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
      {error ? (
        <p className="mt-1 text-left text-[0.5625rem] leading-tight text-[#D93025]">{error}</p>
      ) : null}
    </div>
  );
});

export default PasswordInput;
