export default function Button({
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  className = '',
  children,
  ...props
}) {
  const inactive = disabled;
  const blocked = disabled || loading;
  const palette =
    variant === 'primary' && !inactive
      ? 'bg-brand text-white'
      : 'cursor-not-allowed bg-surface-tab text-white';

  return (
    <button
      type={type}
      disabled={blocked}
      aria-busy={loading || undefined}
      className={`inline-flex h-[2.125rem] items-center justify-center rounded-[3px] px-3 font-lato text-[0.6875rem] font-bold shadow-btn ${
        fullWidth ? 'w-full' : ''
      } ${palette} ${inactive ? '' : 'cursor-pointer'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
