"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const coreServices = [
  {
    title: "Hoard & Squalor Recovery",
    description:
      "Structured cleanup, sorting, clearing and property recovery for severe clutter, squalor and difficult living environments.",
    href: "/services/hoard-squalor-recovery",
    image: "/hoarded-room-mackay-before.jpg",
    alt: "Severe hoarded room before cleanup in Mackay",
    imageHeightClassName: "h-64",
    imageClassName: "object-center",
  },
  {
    title: "Unattended Death & Biohazard Cleaning",
    description:
      "Discrete response for contamination, odour concerns and high-sensitivity environments requiring controlled remediation.",
    href: "/services/unattended-death-biohazard-cleaning",
    image: "/biohazard-cleaning-mackay-on-site-team.jpg",
    alt: "Biohazard cleanup in progress in Mackay property",
    imageHeightClassName: "h-64",
    imageClassName: "object-center",
  },
  {
    title: "Trauma & Crime Scene Cleaning",
    description:
      "Calm, practical cleanup after traumatic events, with clear communication from first contact through to handover.",
    href: "/services/trauma-crime-scene-cleaning",
    image: "/trauma-cleaning-mackay-ppe-doorway.jpg",
    alt: "Technician in PPE at Mackay property doorway",
    imageHeightClassName: "h-64",
    imageClassName: "object-center",
  },
  {
    title: "Vacate & Property Recovery",
    description:
      "Fast, practical reset support for families, landlords, agents and time-sensitive property handovers.",
    href: "/services/vacate-property-recovery",
    image: "/bedroom-cleaning-mackay-after.jpg",
    alt: "Recovered bedroom after cleanup in Mackay",
    imageHeightClassName: "h-64",
    imageClassName: "object-center",
  },
  {
    title: "Meth Lab Clean Up",
    description:
      "Controlled support for suspected or confirmed drug-affected properties requiring specialist decontamination and practical next steps.",
    href: "/services/meth-lab-clean-up",
    image: "/biohazard-cleaning-mackay-on-site-team.jpg",
    alt: "Specialist remediation team on site",
    imageHeightClassName: "h-64",
    imageClassName: "object-center",
  },
];

const supportServices = [
  {
    title: "Decluttering",
    description:
      "Hands-on support to clear, sort and reset rooms, storage areas and homes that have become difficult to manage. Ideal where function needs to be restored but full remediation is not required.",
    href: "/services/decluttering",
    image: "/storage-declutter-mackay-before.jpg",
    alt: "Storage area before decluttering in Mackay",
    imageHeightClassName: "h-64",
    imageClassName: "object-center",
  },
  {
    title: "Crisis Navigation",
    description:
      "A clear starting point when the situation feels too complex to manage alone. Focused on guidance, coordination and practical next steps so people can move from overwhelm to action.",
    href: "/services/crisis-navigation",
    image: "/crisis-navigation-mackay.jpg",
    alt: "Supportive in-home guidance conversation",
    imageHeightClassName: "h-64",
    imageClassName: "object-[center_35%]",
  },
];

const locations = [
  "Mackay",
  "Sarina",
  "Walkerston",
  "Whitsundays",
  "Proserpine",
  "Airlie Beach",
  "Bowen",
  "Moranbah",
];

