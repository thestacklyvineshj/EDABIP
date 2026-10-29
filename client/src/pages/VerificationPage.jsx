import { useEffect } from 'react';
import AuthCard from '../components/auth/AuthCard';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/ui/Button';

const DIGITS = ['1', '1', '1', '1'];

export default function VerificationPage({ hasError = false }) {
  useEffect(() => {
    document.title = hasError ? 'Verification Error' : 'Verification';
  }, [hasError]);

  return (
    <AuthLayout variant="verify">
      <AuthCard>
        <h2 className="mb-2.5 text-center font-lato text-[1.5rem] font-black leading-none text-ink">
          Enter Verification Code
        </h2>
        <p className="mx-auto mb-4 max-w-[16.5rem] text-center font-lato text-[0.6875rem] leading-5 text-ink">
          We&apos;ve sent a 4-digit verification code to jackie@stackly.com.
        </p>

        <div className="flex items-center justify-center gap-3" aria-label="Verification code">
          {DIGITS.map((digit, index) => (
            <span
              key={index}
              className={`grid h-9 w-9 place-items-center rounded-[3px] border font-lato text-[0.875rem] ${
                hasError
                  ? 'border-[#E25C5C] bg-[#FDECEC] text-[#E25C5C]'
                  : 'border-[#D5D5D5] bg-white text-ink'
              }`}
            >
              {hasError ? (
                digit
              ) : (
                <span className="h-1 w-1 rounded-full bg-ink" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>

        <p className="mt-3.5 text-center font-lato text-[0.625rem] text-ink">
          Didn&apos;t receive the code?{' '}
          <button type="button" className="font-bold text-[#E25C5C]">
            Resend OTP
          </button>
        </p>
        <p className="mt-1 text-center font-lato text-[0.625rem] text-muted">Resend OTP 00:00</p>

        <div className="mt-4">
          <Button type="button" variant="primary" fullWidth disabled className="!text-[#8A8A8A]">
            Verify OTP
          </Button>
        </div>

        <p className="mt-3.5 text-center font-lato text-[0.4375rem] text-ink">
          Need help ?{' '}
          <a href="mailto:support@edabip.com" className="font-bold text-brand-light">
            Contact Support
          </a>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
