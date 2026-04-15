import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function VacatePropertyRecoveryPage() {
  return (
    <ServicePageTemplate
      eyebrow="Specialist Remediation Service"
      title="Vacate & Property Recovery Mackay"
      intro="Fast, practical support for vacates, property reset work and time-sensitive handovers, based in Mackay and available where needed."
      heroImage="/bedroom-cleaning-mackay-after.jpg"
      heroAlt="Recovered bedroom after cleanup in Mackay"
      summaryTitle="Practical reset support for properties under pressure"
      summaryText="Vacate and property recovery work often needs to happen quickly and with clear coordination. These jobs can involve neglected conditions, accumulated contents, deadline pressure and the need to restore a property to a safer, more functional state. The focus is on practical action, controlled cleanup and a clear path toward handover or next use."
      situationsTitle="This service may be suitable where"
      situations={[
        "A property needs to be cleared, cleaned or reset before handover.",
        "A tenancy, housing arrangement or occupancy has ended and practical recovery work is required.",
        "The property condition is affecting re-entry, inspection, listing or handover timing.",
        "Families, landlords, agents, housing stakeholders or other supports need fast and structured assistance.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the property location, timing requirements and a brief outline of the situation.",
        "The site condition, access requirements, scope of work and urgency are reviewed.",
        "A practical response path is discussed, including likely timing, priorities and next steps.",
        "Recovery work proceeds in a controlled, practical manner with communication kept clear throughout.",
      ]}
      faqs={[
        {
          question: "Is this only for standard vacate cleans?",
          answer:
            "No. This service is suited to more difficult property reset situations where ordinary cleaning alone may not be enough.",
        },
        {
          question: "Can this help with neglected or heavily cluttered properties?",
          answer:
            "Yes. The first step is understanding the property condition and identifying the most practical response.",
        },
        {
          question: "Do you only work in Mackay?",
          answer:
            "No. Mackay is the service base, with surrounding regions regularly serviced and travel arranged where needed.",
        },
        {
          question: "Can landlords, agents or housing stakeholders make the enquiry?",
          answer:
            "Yes. Enquiries can come from owners, agents, housing services, family members or others coordinating the property.",
        },
      ]}
    />
  );
}
