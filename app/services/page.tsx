import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "View specialist cleaning and support services across Mackay, including biohazard cleaning, trauma and crime scene cleaning, unattended death cleaning, hoard and squalor recovery, vacate property recovery, decluttering, crisis navigation and meth lab clean up.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Mackay Biohazard Cleaning",
    description:
      "View specialist cleaning and support services across Mackay, including biohazard cleaning, trauma and crime scene cleaning, unattended death cleaning, hoard and squalor recovery, vacate property recovery, decluttering, crisis navigation and meth lab clean up.",
    url: "https://www.mackaybiohazardcleaning.com.au/services",
    images: [
      {
        url: "/hoarded-room-mackay-before.jpg",
        width: 1200,
        height: 630,
        alt: "Specialist cleaning and support services in Mackay",
      },
    ],
  },
  twitter: {
    title: "Services | Mackay Biohazard Cleaning",
    description:
      "View specialist cleaning and support services across Mackay, including biohazard cleaning, trauma and crime scene cleaning, unattended death cleaning, hoard and squalor recovery, vacate property recovery, decluttering, crisis navigation and meth lab clean up.",
    images: ["/hoarded-room-mackay-before.jpg"],
  },
};

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
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-slate-500"
          >
            View Service
          </Link>
        </div>
      </div>
    </article>
  );
}

function QuickLinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(23,49,88,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,49,88,0.08)]"
    >
      <h2 className="text-[1.35rem] font-black leading-tight tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-3 text-[1rem] leading-8 text-slate-600">
        {description}
      </p>
      <p className="mt-5 font-bold text-[#2d99b3]">Go to section</p>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#edf3f3]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="text-[20px] font-black uppercase tracking-tight text-slate-900 sm:text-[24px]"
          >
            MACKAY <span className="text-[#2d99b3]">BIOHAZARD</span> CLEANING
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <Link
              href="/services"
              className="font-bold text-slate-900 transition hover:text-[#2d99b3]"
            >
              Services
            </Link>
            <Link
              href="/#locations"
              className="font-bold text-slate-900 transition hover:text-[#2d99b3]"
            >
              Locations
            </Link>
            <Link
              href="/#about"
              className="font-bold text-slate-900 transition hover:text-[#2d99b3]"
            >
              About
            </Link>
            <Link
              href="/#faq"
              className="font-bold text-slate-900 transition hover:text-[#2d99b3]"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="font-bold text-slate-900 transition hover:text-[#2d99b3]"
            >
              Contact
            </Link>
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
        <div className="relative min-h-[560px]">
          <Image
            src="/hoarded-room-mackay-before.jpg"
            alt="Specialist remediation support in Mackay"
            fill
            priority
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2230]/88 via-[#0f2230]/72 to-[#0f2230]/52" />

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-6 py-20 lg:px-10">
            <div className="max-w-[780px]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Services
              </p>

              <h1 className="mt-5 text-[3.2rem] font-black uppercase leading-[0.92] tracking-tight text-white sm:text-[4.8rem]">
                Specialist Cleaning &amp; Support Services
              </h1>

              <p className="mt-7 max-w-[720px] text-[1.15rem] leading-9 text-slate-200">
                Practical, discreet support for biohazard, trauma, hoarding,
                squalor, property recovery, decluttering and crisis navigation,
                based in Mackay and available where needed.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:0405450705"
                  className="rounded-full bg-[#ef4f45] px-7 py-4 font-bold text-white transition hover:bg-[#db4339]"
                >
                  Call the Response Line
                </a>

                <Link
                  href="#service-groups"
                  className="rounded-full border border-white/50 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
                >
                  View Service Types
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-groups"
        className="relative z-20 -mt-16 px-6 lg:px-10"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <QuickLinkCard
                href="#specialist-services"
                title="Specialist Remediation Services"
                description="For contaminated, traumatic, high-risk or difficult property situations requiring a more controlled response."
              />
              <QuickLinkCard
                href="#support-services"
                title="Additional Support Services"
                description="For situations needing practical help, structure or clearer direction without full remediation."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-24 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            Choosing the right starting point
          </p>
          <h2 className="mt-3 text-[2.2rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[2.8rem]">
            You do not need to know exactly which service fits before making contact
          </h2>
          <p className="mt-5 max-w-4xl text-[1.08rem] leading-8 text-slate-600">
            Many situations overlap. Some begin as a property recovery issue and
            turn out to need specialist remediation. Others feel urgent and
            overwhelming but mainly need structure, support and a practical
            next-step plan. This page is here to help clarify the main service
            paths, but the first step can simply be reaching out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-slate-500"
            >
              Use Homepage Enquiry Form
            </Link>
            <a
              href="tel:0405450705"
              className="rounded-full bg-[#ef4f45] px-6 py-3 font-bold text-white transition hover:bg-[#db4339]"
            >
              Call 0405 450 705
            </a>
          </div>
        </div>
      </section>

      <section
        id="specialist-services"
        className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10"
      >
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            Specialist Remediation Services
          </p>
          <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
            High-sensitivity property support
          </h2>
          <p className="mt-5 text-[1.08rem] leading-8 text-slate-600">
            These services are suited to contaminated, traumatic, unsafe or more
            complex property situations where ordinary cleaning is not enough and
            a more controlled response is required.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {specialistServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section
        id="support-services"
        className="mx-auto max-w-[1400px] px-6 py-8 lg:px-10"
      >
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            Additional Support
          </p>
          <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
            Practical support services
          </h2>
          <p className="mt-5 text-[1.08rem] leading-8 text-slate-600">
            These services are suited to situations that need hands-on help,
            structure, guidance or a clearer starting point, without full
            specialist remediation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {supportServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              For families
            </p>
            <h2 className="mt-3 text-[1.8rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              When the situation feels too much
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-slate-600">
              A practical starting point for situations involving overwhelm,
              contamination concerns, difficult property conditions or urgent
              decisions that need to be made clearly.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              For landlords and agents
            </p>
            <h2 className="mt-3 text-[1.8rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              Time-sensitive property support
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-slate-600">
              Useful where a property needs clearing, remediation, recovery or a
              practical response before inspection, listing, handover or re-use.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              For agencies and support networks
            </p>
            <h2 className="mt-3 text-[1.8rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              Clearer pathways forward
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-slate-600">
              A structured option where the response path is unclear and the
              situation needs practical direction, property intervention or
              staged support.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-10"
      >
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:grid lg:grid-cols-[1fr_0.95fr]">
          <div className="p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              Request a Fast Quote
            </p>
            <h2 className="mt-3 text-[2.3rem] font-black leading-[0.96] tracking-tight text-slate-900">
              Not sure which service fits?
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-slate-600">
              That is common. Share the location, urgency and a brief outline of
              the situation and the most practical next step can be clarified
              quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:0405450705"
                className="rounded-full bg-[#ef4f45] px-7 py-4 font-bold text-white transition hover:bg-[#db4339]"
              >
                Call 0405 450 705
              </a>

              <Link
                href="/#contact"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-slate-500"
              >
                Use Homepage Enquiry Form
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px]">
            <Image
              src="/crisis-navigation-mackay.jpg"
              alt="Supportive in-home guidance conversation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2230]/75 via-[#0f2230]/28 to-[#0f2230]/10" />
          </div>
        </div>
      </section>
    </main>
  );
}
