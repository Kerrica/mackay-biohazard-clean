import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Trauma & Crime Scene Cleaning Mackay",
  description:
    "Calm, practical trauma and crime scene cleaning in Mackay, with controlled remediation, clear next steps and discreet support after traumatic events.",
  alternates: {
    canonical: "/services/trauma-crime-scene-cleaning",
  },
  openGraph: {
    title: "Trauma & Crime Scene Cleaning Mackay | Mackay Biohazard Cleaning",
    description:
      "Calm, practical trauma and crime scene cleaning in Mackay, with controlled remediation, clear next steps and discreet support after traumatic events.",
    url: "https://www.mackaybiohazardcleaning.com.au/services/trauma-crime-scene-cleaning",
    images: [
      {
        url: "/trauma-cleaning-mackay-ppe-doorway.jpg",
        width: 1200,
        height: 630,
        alt: "Trauma and crime scene cleaning in Mackay",
      },
    ],
  },
  twitter: {
    title: "Trauma & Crime Scene Cleaning Mackay | Mackay Biohazard Cleaning",
    description:
      "Calm, practical trauma and crime scene cleaning in Mackay, with controlled remediation, clear next steps and discreet support after traumatic events.",
    images: ["/trauma-cleaning-mackay-ppe-doorway.jpg"],
  },
};

export default function TraumaCrimeSceneCleaningPage() {
  return (
    <ServicePageTemplate
      eyebrow="Specialist Remediation Service"
      title="Trauma & Crime Scene Cleaning Mackay"
      intro="Calm, practical support for trauma-related cleanup and crime scene remediation, based in Mackay and available where needed."
      heroImage="/trauma-cleaning-mackay-ppe-doorway.jpg"
      heroAlt="Technician in PPE at Mackay property doorway"
      summaryTitle="Controlled support after traumatic events"
      summaryText="Trauma and crime scene situations require a response that is both practical and respectful. These environments can involve contamination risks, emotional sensitivity, restricted access and urgent decision-making. The focus is on providing clear next steps, controlled remediation and calm communication throughout the process."
      situationsTitle="This service may be suitable where"
      situations={[
        "A traumatic incident has occurred and the property needs specialist cleanup.",
        "A crime scene has been released and remediation is required before the area can be used again.",
        "There are contamination concerns, safety issues or distressing site conditions affecting access.",
        "Families, landlords, housing stakeholders or other supports need a practical and discreet response.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the location, urgency and a brief outline of the situation.",
        "The site conditions, access requirements, contamination concerns and likely scope are reviewed.",
        "A practical response path is discussed, including timing, site access and the most appropriate next step.",
        "Cleanup proceeds in a controlled, respectful manner with communication kept clear throughout.",
      ]}
      faqs={[
        {
          question: "Do I need to know whether this falls under trauma cleaning or another service before I call?",
          answer:
            "No. The first step is simply understanding the situation and identifying the most practical response.",
        },
        {
          question: "Is this handled discreetly?",
          answer:
            "Yes. Sensitive situations are approached with confidentiality, respect and clear communication.",
        },
        {
          question: "Do you only work in Mackay?",
          answer:
            "No. Mackay is the service base, with surrounding regions regularly serviced and travel arranged where needed.",
        },
        {
          question: "Can someone else make the enquiry on behalf of the property occupant or family?",
          answer:
            "Yes. Enquiries can come from family members, landlords, agencies or other people helping manage the situation.",
        },
      ]}
    />
  );
}