const faqs = [
  {
    question: "What kinds of situations do you help with?",
    answer:
      "Support is available for biohazard cleanup, trauma and crime scene cleaning, unattended death cleaning, hoarding and squalor recovery, vacate reset work, decluttering and crisis navigation.",
  },
  {
    question: "Do I need to know exactly what service I need before I call?",
    answer:
      "No. Many people are unsure what category their situation falls into. The first step is simply making contact so the situation can be understood and the most practical next step identified.",
  },
  {
    question: "Do you service areas outside Mackay?",
    answer:
      "Yes. Work is available across Mackay and surrounding regions including Sarina, the Whitsundays, Proserpine, Airlie Beach, Bowen and Moranbah.",
  },
  {
    question: "Can decluttering and crisis navigation be booked without full remediation?",
    answer:
      "Yes. Those supports can be engaged on their own where the situation needs structure, practical direction or a calmer starting point rather than full specialist cleanup.",
  },
];
const nextSteps = [
  {
    step: "01",
    title: "Make Contact",
    description:
      "Call or send an enquiry with the location, urgency and a brief outline of the situation. You do not need to have everything figured out before reaching out.",
  },
  {
    step: "02",
    title: "We Assess the Situation",
    description:
      "The situation is reviewed to understand the level of response required, whether immediate action is needed and what the safest next step looks like.",
  },
  {
    step: "03",
    title: "A Clear Plan Is Confirmed",
    description:
      "You are given practical direction on scope, response timing and what happens next, so the process feels structured rather than overwhelming.",
  },
  {
    step: "04",
    title: "Discreet Support Moves Forward",
    description:
      "Cleanup, recovery or practical support is carried out in a controlled, respectful and confidential manner, with communication kept clear throughout.",
  },
];

const heroSignals = [
  "Discreet and confidential response",
  "Urgent and scheduled support",
  "Mackay and surrounding regions",
  "Clear next steps from first contact",
];

