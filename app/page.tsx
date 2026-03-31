import Image from "next/image";

const coreServices = [
  {
    title: "Hoard & Squalor Recovery",
    description:
      "Structured cleanup, sorting, clearing and property recovery for severe clutter, squalor and difficult living environments.",
    href: "/services",
  },
  {
    title: "Unattended Death & Biohazard Cleaning",
    description:
      "Discrete response for contamination, odour concerns and high-sensitivity environments requiring controlled remediation.",
    href: "/services",
  },
  {
    title: "Trauma & Crime Scene Cleaning",
    description:
      "Calm, practical cleanup after traumatic events, with clear communication from first contact through to handover.",
    href: "/services",
  },
  {
    title: "Vacate & Property Recovery",
    description:
      "Fast, practical reset support for families, landlords, agents and time-sensitive property handovers.",
    href: "/services",
  },
];

const supportServices = [
  {
    title: "Decluttering",
    description:
      "Hands-on support to clear, sort and reset rooms, storage areas and homes that have become difficult to manage. Ideal where function needs to be restored but full remediation is not required.",
    href: "/services",
  },
  {
    title: "Crisis Navigation",
    description:
      "A clear starting point when the situation feels too complex to manage alone. Focused on guidance, coordination and practical next steps so people can move from overwhelm to action.",
    href: "/services",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#edf3f3]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <div className="text-[20px] font-black uppercase tracking-tight text-slate-900 sm:text-[24px]">
            MACKAY <span className="text-[#2d99b3]">BIOHAZARD</span> CLEANING
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#services" className="font-bold text-slate-700 hover:text-slate-900">
              Services
            </a>
            <a href="#locations" className="font-bold text-slate-700 hover:text-slate-900">
              Locations
            </a>
            <a href="#about" className="font-bold text-slate-700 hover:text-slate-900">
              About
            </a>
            <a href="#faq" className="font-bold text-slate-700 hover:text-slate-900">
              FAQ
            </a>
            <a href="#contact" className="font-bold text-slate-700 hover:text-slate-900">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:0405450705"
              className="hidden text-[18px] font-bold text-slate-700 lg:block"
            >
              0405 450 705
            </a>
            <a
              href="tel:0405450705"
              className="rounded-full bg-[#ef4f45] px-6 py-3 font-bold text-white transition hover:bg-[#db4339]"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="pb-14 pt-0">
        <div className="w-full overflow-hidden bg-[#0f2230]">
          <div className="relative min-h-[720px] w-full">
            <Image
              src="/hoarded-room-mackay-before.jpg"
              alt="Severe hoarded room before cleanup in Mackay"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0f2230]/68" />

            <div className="relative z-10 flex min-h-[720px] items-center">
              <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
                <div className="max-w-[680px]">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    24/7 Urgent Response Line
                  </p>

                  <h1 className="max-w-[620px] text-[3.6rem] font-black uppercase leading-[0.92] tracking-tight text-white sm:text-[5.2rem]">
                    Biohazard &amp; Trauma Cleaning Mackay
                  </h1>

                  <p className="mt-7 max-w-[620px] text-[1.2rem] leading-9 text-slate-200">
                    Discreet, controlled remediation for hoarding, squalor, trauma,
                    biohazard and complex property situations across Mackay and surrounding regions.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="tel:0405450705"
                      className="rounded-full bg-[#ef4f45] px-7 py-4 font-bold text-white transition hover:bg-[#db4339]"
                    >
                      Call the Response Line
                    </a>

                    <a
                      href="#services"
                      className="rounded-full border border-white/50 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
                    >
                      View Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            Services
          </p>
          <h2 className="mt-3 text-[3rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[4rem]">
            Specialist Remediation Services
          </h2>
          <p className="mt-5 max-w-3xl text-[1.15rem] leading-8 text-slate-600">
            Targeted service lines for contaminated, traumatic and high-sensitivity
            property situations across Mackay and surrounding regions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coreServices.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]"
            >
              <h3 className="text-[2rem] font-black uppercase leading-none tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="mt-5 text-[1.05rem] leading-8 text-slate-600">
                {service.description}
              </p>
              <div className="mt-8">
                <a
                  href={service.href}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-slate-500"
                >
                  Find Out More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-4 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              Additional Support
            </p>
            <h2 className="mt-3 max-w-[720px] text-[3rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[4rem]">
              Decluttering and Crisis Navigation Can Be Booked Directly
            </h2>
            <p className="mt-6 max-w-[760px] text-[1.15rem] leading-8 text-slate-600">
              Not every enquiry is a full remediation job. Some situations need calm
              decluttering, some need practical coordination, and some need a clear
              starting point when people do not know who to call first.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:mt-0">
            {supportServices.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-[2rem] font-black uppercase leading-none tracking-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-[1.05rem] leading-8 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a
                    href={service.href}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-slate-500"
                  >
                    Find Out More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
