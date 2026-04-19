import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Meth Lab Decontamination & Clean Up Mackay",
  description:
    "Controlled support in Mackay for suspected or confirmed meth-affected properties requiring specialist assessment, decontamination planning and practical next steps.",
  alternates: {
    canonical: "/services/meth-lab-clean-up",
  },
  openGraph: {
    title:
      "Meth Lab Decontamination & Clean Up Mackay | Mackay Biohazard Cleaning",
    description:
      "Controlled support in Mackay for suspected or confirmed meth-affected properties requiring specialist assessment, decontamination planning and practical next steps.",
    url: "https://www.mackaybiohazardcleaning.com.au/services/meth-lab-clean-up",
    images: [
      {
        url: "/biohazard-cleaning-mackay-on-site-team.jpg",
        width: 1200,
        height: 630,
        alt: "Meth lab decontamination and clean up in Mackay",
      },
    ],
  },
  twitter: {
    title:
      "Meth Lab Decontamination & Clean Up Mackay | Mackay Biohazard Cleaning",
    description:
      "Controlled support in Mackay for suspected or confirmed meth-affected properties requiring specialist assessment, decontamination planning and practical next steps.",
    images: ["/biohazard-cleaning-mackay-on-site-team.jpg"],
  },
};

export default function MethLabCleanUpPage() {
  return (
    <ServicePageTemplate
      eyebrow="Specialist Remediation Service"
      title="Meth Lab Decontamination & Clean Up Mackay"
      intro="Controlled support for suspected or confirmed meth-affected properties requiring specialist assessment, decontamination planning and practical next steps, based in Mackay and available where needed."
      heroImage="/biohazard-cleaning-mackay-on-site-team.jpg"
      heroAlt="Specialist remediation team on site"
      summaryTitle="Controlled support for meth-affected properties"
      summaryText="Meth-affected properties require a cautious, structured response. These situations can involve contamination concerns, uncertainty about safe occupancy, restricted access, compliance requirements and the need for specialist remediation planning. The focus is on clear next steps, site safety, practical coordination and appropriate decontamination support."
      situationsTitle="This service may be suitable where"
      situations={[
        "A property is suspected or known to have been used for methamphetamine production or heavy use.",
        "There are contamination concerns affecting safe access, occupancy, sale, lease or property handover.",
        "Owners, landlords, agents, housing stakeholders or support networks need practical direction on how to proceed.",
        "The property requires specialist decontamination planning rather than ordinary cleaning.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the property location and a brief outline of the situation or concern.",
        "The site circumstances, access issues and likely contamination concerns are reviewed.",
        "A practical response path is discussed, including whether specialist testing, decontamination or further remediation steps are required.",
        "Support proceeds in a controlled manner focused on safety, property recovery, compliance requirements and clear communication throughout.",
      ]}
      faqs={[
        {
          question: "Can ordinary cleaning fix a meth-affected property?",
          answer:
            "No. Properties affected by methamphetamine contamination generally require a specialist response rather than standard cleaning alone.",
        },
        {
          question: "What if I am not sure whether the property is contaminated?",
          answer:
            "That is fine. The first step is understanding the situation and identifying the most practical path forward.",
        },
        {
          question: "Can this help before sale, lease or handover?",
          answer:
            "Yes. This service is suited to situations where contamination concerns are affecting occupancy, leasing, sale preparation or property handover.",
        },
        {
          question: "Can landlords, agents or housing stakeholders make the enquiry?",
          answer:
            "Yes. Enquiries can come from owners, landlords, agents, housing services or others responsible for the property.",
        },
      ]}
    />
  );
}
