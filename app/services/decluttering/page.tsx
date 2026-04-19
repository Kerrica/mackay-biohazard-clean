import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Decluttering Support Mackay",
  description:
    "Hands-on decluttering support in Mackay to clear, sort and reset homes, rooms and storage areas that have become difficult to manage. Practical, respectful support focused on restoring function and order.",
  alternates: {
    canonical: "/services/decluttering",
  },
  openGraph: {
    title: "Decluttering Support Mackay | Mackay Biohazard Cleaning",
    description:
      "Hands-on decluttering support in Mackay to clear, sort and reset homes, rooms and storage areas that have become difficult to manage. Practical, respectful support focused on restoring function and order.",
    url: "https://www.mackaybiohazardcleaning.com.au/services/decluttering",
    images: [
      {
        url: "/storage-declutter-mackay-before.jpg",
        width: 1200,
        height: 630,
        alt: "Decluttering support in Mackay",
      },
    ],
  },
  twitter: {
    title: "Decluttering Support Mackay | Mackay Biohazard Cleaning",
    description:
      "Hands-on decluttering support in Mackay to clear, sort and reset homes, rooms and storage areas that have become difficult to manage. Practical, respectful support focused on restoring function and order.",
    images: ["/storage-declutter-mackay-before.jpg"],
  },
};

export default function DeclutteringPage() {
  return (
    <ServicePageTemplate
      eyebrow="Additional Support Service"
      title="Decluttering Support Mackay"
      intro="Hands-on practical support to clear, sort and reset homes, rooms and storage areas that have become difficult to manage, based in Mackay and available where needed."
      heroImage="/storage-declutter-mackay-before.jpg"
      heroAlt="Storage area before decluttering in Mackay"
      summaryTitle="Practical support to restore function and order"
      summaryText="Decluttering support is suited to situations where rooms, storage areas or whole homes have become difficult to use effectively, but full specialist remediation is not required. The focus is on creating structure, reducing overwhelm and helping restore function in a practical and respectful way."
      situationsTitle="This service may be suitable where"
      situations={[
        "Rooms, storage areas or household zones have become difficult to use or manage.",
        "Clutter is affecting day-to-day function, movement, organisation or decision-making.",
        "A reset is needed before the situation becomes more complex or more intensive support is required.",
        "Practical hands-on support is needed to clear, sort and create a more manageable environment.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the location and a brief outline of the areas or issues involved.",
        "The level of clutter, function impact and likely scope are reviewed.",
        "A practical approach is discussed, including priorities, staging and the most useful next steps.",
        "Hands-on support proceeds in a structured, respectful manner focused on restoring use and order.",
      ]}
      faqs={[
        {
          question: "Is this the same as hoarding or squalor recovery?",
          answer:
            "Not necessarily. Decluttering support is generally suited to situations where function needs to be restored but full specialist remediation is not required.",
        },
        {
          question: "Can support be focused on one room or area only?",
          answer:
            "Yes. Support can be directed toward specific rooms, storage areas or priority zones depending on the situation.",
        },
        {
          question: "Do you only work in Mackay?",
          answer:
            "No. Mackay is the service base, with surrounding regions regularly serviced and travel arranged where needed.",
        },
        {
          question: "Is this handled respectfully and without judgement?",
          answer:
            "Yes. The process is approached with clear communication, practicality and respect for the person and the environment involved.",
        },
      ]}
    />
  );
}
