import { useContactFormCount } from "@/lib/contactForm";

export default async function LandingPage() {
  const count = await useContactFormCount();

  return (
    <section
      className="
        max-w-7xl mx-auto my-12 px-2 sm:px-6 lg:px-8
        pt-20 sm:pt-24 md:pt-32 pb-8
        relative z-10
      "
    >
      <div
        className="
          rounded-2xl
          px-4 sm:px-8
          py-6 sm:py-8
          mx-auto
          max-w-md sm:max-w-xl w-full
          shadow-lg
          bg-gradient-to-br from-[#1e2333] via-[#23304C] to-[#20263A]
          backdrop-blur
          border border-blue-900/40
          text-center
        "
      >
        <h3 className="
          text-2xl sm:text-3xl
          font-extrabold
          mb-4
          tracking-tight
          text-transparent
          bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-200
        ">
          Wishlist Waiting List
        </h3>
        <p className="
          text-base sm:text-[1.18rem]
          font-semibold
          text-transparent
          bg-clip-text
          bg-gradient-to-r from-blue-300 via-cyan-400 to-indigo-200
        ">
          {count} people are already on the waiting list!
        </p>
      </div>
    </section>
  );
}
