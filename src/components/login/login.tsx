import React, { useState } from 'react';
import { useNavigate } from 'react-router';

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Имитация запроса
      console.log('Login attempt:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (formData.email && formData.password) {
        alert('Login successful!');
        // Здесь будет редирект после успешного входа
        // navigate('/dashboard');
      } else {
        alert('Please fill in all fields');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page auth-page--login">
      <div className="auth-page__container">
        <div className="auth-form">
          <header className="auth-form__header">
            <h2 className="auth-form__title">Login to Platform</h2>
            <p className="auth-form__subtitle">
              Enter your credentials to access your account
            </p>
          </header>

          <form className="auth-form__form" onSubmit={handleSubmit}>
            <div className="auth-form__field">
              <label htmlFor="login-email" className="auth-form__label">
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="auth-form__input"
                placeholder="user@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="auth-form__field">
              <label htmlFor="login-password" className="auth-form__label">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="auth-form__input"
                placeholder="Enter your password"
                required
                disabled={isSubmitting}
              />
              <div className="auth-form__hint">
                <button 
                  type="button" 
                  className="auth-form__link"
                  onClick={() => alert('Password recovery')}
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <div className="auth-form__actions">
              <button
                type="submit"
                className="auth-form__button auth-form__button--primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>

            <div className="auth-form__divider">
              <span className="auth-form__divider-text">Don't have an account?</span>
            </div>

            <div className="auth-form__actions">
              <button
                type="button"
                className="auth-form__button auth-form__button--secondary"
                onClick={() => navigate('/register')}
                disabled={isSubmitting}
              >
                Create New Account
              </button>
            </div>
          </form>

          <footer className="auth-form__footer">
            <p className="auth-form__footer-text">
              Need help? Contact{' '}
              <a href="mailto:support@example.com" className="auth-form__link">
                support@example.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}