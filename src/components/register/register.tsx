import React, { useState } from "react";
import { useNavigate } from "react-router";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormData, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Очищаем ошибки в поле по инпуту пользователя
    if (errors[name as keyof RegisterFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RegisterFormData, string>> = {};

    // Email validation
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Имитация запроса
      console.log("Registration attempt:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Registration successful! Please check your email.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page auth-page--register">
      <div className="auth-page__container">
        <div className="auth-form">
          <header className="auth-form__header">
            <h1 className="auth-form__title">Create Account</h1>
            <p className="auth-form__subtitle">Join our educational platform</p>
          </header>

          <form className="auth-form__form" onSubmit={handleSubmit}>
            <div className="auth-form__row">
              <div className="auth-form__field auth-form__field--half">
                <label
                  htmlFor="register-firstName"
                  className="auth-form__label"
                >
                  First Name
                </label>
                <input
                  id="register-firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`auth-form__input ${
                    errors.firstName ? "auth-form__input--error" : ""
                  }`}
                  placeholder="John"
                  required
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <div className="auth-form__error">{errors.firstName}</div>
                )}
              </div>

              <div className="auth-form__field auth-form__field--half">
                <label htmlFor="register-lastName" className="auth-form__label">
                  Last Name
                </label>
                <input
                  id="register-lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`auth-form__input ${
                    errors.lastName ? "auth-form__input--error" : ""
                  }`}
                  placeholder="Doe"
                  required
                  disabled={isSubmitting}
                />
                {errors.lastName && (
                  <div className="auth-form__error">{errors.lastName}</div>
                )}
              </div>
            </div>

            <div className="auth-form__field">
              <label htmlFor="register-email" className="auth-form__label">
                Email Address
              </label>
              <input
                id="register-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`auth-form__input ${
                  errors.email ? "auth-form__input--error" : ""
                }`}
                placeholder="example@psuti.ru"
                required
                disabled={isSubmitting}
              />
              {errors.email && (
                <div className="auth-form__error">{errors.email}</div>
              )}
            </div>

            <div className="auth-form__row">
              <div className="auth-form__field auth-form__field--half">
                <label htmlFor="register-password" className="auth-form__label">
                  Password
                </label>
                <input
                  id="register-password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`auth-form__input ${
                    errors.password ? "auth-form__input--error" : ""
                  }`}
                  placeholder="At least 6 characters"
                  required
                  disabled={isSubmitting}
                />
                {errors.password && (
                  <div className="auth-form__error">{errors.password}</div>
                )}
              </div>

              <div className="auth-form__field auth-form__field--half">
                <label
                  htmlFor="register-confirmPassword"
                  className="auth-form__label"
                >
                  Confirm Password
                </label>
                <input
                  id="register-confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`auth-form__input ${
                    errors.confirmPassword ? "auth-form__input--error" : ""
                  }`}
                  placeholder="Re-enter password"
                  required
                  disabled={isSubmitting}
                />
                {errors.confirmPassword && (
                  <div className="auth-form__error">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            <div className="auth-form__actions">
              <button
                type="submit"
                className="auth-form__button auth-form__button--primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </div>

            <div className="auth-form__divider">
              <span className="auth-form__divider-text">
                Already have an account?
              </span>
            </div>

            <div className="auth-form__actions">
              <button
                type="button"
                className="auth-form__button auth-form__button--secondary"
                onClick={() => navigate("/login")}
                disabled={isSubmitting}
              >
                Sign In Instead
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
