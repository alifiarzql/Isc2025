import { useState } from "react";
import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().email({ message: "Format email tidak valid." }),
    phone: z.string().min(10, { message: "Nomor HP minimal 10 digit." }),
    password: z.string().min(8, { message: "Password minimal 8 karakter." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak cocok.",
    path: ["confirmPassword"], // Menetapkan error pada field confirmPassword
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpFormData, string>>
  >({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signUpSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
      // Handle form submission logic here
      console.log("Form submitted:", result.data);
    } else {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
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

      {/* Sign Up Form */}
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-md">
          <h1 className="mb-12 text-4xl font-bold text-center text-blue-500">
            Sign Up
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

            {/* Phone Input */}
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Nomor Hp"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full py-4 pl-12 pr-4 text-gray-600 border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 ml-4 text-sm text-red-600">{errors.phone}</p>
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

            {/* Confirm Password Input */}
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
                name="confirmPassword"
                placeholder="Konfirmasi Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full py-4 pl-12 pr-4 text-gray-600 border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 ml-4 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
              >
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

