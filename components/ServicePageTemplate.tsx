import Image from "next/image";

type ServiceFaq = {
  question: string;
  answer: string;
};

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  summaryTitle: string;
  summaryText: string;
  situationsTitle: string;
  situations: string[];
  processTitle: string;
  processSteps: string[];
  faqTitle?: string;
  faqs: ServiceFaq[];
};

export default function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  heroImage,
  heroAlt,
  summaryTitle,
  summaryText,
  situationsTitle,
  situations,
  processTitle,
  processSteps,
  faqTitle = "Common Questions",
  faqs,
}: ServicePageTemplateProps) {
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

      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              Overview
            </p>
            <h2 className="mt-3 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              {summaryTitle}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-8 text-slate-600">
              {summaryText}
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              Travel Available
            </p>
            <h2 className="mt-3 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              Based in Mackay, available where needed
            </h2>
            <p className="mt-5 text-[1.05rem] leading-8 text-slate-600">
              Regular service is available across Mackay and surrounding regions,
              with travel arranged for other locations based on urgency, scope
              and access requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-4 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              When this service helps
            </p>
            <h2 className="mt-3 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              {situationsTitle}
            </h2>

            <ul className="mt-6 space-y-4">
              {situations.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 text-[1rem] leading-7 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
              Process
            </p>
            <h2 className="mt-3 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
              {processTitle}
            </h2>

            <ol className="mt-6 space-y-4">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 text-[1rem] leading-7 text-slate-700"
                >
                  <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#dff3f8] text-sm font-black text-[#2d99b3]">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d99b3]">
            FAQ
          </p>
          <h2 className="mt-3 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-slate-900">
            {faqTitle}
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-[1.2rem] font-black leading-tight text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-4 text-[1rem] leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
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
              Every enquiry is handled confidentially. Share the location,
              urgency and a brief outline of the situation so the next step can
              be clarified quickly.
            </p>

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
              src={heroImage}
              alt={heroAlt}
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
                  Based in Mackay and available to travel where needed. Share
                  the location, urgency and situation details and the most
                  practical next step can be clarified quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
