import Link from "next/link";
import Header from "@/components/common/Header";

export default function IntroPage() {
  return (
    <div className="bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Introduction</h1>
        <p className="mt-4 text-gray-700">
          Welcome! You’ll be testing two different sign-up methods designed for
          a hypothetical social media platform that prioritizes security and
          aims to eliminate fake accounts. Your feedback is crucial in helping
          us determine which method better aligns with these goals.
        </p>{" "}
        <p className="mt-4 text-gray-700">
          Please note: This form is a mockup and does not lead to any real
          account creation or data collection. All fields contain fake prefixes
          (e.g., “fake fullname”), so feel free to fill them in as you wish.
        </p>
        <p className="mt-4 text-gray-700">
          Our goal is to resolve an important question about how a sign-up
          process for a social media startup focused on security should be
          structured. We value any tips or ideas you might have, even if they’re
          unrelated to the form itself.{" "}
        </p>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-800">Method A</h3>
            <p className="text-gray-700">
              Method A features a straightforward sign-up process with an
              emphasis on user experience. After confirming their (fake) email,
              users gain limited access to the platform. However, to fully
              engage with the community (e.g., friending or liking posts), users
              must complete their profile and verify their authenticity. This
              approach balances ease of access for new users while ensuring that
              only genuine users can interact with others.{" "}
              <Link href="/method-a" className="text-blue-600 hover:underline">
                Learn more
              </Link>
              .
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-800">Method B</h3>
            <p className="text-gray-700">
              Method B employs a more rigorous and comprehensive sign-up
              process. Users must complete an extensive form and verify their
              identity before gaining any access to the platform. This method
              includes multiple steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                <strong>Initial Setup:</strong> Users provide their email and
                mobile number. A verification code is sent to both.
              </li>
              <li>
                <strong>Account Creation:</strong> After verifying their contact
                details, users fill out a detailed profile, including personal
                information such as full name, date of birth, and address.
              </li>
              <li>
                <strong>Verification Options:</strong> Users can choose between
                several verification methods:
                <ul className="list-disc list-inside ml-5">
                  <li>
                    <strong>Instant Online Verification:</strong> Verify
                    instantly using a government ID or credit card for immediate
                    access.
                  </li>
                  <li>
                    <strong>Offline Verification:</strong> Submit documents for
                    manual review. Full access is granted once the documents are
                    approved.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 mt-2">
              Method B focuses on a thorough verification process to ensure the
              highest level of security before granting platform access.{" "}
              <Link href="/method-b" className="text-blue-600 hover:underline">
                Learn more
              </Link>
              .
            </p>
          </div>
        </section>
        <div className="mt-8">
          <Link
            href="/method-a"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Start testing on the Method A
          </Link>
        </div>
      </main>
    </div>
  );
}
