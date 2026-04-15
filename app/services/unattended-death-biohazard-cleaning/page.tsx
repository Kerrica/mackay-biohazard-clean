import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function UnattendedDeathBiohazardCleaningPage() {
  return (
    <ServicePageTemplate
      eyebrow="Specialist Remediation Service"
      title="Unattended Death & Biohazard Cleaning Mackay"
      intro="Discrete, controlled support for unattended death situations, biohazard contamination and high-sensitivity property environments, based in Mackay and available where needed."
      heroImage="/biohazard-cleaning-mackay-on-site-team.jpg"
      heroAlt="Biohazard cleanup in progress in Mackay property"
      summaryTitle="Specialist support for sensitive contaminated environments"
      summaryText="Unattended death and biohazard situations require a controlled, respectful response. These environments often involve contamination risks, odour concerns, emotional sensitivity and practical decisions that need to be handled carefully. The focus is on clear next steps, safe remediation and respectful communication throughout."
      situationsTitle="This service may be suitable where"
      situations={[
        "An unattended death has occurred and the property requires specialist cleanup.",
        "There are contamination risks involving bodily fluids or other biohazard materials.",
        "Odour concerns or unsafe conditions are preventing safe access or use of the property.",
        "Family members, landlords, housing stakeholders or other supports need discreet practical assistance.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the location, urgency and a brief outline of the situation.",
        "The property conditions, contamination concerns, access issues and likely scope are reviewed.",
        "A practical response path is discussed, including timing, site requirements and next steps.",
        "Cleanup proceeds in a controlled, respectful manner with communication kept clear throughout.",
      ]}
      faqs={[
        {
          question: "Do I need to know exactly what level of cleanup is required before I call?",
          answer:
            "No. The first step is simply understanding the situation and identifying the most practical response.",
        },
        {
          question: "Is this handled discreetly?",
          answer:
            "Yes. These situations are approached with confidentiality, respect and clear communication.",
        },
        {
          question: "Do you only work in Mackay?",
          answer:
            "No. Mackay is the service base, with surrounding regions regularly serviced and travel arranged where needed.",
        },
        {
          question: "Can landlords, housing services or family members make the enquiry?",
          answer:
            "Yes. Enquiries can come from the person directly affected or from others helping to manage the situation.",
        },
      ]}
    />
  );
}
