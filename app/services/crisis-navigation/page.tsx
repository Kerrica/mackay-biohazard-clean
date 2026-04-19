import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Crisis Navigation Support Mackay",
  description:
    "Practical crisis navigation support in Mackay for situations that feel complex, urgent or hard to manage alone. Clear next steps, structured guidance and calm direction when the path forward is unclear.",
  alternates: {
    canonical: "/services/crisis-navigation",
  },
  openGraph: {
    title: "Crisis Navigation Support Mackay | Mackay Biohazard Cleaning",
    description:
      "Practical crisis navigation support in Mackay for situations that feel complex, urgent or hard to manage alone. Clear next steps, structured guidance and calm direction when the path forward is unclear.",
    url: "https://www.mackaybiohazardcleaning.com.au/services/crisis-navigation",
    images: [
      {
        url: "/crisis-navigation-mackay.jpg",
        width: 1200,
        height: 630,
        alt: "Crisis navigation support in Mackay",
      },
    ],
  },
  twitter: {
    title: "Crisis Navigation Support Mackay | Mackay Biohazard Cleaning",
    description:
      "Practical crisis navigation support in Mackay for situations that feel complex, urgent or hard to manage alone. Clear next steps, structured guidance and calm direction when the path forward is unclear.",
    images: ["/crisis-navigation-mackay.jpg"],
  },
};

export default function CrisisNavigationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Additional Support Service"
      title="Crisis Navigation Support Mackay"
      intro="A clear starting point when the situation feels too complex to manage alone, based in Mackay and available where needed."
      heroImage="/crisis-navigation-mackay.jpg"
      heroAlt="Supportive in-home guidance conversation"
      summaryTitle="Practical direction when the next step is unclear"
      summaryText="Crisis Navigation is suited to situations where the main need is structure, decision support and practical next steps. It provides a calmer starting point when people are overwhelmed, unsure what kind of help is needed, or trying to make sense of a difficult property or living situation."
      situationsTitle="This service may be suitable where"
      situations={[
        "The situation feels too complex, urgent or emotionally loaded to manage alone.",
        "It is unclear what type of service is needed or what the next practical step should be.",
        "Family members, carers, housing stakeholders or others need help clarifying a response path.",
        "The environment, circumstances or decisions involved need structure before practical work begins.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the location and a brief outline of what is happening.",
        "The situation is reviewed to understand the main issues, pressure points and likely response needs.",
        "A practical next-step plan is discussed, including what type of support may be most useful.",
        "The situation moves forward with more structure, clearer direction and reduced overwhelm.",
      ]}
      faqs={[
        {
          question: "Is this a cleaning service?",
          answer:
            "Not on its own. Crisis Navigation is a practical guidance and coordination support where the main issue is understanding what needs to happen next.",
        },
        {
          question: "Can this be used before deciding whether other services are needed?",
          answer:
            "Yes. It is specifically designed for situations where the right path is not yet clear.",
        },
        {
          question: "Do you only work in Mackay?",
          answer:
            "No. Mackay is the service base, with surrounding regions regularly serviced and travel arranged where needed.",
        },
        {
          question: "Can someone else enquire on behalf of the person affected?",
          answer:
            "Yes. Family members, carers, agencies, landlords and other supports can make the initial enquiry.",
        },
      ]}
    />
  );
}
