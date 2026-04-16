import Image from "next/image";

const specialistServices = [
  {
    title: "Hoard & Squalor Recovery",
    description:
      "Structured cleanup, sorting, clearing and property recovery for severe clutter, squalor and difficult living environments.",
    href: "/services/hoard-squalor-recovery",
    image: "/hoarded-room-mackay-before.jpg",
    alt: "Severe hoarded room before cleanup in Mackay",
  },
  {
    title: "Unattended Death & Biohazard Cleaning",
    description:
      "Discrete response for contamination, odour concerns and high-sensitivity environments requiring controlled remediation.",
    href: "/services/unattended-death-biohazard-cleaning",
    image: "/biohazard-cleaning-mackay-on-site-team.jpg",
    alt: "Biohazard cleanup in progress in Mackay property",
  },
  {
    title: "Trauma & Crime Scene Cleaning",
    description:
      "Calm, practical cleanup after traumatic events, with clear communication from first contact through to handover.",
    href: "/services/trauma-crime-scene-cleaning",
    image: "/trauma-cleaning-mackay-ppe-doorway.jpg",
    alt: "Technician in PPE at Mackay property doorway",
  },
  {
    title: "Vacate & Property Recovery",
    description:
      "Fast, practical reset support for families, landlords, agents and time-sensitive property handovers.",
    href: "/services/vacate-property-recovery",
    image: "/bedroom-cleaning-mackay-after.jpg",
    alt: "Recovered bedroom after cleanup in Mackay",
  },
  {
    title: "Meth Lab Clean Up",
    description:
      "Controlled support for suspected or confirmed drug-affected properties requiring specialist decontamination and practical next steps.",
    href: "/services/meth-lab-clean-up",
    image: "/biohazard-cleaning-mackay-on-site-team.jpg",
    alt: "Specialist remediation team on site",
  },
];

const supportServices = [
  {
    title: "Decluttering",
    description:
      "Hands-on support to clear, sort and reset rooms, storage areas and homes that have become difficult to manage.",
    href: "/services/decluttering",
    image: "/storage-declutter-mackay-before.jpg",
    alt: "Storage area before decluttering in Mackay",
  },
  {
    title: "Crisis Navigation",
    description:
      "A clear starting point when the situation feels too complex to manage alone, with guidance and practical next steps.",
    href: "/services/crisis-navigation",
    image: "/crisis-navigation-mackay.jpg",
    alt: "Supportive in-home guidance conversation",
  },
];

function ServiceCard({
  title,
  description,
  href,
  image,
  alt,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h2 className="text-[1.65rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
          {title}
        </h2>

        <p className="mt-4 text-[1rem] leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-auto pt-7">
          <a
            href={href}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-slate-500"
          >
            View Service
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
        <main className="min-h-screen bg-[#edf3f3]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="/"
            className="text-[20px] font-black uppercase tracking-tight text-slate-900 sm:text-[24px]"
          >
            MACKAY <span className="text-[#2d99b3]">BIOHAZARD</span> CLEANING
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="/services" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
              Services
            </a>
            <a href="/#locations" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
              Locations
            </a>
            <a href="/#about" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
              About
            </a>
            <a href="/#faq" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
              FAQ
            </a>
            <a href="/#contact" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
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
      <section className="relative overflow-hidden">
        <div className="relative min-h-[520px]">
          <Image
            src="/hoarded-room-mackay-before.jpg"
            alt="Specialist remediation support in Mackay"
            fill
            priority
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2230]/88 via-[#0f2230]/72 to-[#0f2230]/52" />

          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1400px] items-center px-6 py-20 lg:px-10">
            <div className="max-w-[760px]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Services
              </p>

              <h1 className="mt-5 text-[3.2rem] font-black uppercase leading-[0.92] tracking-tight text-white sm:text-[4.8rem]">
                Specialist Cleaning & Support Services
              </h1>

              <p className="mt-7 max-w-[720px] text-[1.15rem] leading-9 text-slate-200">
                Practical, discreet support for biohazard, trauma, hoarding,
                squalor, property recovery, decluttering and crisis navigation,
                based in Mackay and available where needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            Specialist Remediation Services
          </p>
          <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
            High-sensitivity property support
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {specialistServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            Additional Support
          </p>
          <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
            Practical support services
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {supportServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-10">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            Request a Fast Quote
          </p>
          <h2 className="mt-3 text-[2.3rem] font-black leading-[0.96] tracking-tight text-slate-900">
            Tell Me What You’re Dealing With
          </h2>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-slate-600">
            Based in Mackay and available where needed. Share the location,
            urgency and a brief outline of the situation so the next step can be
            clarified quickly.
          </p>

          <div className="mt-8">
            <a
              href="tel:0405450705"
              className="rounded-full bg-[#ef4f45] px-7 py-4 font-bold text-white transition hover:bg-[#db4339]"
            >
              Call 0405 450 705
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
