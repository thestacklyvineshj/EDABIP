import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';
import AuthLayout from '../components/auth/AuthLayout';
import SocialButtons from '../components/auth/SocialButtons';
import TabToggle from '../components/auth/TabToggle';
import GoogleIcon from '../components/icons/GoogleIcon';
import MicrosoftIcon from '../components/icons/MicrosoftIcon';
import Button from '../components/ui/Button';
import Checkbox from '../components/ui/Checkbox';
import Divider from '../components/ui/Divider';
import PasswordInput from '../components/ui/PasswordInput';
import TextInput from '../components/ui/TextInput';

const TABS = [
  { key: 'signup', label: 'Sign up' },
  { key: 'login', label: 'Log in' },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ email, password }) {
  const errors = {};
  const trimmedEmail = email.trim();

  if (!trimmedEmail) errors.email = 'Email is required';
  else if (!EMAIL_PATTERN.test(trimmedEmail)) errors.email = 'Enter a valid email';

  if (!password) errors.password = 'Password is required';

  return errors;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '', remember: false });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState('');

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const show = (name) => ((touched[name] || submitted) ? errors[name] : undefined);

  const onChange = (event) => {
    const { name, type, checked, value } = event.target;
    setNotice('');
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onBlur = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setNotice('');
    if (!isValid) return;
    setNotice('You are signed in.');
  };

  const onForgot = (event) => {
    event.preventDefault();
    setTouched((current) => ({ ...current, email: true }));
    if (errors.email) {
      setNotice('');
      return;
    }
    setNotice(`A reset link would be sent to ${values.email.trim()}.`);
  };

  return (
    <AuthLayout variant="login">
      <AuthCard>
        <h2 className="mb-2.5 text-center font-lato text-[1.5rem] font-black leading-none text-ink">
          Welcome Back
        </h2>
        <p className="mb-4 text-center font-lato text-[0.75rem] leading-6 text-ink">
          Log in into continue to your EDABIP dashboard and accelerate your analytics journey
        </p>

        <TabToggle
          tabs={TABS}
          activeKey="login"
          onChange={(key) => navigate(key === 'signup' ? '/signup' : '/login')}
        />

        <form className="mt-4 flex flex-col gap-2.5" onSubmit={onSubmit} noValidate>
          <TextInput
            name="email"
            type="email"
            placeholder="Enter Your Email"
            aria-label="Email"
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
            error={show('email')}
          />
          <PasswordInput
            name="password"
            placeholder="Enter Your Password"
            aria-label="Password"
            autoComplete="current-password"
            borderTone="light"
            value={values.password}
            onChange={onChange}
            onBlur={onBlur}
            error={show('password')}
          />

          <div className="flex items-center justify-between">
            <Checkbox
              name="remember"
              aria-label="Remember me"
              label="Remember me"
              labelClassName="text-ink"
              checked={values.remember}
              onChange={onChange}
            />
            <a href="#forgot" onClick={onForgot} className="font-lato text-[0.625rem] text-brand-light">
              Forgot Password?
            </a>
          </div>

          {notice ? (
            <p className="text-center text-[0.5625rem] leading-tight text-brand">{notice}</p>
          ) : null}

          <Button type="submit" variant="primary" fullWidth disabled={!isValid}>
            Login
          </Button>
        </form>

        <p className="mt-2.5 text-center font-lato text-[0.6875rem] text-ink">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-bold text-brand-light">
            Sign up
          </Link>
        </p>

        <div className="mt-4">
          <Divider text="or sign up with" />
        </div>

        <div className="mt-3.5">
          <SocialButtons
            buttons={[
              {
                id: 'google',
                label: 'Sign up with Google',
                icon: <GoogleIcon className="h-5 w-5" />,
              },
              {
                id: 'microsoft',
                label: 'Sign up with Microsoft',
                icon: <MicrosoftIcon className="h-[1.15rem] w-[1.15rem]" />,
              },
            ]}
          />
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
