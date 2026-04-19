import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Hoard & Squalor Recovery Mackay",
  description:
    "Structured, respectful hoard and squalor recovery in Mackay for difficult living environments requiring staged clearing, practical intervention and a safer way forward.",
  alternates: {
    canonical: "/services/hoard-squalor-recovery",
  },
  openGraph: {
    title: "Hoard & Squalor Recovery Mackay | Mackay Biohazard Cleaning",
    description:
      "Structured, respectful hoard and squalor recovery in Mackay for difficult living environments requiring staged clearing, practical intervention and a safer way forward.",
    url: "https://www.mackaybiohazardcleaning.com.au/services/hoard-squalor-recovery",
    images: [
      {
        url: "/hoarded-room-mackay-before.jpg",
        width: 1200,
        height: 630,
        alt: "Hoard and squalor recovery in Mackay",
      },
    ],
  },
  twitter: {
    title: "Hoard & Squalor Recovery Mackay | Mackay Biohazard Cleaning",
    description:
      "Structured, respectful hoard and squalor recovery in Mackay for difficult living environments requiring staged clearing, practical intervention and a safer way forward.",
    images: ["/hoarded-room-mackay-before.jpg"],
  },
};

export default function HoardSqualorRecoveryPage() {
  return (
    <ServicePageTemplate
      eyebrow="Specialist Remediation Service"
      title="Hoard & Squalor Recovery Mackay"
      intro="Structured, respectful support for hoarding, squalor and difficult living environments, based in Mackay and available where needed."
      heroImage="/hoarded-room-mackay-before.jpg"
      heroAlt="Severe hoarded room before cleanup in Mackay"
      summaryTitle="Practical support for complex living environments"
      summaryText="Hoard and squalor situations often require more than standard cleaning. Support needs to be structured, controlled and carried out with clear communication at every stage. The focus is on restoring function, reducing risk and creating a practical way forward."
      situationsTitle="This service may be suitable where"
      situations={[
        "Rooms, storage areas or full homes have become difficult to use safely.",
        "Severe clutter, accumulated waste or unsanitary conditions are affecting daily living.",
        "A property needs staged clearing, sorting and reset work rather than ordinary cleaning alone.",
        "Family members, carers, housing stakeholders or other supports need practical intervention.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the location, urgency and a brief outline of the situation.",
        "The level of clutter, access issues, safety concerns and likely scope are reviewed.",
        "A practical response path is discussed, including whether staged support or larger remediation is needed.",
        "Work proceeds in a controlled, respectful manner focused on safety, function and next steps.",
      ]}
      faqs={[
        {
          question: "Do I need to know whether this is hoarding or just severe clutter?",
          answer:
            "No. The first step is simply understanding the situation and identifying the most practical response.",
        },
        {
          question: "Can support be staged over time?",
          answer:
            "Yes. Some situations are best approached in stages, depending on safety, scope, decision-making and access.",
        },
        {
          question: "Do you only work in Mackay?",
          answer:
            "No. Mackay is the service base, with surrounding regions regularly serviced and travel arranged where needed.",
        },
        {
          question: "Is this handled discreetly?",
          answer:
            "Yes. Sensitive situations are approached with clear communication, respect and confidentiality.",
        },
      ]}
    />
  );
}
