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

const EMPTY = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptedTerms: false,
};

function validate(values) {
  const errors = {};

  if (!values.firstName.trim()) errors.firstName = 'First name is required';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required';

  const email = values.email.trim();
  if (!email) errors.email = 'Email is required';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email';

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8 || !/[A-Za-z]/.test(values.password) || !/\d/.test(values.password)) {
    errors.password = 'Use 8+ characters with at least 1 letter and 1 number';
  }

  if (!values.confirmPassword) errors.confirmPassword = 'Confirm your password';
  else if (values.password !== values.confirmPassword) errors.confirmPassword = 'Passwords do not match';

  if (!values.acceptedTerms) errors.acceptedTerms = 'Please accept the Terms & Conditions';

  return errors;
}

export default function SignupPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState('');

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    document.title = 'Signup';
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
    setNotice('Your account is ready.');
  };

  return (
    <AuthLayout variant="signup">
      <AuthCard>
        <h2 className="mb-2.5 text-center font-lato text-[1.5rem] font-black leading-none text-ink">
          Welcome Back
        </h2>
        <p className="mb-4 text-center font-lato text-[0.75rem] leading-6 text-ink">
          Sign into continue to your EDABIP dashboard and accelerate your analytics journey
        </p>

        <TabToggle
          tabs={TABS}
          activeKey="signup"
          onChange={(key) => navigate(key === 'signup' ? '/signup' : '/login')}
        />

        <form className="mt-4 flex flex-col gap-2.5" onSubmit={onSubmit} noValidate>
          <TextInput
            name="firstName"
            placeholder="Enter Your  First Name"
            aria-label="First name"
            autoComplete="given-name"
            value={values.firstName}
            onChange={onChange}
            onBlur={onBlur}
            error={show('firstName')}
          />
          <TextInput
            name="lastName"
            placeholder="Enter Your Last Name"
            aria-label="Last name"
            autoComplete="family-name"
            value={values.lastName}
            onChange={onChange}
            onBlur={onBlur}
            error={show('lastName')}
          />
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
            autoComplete="new-password"
            borderTone="light"
            value={values.password}
            onChange={onChange}
            onBlur={onBlur}
            error={show('password')}
          />
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Your Password"
            aria-label="Confirm password"
            autoComplete="new-password"
            showToggle={false}
            borderTone="default"
            value={values.confirmPassword}
            onChange={onChange}
            onBlur={onBlur}
            error={show('confirmPassword')}
          />

          <Checkbox
            name="acceptedTerms"
            aria-label="I agree to Terms and Conditions"
            label={
              <>
                I agree to{' '}
                <a
                  href="#terms"
                  className="font-bold"
                  onClick={(event) => event.stopPropagation()}
                >
                  Terms & Conditions
                </a>
              </>
            }
            labelClassName="text-brand-light"
            checked={values.acceptedTerms}
            onChange={onChange}
          />
          {show('acceptedTerms') ? (
            <p className="-mt-1 text-left text-[0.5625rem] leading-tight text-[#D93025]">
              {errors.acceptedTerms}
            </p>
          ) : null}

          {notice ? (
            <p className="text-center text-[0.5625rem] leading-tight text-brand">{notice}</p>
          ) : null}

          <Button type="submit" variant="primary" fullWidth disabled={!isValid}>
            Create Account
          </Button>
        </form>

        <p className="mt-2.5 text-center font-lato text-[0.6875rem] text-ink">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-brand-light">
            Login
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
