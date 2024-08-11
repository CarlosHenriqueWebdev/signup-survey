import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Header from "@/components/common/Header";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SocialMediaMockup from "@/components/common/SocialMediaMockup";
import Link from "next/link";

export default function MethodB() {
  const [step, setStep] = useState(1);
  const [verificationCode] = useState("CODE123");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [verificationMethod, setVerificationMethod] = useState("governmentId"); // default option

  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    watch,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (step === 1) {
      // Save email and phone number for Step 3
      setEmail(data.email);
      setPhoneNumber(data.phone);

      console.log(data);

      // Proceed to Step 2
      setStep(2);
    } else if (step === 2) {
      // Handle verification logic
      if (
        data.emailCode === verificationCode &&
        data.phoneCode === verificationCode
      ) {
        setStep(3); // Proceed to Step 3 if both codes are correct
      } else {
        // Set errors for the verification codes if they are incorrect
        if (data.emailCode !== verificationCode) {
          setError("emailCode", {
            type: "manual",
            message: "Invalid email verification code. Please try again.",
          });
        }
        if (data.phoneCode !== verificationCode) {
          setError("phoneCode", {
            type: "manual",
            message: "Invalid phone verification code. Please try again.",
          });
        }
      }
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      setStep(5); // Move to Step 5
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
                Step 1: Sign Up
              </h4>

              <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <label className="block text-gray-700">
                      Fake Phone Number
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: "Phone number is required" }}
                      render={({ field }) => (
                        <PhoneInput
                          country={"us"}
                          value={field.value}
                          onChange={field.onChange}
                          containerStyle={{ width: "100%" }}
                          inputStyle={{ width: "100%" }}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
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
                Step 2: Verify Your Email and Phone Number
              </h4>
              <p className="mt-2 text-gray-700">
                We have sent verification codes to both your email and phone
                number. Please enter the codes below to verify your account.
              </p>
              <p className="mt-2 text-gray-600">
                Hint: The verification code is <strong>CODE123</strong>.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Email Verification Code
                  </label>
                  <input
                    type="text"
                    {...register("emailCode", {
                      required: "Email verification code is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.emailCode ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.emailCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emailCode.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">
                    Phone Verification Code
                  </label>
                  <input
                    type="text"
                    {...register("phoneCode", {
                      required: "Phone verification code is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.phoneCode ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phoneCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneCode.message}
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
                Step 3: Complete Your Profile
              </h4>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Fake Username</label>
                  <input
                    type="text"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.username ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username.message}
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
                        value === watch("password") || "Passwords do not match",
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

                <div className="mb-4">
                  <label className="block text-gray-700">Fake First Name</label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake Last Name</label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake Gender</label>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.gender ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gender.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake Birthplace</label>
                  <input
                    type="text"
                    {...register("birthplace", {
                      required: "Birthplace is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.birthplace ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.birthplace && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.birthplace.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">
                    Fake Birth Country
                  </label>
                  <input
                    type="text"
                    {...register("birthCountry", {
                      required: "Birth country is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.birthCountry ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.birthCountry && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.birthCountry.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">
                    Fake Email (pre-filled)
                  </label>
                  <input
                    type="email"
                    value={email}
                    disabled
                    className="mt-1 block w-full p-2 border rounded bg-gray-100 border-gray-300"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">
                    Fake Phone Number (pre-filled)
                  </label>
                  <PhoneInput
                    country={"us"}
                    value={phoneNumber}
                    disabled
                    inputStyle={{ width: "100%" }}
                    containerStyle={{ width: "100%" }}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake Street</label>
                  <input
                    type="text"
                    {...register("street", { required: "Street is required" })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.street ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.street && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.street.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake Area</label>
                  <input
                    type="text"
                    {...register("area", { required: "Area is required" })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.area ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.area && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.area.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake State</label>
                  <input
                    type="text"
                    {...register("state", { required: "State is required" })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.state.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake Country</label>
                  <input
                    type="text"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Fake Zip Code</label>
                  <input
                    type="text"
                    {...register("zipCode", {
                      required: "Zip Code is required",
                    })}
                    className={`mt-1 block w-full p-2 border rounded bg-gray-100 ${
                      errors.zipCode ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 4: Verify Your Account
              </h4>

              <p className="text-gray-800">
                *Please note: In a real-world scenario, more verification
                methods would be available. For demonstration purposes, we’re
                only using two options. You don't need to enter your real
                information.
              </p>

              <div className="mt-4">
                <label className="block text-gray-700">
                  Select Fake Verification Method:
                </label>
                <div className="flex space-x-4 mt-2">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded ${
                      verificationMethod === "governmentId"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setVerificationMethod("governmentId")}
                  >
                    Fake Government ID
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded ${
                      verificationMethod === "creditCard"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setVerificationMethod("creditCard")}
                  >
                    Fake Credit Card
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                {verificationMethod === "governmentId" && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700">ID Type</label>
                      <select
                        {...register("idType", {
                          required: "ID Type is required",
                        })}
                        className="mt-1 block w-full p-2 border rounded bg-gray-100 border-gray-300"
                      >
                        <option value="">Select Fake ID Type</option>
                        <option value="passport">Fake Passport</option>
                        <option value="driversLicense">
                          Fake Driver's License
                        </option>
                        <option value="nationalId">Fake National ID</option>
                      </select>
                      {errors.idType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.idType.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Fake ID Number
                      </label>
                      <input
                        type="text"
                        {...register("idNumber", {
                          required: "ID Number is required",
                        })}
                        className="mt-1 block w-full p-2 border rounded bg-gray-100 border-gray-300"
                      />
                      {errors.idNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.idNumber.message}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {verificationMethod === "creditCard" && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Fake Card Number
                      </label>
                      <input
                        type="text"
                        {...register("cardNumber", {
                          required: "Card Number is required",
                        })}
                        className="mt-1 block w-full p-2 border rounded bg-gray-100 border-gray-300"
                      />
                      {errors.cardNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.cardNumber.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Fake Card Holder Name
                      </label>
                      <input
                        type="text"
                        {...register("cardHolder", {
                          required: "Card Holder Name is required",
                        })}
                        className="mt-1 block w-full p-2 border rounded bg-gray-100 border-gray-300"
                      />
                      {errors.cardHolder && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.cardHolder.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">Fake CCV</label>
                      <input
                        type="text"
                        {...register("ccv", { required: "CCV is required" })}
                        className="mt-1 block w-full p-2 border rounded bg-gray-100 border-gray-300"
                      />
                      {errors.ccv && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.ccv.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Fake Expiry Date
                      </label>
                      <input
                        type="month"
                        {...register("expiryDate", {
                          required: "Expiry Date is required",
                        })}
                        className="mt-1 block w-full p-2 border rounded bg-gray-100 border-gray-300"
                      />
                      {errors.expiryDate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.expiryDate.message}
                        </p>
                      )}
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
                >
                  Next
                </button>
              </form>
            </div>
          )}

          {step === 5 && (
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Step 5: Welcome to the Platform!
              </h4>
              <p className="mt-2 text-gray-700">
                Congratulations! Your profile is now complete, and you have full
                access to the platform. You can now interact with other users by
                posting, liking, and commenting.
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

              <p className="mt-2 text-gray-700">
                Your experience matters to us, and we'd love to hear your
                thoughts on the registration process. Was the form easy to fill
                out, or did it feel too long? How likely would you be to drop
                off halfway if you couldn't complete it as you wished? More
                validation would be added in a real world scenario, but as this
                is just a test I didn't input anything else besides the basic.
              </p>

              <p className="mt-2 text-gray-700">
                I am particularly interested in your feelings about the
                verification steps. Would you feel comfortable providing your
                credit card information on a social media platform you're just
                getting to know for the first time in your life for verification
                purposes? What about submitting a government ID?
              </p>

              <p className="mt-2 text-gray-700">
                In a real-world scenario, would you prefer to confirm your email
                and phone number in Step 1 and then complete the rest of the
                form later? Your input will help us improve and ensure that
                we’re providing a smooth and trustworthy experience for all
                users.
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
                  <Link href="/method-a" className="underline text-blue-600">
                    View method A
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
