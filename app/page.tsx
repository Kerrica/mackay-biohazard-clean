import Image from "next/image";

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
    </main>
  );
}
