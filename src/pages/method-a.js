import { useState } from "react";
import { useForm } from "react-hook-form";
import SocialMediaMockup from "@/components/common/SocialMediaMockup";
import Header from "@/components/common/Header";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

export default function MethodA() {
  const [step, setStep] = useState(1);
  const [verificationCode] = useState("CODE123");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  // Watch the value of the password field
  const password = watch("password");

  const onSubmit = (data) => {
    if (step === 1) {
      // Proceed to Step 2
      setStep(2);
    } else if (step === 2) {
      // Handle verification logic
      if (data.code === verificationCode) {
        setStep(3); // Proceed to Step 3 if the code is correct
      } else {
        // Set an error for the "code" field if the verification code is incorrect
        setError("code", {
          type: "manual",
          message: "Invalid verification code. Please try again.",
        });
      }
    } else if (step === 4) {
      // Here, you would normally send the phone number to your backend for verification
      setStep(5); // Proceed to Step 5 for phone number verification
    } else if (step === 5) {
      // Handle verification logic
      if (data.code === verificationCode) {
        setStep(6); // Proceed to Step 3 if the code is correct
      } else {
        // Set an error for the "code" field if the verification code is incorrect
        setError("code", {
          type: "manual",
          message: "Invalid verification code. Please try again.",
        });
      }
    }
  };

  const handleCompleteProfile = () => {
    setStep(4); // Move to Step 4
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-50 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md my-[48px]">
          {step === 1 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 1: Fake Sign Up
              </h4>
              <button
                onClick={() => setStep(3)} // Mock skipping to Step 3
                className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 w-full"
              >
                Fake Continue with Google
              </button>

              <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Fake Full Name
                    </label>
                    <input
                      type="text"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Fake Email</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Fake Password</label>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Fake Confirm Password
                    </label>
                    <input
                      type="password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 2: Verify Your Email
              </h4>
              <p className="mt-2 text-gray-700">
                We have sent a verification code to your email. Please enter the
                code below to verify your email address.
              </p>
              <p className="mt-2 text-gray-600">
                Hint: The verification code is <strong>CODE123</strong>.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Fake Verification Code
                  </label>
                  <input
                    type="text"
                    {...register("code", {
                      required: "Verification code is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.code ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.code && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.code.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
                >
                  Verify
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 3: Welcome to the Platform!
              </h4>
              <p className="mt-2 text-gray-700">
                Congratulations! You've successfully signed up and verified your
                email.
              </p>

              <div className="mt-4">
                <SocialMediaMockup
                  userStatus="limited"
                  handleCompleteProfile={handleCompleteProfile}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 4: Add Your Phone Number
              </h4>
              <p className="mt-2 text-gray-700">
                Please enter your phone number below to secure your account and
                enable additional features.
              </p>

              <div className="mt-4">
                <PhoneInput
                  country={"us"}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{ width: "100%" }}
                />
              </div>

              <button
                onClick={() => setStep(5)} // Mock moving to the verification step
                className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 w-full"
              >
                Verify Phone Number
              </button>
            </div>
          )}

          {step === 5 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 5: Phone Number Verification
              </h4>
              <p className="mt-2 text-gray-700">
                A verification code has been sent to your phone number. Please
                enter the code below to verify your phone number.
              </p>

              <p className="mt-2 text-gray-600">
                Hint: The verification code is <strong>CODE123</strong>.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Fake Verification Code
                  </label>
                  <input
                    type="text"
                    {...register("code", {
                      required: "Verification code is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.code ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.code && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.code.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
                >
                  Verify
                </button>
              </form>
            </div>
          )}

          {step === 6 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 6: Welcome to the Platform!
              </h4>
              <p className="mt-2 text-gray-700">
                Congratulations! Your profile is now complete, and you have full
                access to the platform. You can now interact with other users by
                posting, liking, and commenting.
              </p>{" "}
              <p className="mt-2 text-gray-700">
                Initially, I planned to implement a manual review process
                requiring selfies and document images for further verification.
                However, I'm still heavily considering if this might be
                excessive just for basic interactions. If you have any tips or
                suggestions of how to improve security in a user friendly way, I
                would like to hear it.
              </p>
              <p className="mt-2 text-gray-700">
                We value your feedback! If you have any thoughts or suggestions,
                please email me at{" "}
                <a
                  href="mailto:carloshenrique.webdev@gmail.com"
                  className="text-blue-500"
                >
                  carloshenrique.webdev@gmail.com
                </a>
                .
              </p>
              <div className="mt-4">
                <SocialMediaMockup
                  userStatus="unlimited"
                  handleCompleteProfile={handleCompleteProfile}
                />
              </div>
              <div className="mt-10">
                <div className="flex space-x-4">
                  <Link href="/" className="underline text-blue-600">
                    Go back to Intro
                  </Link>
                  <Link href="/method-b" className="underline text-blue-600">
                    View method B
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
