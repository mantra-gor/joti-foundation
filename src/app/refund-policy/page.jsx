import {
  LegalHero,
  LegalBody,
  LegalSection,
  LegalParagraph,
  LegalList,
  legalLinkClass,
} from "@/components/legal/LegalDocument";

export const metadata = {
  title: "Refund Policy | Joti Foundation",
  description:
    "Joti Foundation's policy on requesting a refund of a donation.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <LegalHero
        title="Donation Refund Policy"
        intro="Joti Foundation has instituted a donation refund policy to ensure fair and transparent processing of requests for refund of donations, as digital payments are becoming more frequent. We expect that all donors will exercise due care and diligence while making donations, and we also recognise that a donation may be made erroneously or donors may change their mind."
      />

      <LegalBody>
        <LegalSection heading="How We Handle Refund Requests">
          <LegalParagraph>
            Joti Foundation will examine each request for refund of donation
            and endeavour to make the refund. Joti Foundation may also seek
            further information / documents and the donor must co-operate
            in this regard.
          </LegalParagraph>
          <LegalParagraph>
            However, Joti Foundation is not obliged to make refunds and may,
            in its discretion, decline any request for refund of donations,
            particularly if a tax exemption certificate has been issued.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Requesting a Refund">
          <LegalParagraph>
            If you would like your donation to Joti Foundation to be
            refunded, you must request Joti Foundation in writing or by
            email for a refund, and your request must reach Joti Foundation
            within 15 (fifteen) days from the date on which you made the
            donation, i.e. the date on which you:
          </LegalParagraph>
          <LegalList>
            <li>
              Made the donation online, electronically or through other
              means; or
            </li>
            <li>
              Handed over the cheque / demand draft to Joti Foundation or
              someone authorised by Joti Foundation for this purpose; or
            </li>
            <li>
              Despatched the cheque / demand draft to Joti Foundation by
              other means.
            </li>
          </LegalList>
        </LegalSection>

        <LegalSection heading="Information to Include">
          <LegalParagraph>
            Your request should state the reason for requesting the refund
            and include all of the following details pertaining to the
            donation:
          </LegalParagraph>
          <LegalList>
            <li>Date of donation</li>
            <li>Donation amount</li>
            <li>
              If the donation was made through cheque/draft, the
              Cheque/Draft no.
            </li>
            <li>
              If the donation was made through credit card, the Credit Card
              no. (last 4 digits only)
            </li>
            <li>If the donation was made online, the Donation ID</li>
          </LegalList>
        </LegalSection>

        <LegalSection heading="Contact Us">
          <LegalParagraph>
            Send your refund request, with the details above, to{" "}
            <a
              href="mailto:info@jotifoundation.org"
              className={legalLinkClass}
            >
              info@jotifoundation.org
            </a>
            .
          </LegalParagraph>
        </LegalSection>
      </LegalBody>
    </>
  );
}