function ServiceCard({
  title,
  description,
  href,
  image,
  alt,
  imageClassName,
  imageHeightClassName,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  imageClassName?: string;
  imageHeightClassName?: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
      <div
        className={`relative w-full overflow-hidden bg-slate-100 ${
          imageHeightClassName ?? "h-64"
        }`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className={`object-cover transition duration-500 ${
            imageClassName ?? "object-center"
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="text-[1.65rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-[1rem] leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-auto pt-7">
          <a
            href={href}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-slate-500"
          >
            Find Out More
          </a>
        </div>
      </div>
    </article>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-[0_16px_38px_rgba(23,49,88,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(23,49,88,0.10)]">
      
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dff3f8] text-sm font-black tracking-[0.08em] text-[#2d99b3]">
          {step}
        </div>

        <div className="mt-7 h-px flex-1 bg-slate-200" />
      </div>

      <h3 className="mt-6 text-[1.35rem] font-black leading-tight tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-[1rem] leading-8 text-slate-600">
        {description}
      </p>
    </article>
  );
}

function HeroSignal({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-800 shadow-[0_10px_24px_rgba(23,49,88,0.06)]">
      {text}
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_26px_rgba(23,49,88,0.06)]">
      <h3 className="text-[1.35rem] font-black leading-tight text-slate-900">
        {question}
      </h3>
      <p className="mt-4 text-[1rem] leading-8 text-slate-600">{answer}</p>
    </article>
  );
}
function FloatingBackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > window.innerHeight);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isVisible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed left-6 bottom-6 z-50 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-700 shadow-[0_12px_30px_rgba(23,49,88,0.12)] transition hover:border-slate-500 hover:text-[#2d99b3]"
    >
      ↑ Top
    </a>
  );
}

export default function Home() {
  return (
   <main id="top" className="min-h-screen bg-[#edf3f3]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <div className="text-[20px] font-black uppercase tracking-tight text-slate-900 sm:text-[24px]">
            MACKAY <span className="text-[#2d99b3]">BIOHAZARD</span> CLEANING
          </div>

          <nav className="hidden items-center gap-10 md:flex">
          <a
  href="/services"
  className="rounded-full border border-white/50 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
>
  View Services
</a>
            <a href="/services" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
            Services
            </a>
            <a href="#locations" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
              Locations
            </a>
            <a href="#about" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
              About
            </a>
            <a href="#faq" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
              FAQ
            </a>
            <a href="#contact" className="font-bold text-slate-900 transition hover:text-[#2d99b3]">
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
             className="object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2230]/88 via-[#0f2230]/72 to-[#0f2230]/52" />
            <div className="absolute inset-x-0 bottom-0 h-16 " />

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
                    Discreet, controlled support for hoarding, squalor, trauma,
                    biohazard and complex property situations, based in Mackay and available where needed. 
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="tel:0405450705"
                      className="rounded-full bg-[#ef4f45] px-7 py-4 font-bold text-white transition hover:bg-[#db4339]"
                    >
                      Call the Response Line
                    </a>

                    <a
  href="/services"
  className="rounded-full border border-white/50 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
>
  View Services
</a>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="relative z-20 -mt-20 px-6 lg:px-10">
  <div className="mx-auto max-w-[1400px]">
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-none lg:p-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {heroSignals.map((item) => (
          <HeroSignal key={item} text={item} />
        ))}
      </div>
    </div>
  </div>
</section>
     <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 lg:px-10">
  <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white px-8 py-10 shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:px-12 lg:py-14">
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]"> 
         What Happens Next
        </p>

        <h2 className="mt-3 max-w-xl text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
          A clear process when the situation feels overwhelming
        </h2>

        <p className="mt-5 max-w-xl text-[1.08rem] leading-8 text-slate-600">
          The first step is not having all the answers. It is making contact so
          the situation can be understood, the response level can be assessed
          and the next move can be made clear.
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2d99b3]">
            Designed to reduce overwhelm
          </p>
          <p className="mt-3 text-[1rem] leading-8 text-slate-600">
            Sensitive situations are easier to manage when the process is calm,
            structured and clearly explained from the outset.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {nextSteps.map((item) => (
          <StepCard
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </div> 
       </section>
<section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
  <div className="mb-10">
    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
      Services
    </p>

    <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
      Specialist Remediation Services
    </h2>

    <p className="mt-5 max-w-3xl text-[1.08rem] leading-8 text-slate-600">
      Targeted service lines for contaminated, traumatic and high-sensitivity
      property situations, based in Mackay and available where needed.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {coreServices.map((service) => (
      <ServiceCard key={service.title} {...service} />
    ))}
  </div>
</section>
<section id="services" className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
  <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white px-8 py-10 shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:px-12 lg:py-14">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
        Additional Support
      </p>

      <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
        Decluttering &amp; Crisis Navigation
      </h2>

      <p className="mt-5 max-w-3xl text-[1.08rem] leading-8 text-slate-600">
        Some situations do not require full remediation. These services provide
        practical support, clearer direction and a starting point when the next
        step is not yet obvious.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {supportServices.map((service) => (
        <article
          key={service.title}
          className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-slate-50 shadow-[0_12px_30px_rgba(23,49,88,0.05)]"
        >
          <div className={`relative w-full overflow-hidden bg-slate-100 ${service.imageHeightClassName ?? "h-64"}`}>
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className={`object-cover transition duration-500 ${service.imageClassName ?? "object-center"}`}
            />
          </div>

          <div className="p-8">
            <h3 className="text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              {service.title}
            </h3>

            <p className="mt-5 text-[1rem] leading-8 text-slate-600">
              {service.description}
            </p>

            <div className="mt-8">
              <a
                href={service.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-slate-500"
              >
                Find Out More
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
  </section>   

    
      <section id="about" className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
  <div className="rounded-[2.25rem] border border-slate-200 bg-white px-8 py-10 shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:px-12 lg:py-14">
    <div className="max-w-[980px]">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
        Why People Reach Out
      </p>

      <h2 className="mt-4 max-w-[860px] text-[2.6rem] font-black uppercase leading-[0.92] tracking-tight text-slate-900 sm:text-[3.4rem]">
        A calm, practical response when the situation feels too much
      </h2>

      <p className="mt-8 max-w-[980px] text-[1.08rem] leading-8 text-slate-600">
        Some situations need more than cleaning. They need calm judgement,
        structure and a clear next step. Mackay Biohazard Cleaning provides
        discreet, controlled support for hoarding, squalor, trauma, biohazard
        and other complex property situations across Mackay and surrounding
        regions.
      </p>

      <p className="mt-6 max-w-[980px] text-[1.08rem] leading-8 text-slate-600">
        Every enquiry is handled with respect, confidentiality and practical
        direction. The first step is simply understanding what is happening,
        what level of response is needed and how to move forward safely.
      </p>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_8px_22px_rgba(23,49,88,0.04)]">
        <h3 className="text-[1.2rem] font-black leading-tight text-slate-900">
          Discreet and confidential
        </h3>
        <p className="mt-4 text-[1rem] leading-8 text-slate-600">
          Sensitive situations are handled with respect, privacy and clear
          communication.
        </p>
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_8px_22px_rgba(23,49,88,0.04)]">
        <h3 className="text-[1.2rem] font-black leading-tight text-slate-900">
          Clear next steps
        </h3>
        <p className="mt-4 text-[1rem] leading-8 text-slate-600">
          You do not need to know exactly what service to ask for before making
          contact.
        </p>
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_8px_22px_rgba(23,49,88,0.04)]">
        <h3 className="text-[1.2rem] font-black leading-tight text-slate-900">
          Practical local response
        </h3>
        <p className="mt-4 text-[1rem] leading-8 text-slate-600">
          Support is available across Mackay and nearby service areas for urgent
          and scheduled work.
        </p>
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_8px_22px_rgba(23,49,88,0.04)]">
        <h3 className="text-[1.2rem] font-black leading-tight text-slate-900">
          Calm, structured approach
        </h3>
        <p className="mt-4 text-[1rem] leading-8 text-slate-600">
          The focus is on reducing overwhelm, restoring order and helping people
          move forward.
        </p>
      </div>
    </div>
  </div>
</section>
     <section id="locations" className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
  <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:p-12">
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
        Locations
      </p>

      <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
        Based in Mackay, Available Wherever Needed
      </h2>

      <p className="mt-5 max-w-3xl text-[1.08rem] leading-8 text-slate-600">
        Immediate and scheduled response is available across Mackay and surrounding
        regions, with travel arranged for other locations where support is needed.
      </p>

      <p className="mt-4 max-w-3xl text-[1rem] leading-8 text-slate-600">
        Regular service areas include the locations below, however work is not
        limited to these regions.
      </p>
    </div>

    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {locations.map((location) => (
        <div
          key={location}
          className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-5 py-4 text-lg font-bold text-slate-800"
        >
          {location}
        </div>
      ))}
    </div>

    <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-[#f8fbfb] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2d99b3]">
        Travel Available
      </p>
      <p className="mt-3 max-w-3xl text-[1rem] leading-8 text-slate-600">
        If the situation is outside the usual service area, travel can be discussed
        and arranged based on location, urgency and scope of work.
      </p>
    </div>
  </div>
</section> 

      <section id="faq" className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            FAQ
          </p>
          <h2 className="mt-3 text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-[3.2rem]">
            Common Questions
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
<section id="contact" className="mx-auto max-w-[1400px] px-6 py-4 pb-20 lg:px-10">
  <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(23,49,88,0.08)] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
    <div className="p-8 lg:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
        Request a Fast Quote
      </p>

      <h2 className="mt-3 text-[2.3rem] font-black leading-[0.96] tracking-tight text-slate-900">
        Tell Me What You’re Dealing With
      </h2>

      <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-slate-600">
        Every enquiry is handled confidentially. Share the location, urgency and
        a brief outline of the situation so the next step can be clarified
        quickly.
      </p>

      <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2d99b3]">
          Travel Available
        </p>
        <p className="mt-3 text-[1rem] leading-8 text-slate-600">
          Based in Mackay and regularly servicing surrounding regions, with
          travel arranged for other locations where support is needed.
        </p>
      </div>

      <form className="mt-8 grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Name"
          className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none sm:col-span-2"
        />
        <input
          type="text"
          placeholder="Location / suburb / town"
          className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none sm:col-span-2"
        />
        <textarea
          placeholder="Brief description of the situation"
          rows={5}
          className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <button
            type="button"
            className="rounded-full bg-[#ef4f45] px-7 py-4 font-bold text-white transition hover:bg-[#db4339]"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>

   <div className="relative min-h-[420px]">
  <Image
    src="/crisis-navigation-mackay.jpg"
    alt="Supportive in-home guidance meeting"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2230]/78 via-[#0f2230]/32 to-[#0f2230]/12" />

  <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
    <div className="max-w-md rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        Confidential Enquiries
      </p>

      <h3 className="mt-3 text-[1.8rem] font-black leading-[1] tracking-tight text-white">
        Clear next steps, handled discreetly
      </h3>

      <p className="mt-4 text-[1rem] leading-7 text-slate-200">
        Based in Mackay and available to travel where needed. Share the
        location, urgency and situation details and the most practical next
        step can be clarified quickly.
      </p>
    </div>
  </div>
</div> 
  </div>
</section>
     
    <footer className="bg-[#0b1d2a] text-white">
  <div className="mx-auto max-w-[1400px] px-6 py-18 lg:px-10">
    <div className="grid gap-14 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_0.9fr_0.9fr_1.05fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Mackay Biohazard Cleaning
        </p>
        <h3 className="mt-4 text-[2.2rem] font-black leading-[1.02] tracking-tight">
          Practical, discreet support when the situation feels too much
        </h3>
        <p className="mt-6 max-w-md text-[1.05rem] leading-8 text-slate-300">
          Controlled support for biohazard, trauma, hoarding, squalor and complex
          property situations across Mackay and surrounding regions.
        </p>
      </div>

      <div>
  <h4 className="text-[1.35rem] font-black tracking-tight text-white">
    Services
  </h4>
  <ul className="mt-6 space-y-3 text-[1.05rem] text-slate-300">
    <li>
      <a href="/services/unattended-death-biohazard-cleaning" className="transition hover:text-white">
        Biohazard Cleaning
      </a>
    </li>
    <li>
      <a href="/services/trauma-crime-scene-cleaning" className="transition hover:text-white">
        Trauma & Crime Scene Cleaning
      </a>
    </li>
    <li>
      <a href="/services/unattended-death-biohazard-cleaning" className="transition hover:text-white">
        Unattended Death Cleaning
      </a>
    </li>
    <li>
      <a href="/services/hoard-squalor-recovery" className="transition hover:text-white">
        Hoarding & Squalor Recovery
      </a>
    </li>
    <li>
      <a href="/services/vacate-property-recovery" className="transition hover:text-white">
        Vacate & Property Recovery
      </a>
    </li>
    <li>
      <a href="/services/meth-lab-clean-up" className="transition hover:text-white">
        Meth Lab Clean Up
      </a>
    </li>
    <li>
      <a href="/services/decluttering" className="transition hover:text-white">
        Decluttering
      </a>
    </li>
    <li>
      <a href="/services/crisis-navigation" className="transition hover:text-white">
        Crisis Navigation
      </a>
    </li>
  </ul>
</div>
      <div>
        <h4 className="text-[1.35rem] font-black tracking-tight text-white">
          Company
        </h4>
        <ul className="mt-6 space-y-3 text-[1.05rem] text-slate-300">
          <li>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#locations" className="transition hover:text-white">
              Locations
            </a>
          </li>
          <li>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          24/7 Urgent Response Line
        </p>
        <a
          href="tel:0405450705"
          className="mt-5 block text-[2.8rem] font-black leading-none tracking-tight text-[#ef4f45]"
        >
          0405 450 705
        </a>

        <p className="mt-5 text-[1.05rem] leading-8 text-slate-300">
          Call for urgent situations requiring immediate contact.
        </p>

        <p className="mt-3 text-[1rem] leading-7 text-slate-400">
          For non-urgent matters, send an enquiry and the next step can be clarified
          quickly and confidentially.
        </p>

        <div className="mt-7">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Send an Enquiry
          </a>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Mackay Biohazard Cleaning. All rights reserved.</p>
      <p>Mackay, Queensland, Australia</p>
    </div>
  </div>
</footer>

<FloatingBackToTopButton />
</main>
  );
}
