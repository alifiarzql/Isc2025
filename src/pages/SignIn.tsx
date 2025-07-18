import { useState } from "react";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "Format email tidak valid." }),
  password: z.string().min(1, { message: "Password tidak boleh kosong." }),
  rememberMe: z.boolean(),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof SignInFormData, string>>
  >({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signInSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
      console.log("Sign in submitted:", result.data);
    } else {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0978FF] w-full h-[82px] flex items-center px-6">
        <a
          href="/"
          className="text-white text-[32px] font-bold hover:text-gray-200"
        >
          chekost.com
        </a>
      </div>

      {/* Sign In Form */}
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-md">
          <h1 className="mb-12 text-4xl font-bold text-center text-blue-500">
            Sign In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full py-4 pl-12 pr-4 text-gray-600 border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.email && (
              <p className="mt-1 ml-4 text-sm text-red-600">{errors.email}</p>
            )}

            {/* Password Input */}
            <div className="relative">
              <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full py-4 pl-12 pr-4 text-gray-600 border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.password && (
              <p className="mt-1 ml-4 text-sm text-red-600">
                {errors.password}
              </p>
            )}

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-600">
                  Ingat Saya
                </label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Lupa Password?
              </a>
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
              >
                Login
              </button>
            </div>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4">
              {/* Google Login */}
              <button
                type="button"
                className="flex items-center justify-center w-12 h-12 transition-colors border border-gray-300 rounded-full hover:bg-gray-50"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>

              {/* Facebook Login */}
              <button
                type="button"
                className="flex items-center justify-center w-12 h-12 transition-colors border border-gray-300 rounded-full hover:bg-gray-50"
              >
                <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
