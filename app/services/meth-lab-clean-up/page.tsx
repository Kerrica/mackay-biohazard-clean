import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function MethLabCleanUpPage() {
  return (
    <ServicePageTemplate
      eyebrow="Specialist Remediation Service"
      title="Meth Lab Decontamination & Clean Up Mackay"
      intro="Controlled support for suspected or confirmed drug-affected properties requiring specialist assessment, decontamination and practical next steps, based in Mackay and available where needed."
      heroImage="/biohazard-cleaning-mackay-on-site-team.jpg"
      heroAlt="Specialist remediation team on site"
      summaryTitle="Practical support for drug-affected property environments"
      summaryText="Meth-affected properties require a controlled and cautious response. These situations can involve contamination risk, restricted access, uncertainty about safe occupancy and the need for specialist remediation planning. The focus is on clear next steps, site safety, practical coordination and appropriate decontamination support."
      situationsTitle="This service may be suitable where"
      situations={[
        "A property is suspected or known to have been used for methamphetamine production or heavy use.",
        "There are contamination concerns affecting safe access, occupancy, sale, lease or handover.",
        "Owners, landlords, housing stakeholders or other supports need practical direction on how to proceed.",
        "The property requires specialist decontamination planning rather than ordinary cleaning.",
      ]}
      processTitle="How support usually works"
      processSteps={[
        "Make contact with the property location and a brief outline of the situation or concern.",
        "The site circumstances, access issues and likely contamination concerns are reviewed.",
        "A practical response path is discussed, including whether specialist testing, decontamination or further remediation steps are required.",
        "Support proceeds in a controlled manner focused on safety, compliance, property recovery and clear communication throughout.",
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
          question: "Do you only work in Mackay?",
          answer:
            "No. Mackay is the service base, with surrounding regions regularly serviced and travel arranged where needed.",
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
