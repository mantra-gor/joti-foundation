import Link from "next/link";
import {
  LegalHero,
  LegalBody,
  LegalNotice,
  LegalSection,
  LegalParagraph,
  LegalList,
  legalLinkClass,
} from "@/components/legal/LegalDocument";

export const metadata = {
  title: "Terms of Service | Joti Foundation",
  description:
    "The terms and conditions governing your use of the Joti Foundation website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHero title="Terms of Service" effectiveDate="January 26, 2021" />

      <LegalBody>
        <LegalNotice>
          Please read carefully the following terms and conditions (the
          &ldquo;Terms&rdquo; or &ldquo;Terms of Use&rdquo;), because they,
          along with our{" "}
          <Link href="/privacy-policy" className={legalLinkClass}>
            Privacy Policy
          </Link>
          , constitute a binding agreement between you, the individual or
          entity accessing or using the Service, and Joti Foundation. By
          accessing the Service or using it in any manner, you signify your
          acceptance of these Terms. If you do not agree to these Terms of
          Use, you may not access or use the Service.
        </LegalNotice>

        <LegalParagraph>
          From time to time, Joti Foundation may change these Terms to meet
          technical, operational and legal changes. Joti Foundation will
          post a notice about changes made to the Terms on the website, and
          may send you a notice by email, a reasonable time before the
          changes take effect.
        </LegalParagraph>

        <LegalParagraph>
          You agree to periodically review this agreement to be aware of any
          such revisions. Your continued use of this website will be deemed
          acceptance of the updated or amended terms.
        </LegalParagraph>

        <LegalSection heading="Definitions">
          <LegalParagraph>In these terms and conditions:</LegalParagraph>
          <LegalList>
            <li>
              &ldquo;Joti Foundation&rdquo;, &ldquo;we&rdquo; or
              &ldquo;our&rdquo; means Joti Foundation, is a public trust
              (charitable organization) registered under the Indian Trusts
              Act 1882 charity in England and Wales (1163294).
            </li>
            <li>
              &ldquo;Material&rdquo; means all of the information, data,
              text, graphics, links, computer code or other material
              published on, contained or available on the Website.
            </li>
            <li>
              &ldquo;User&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo;
              means the individual or organisation accessing the Website,
              ordering goods or services, registering for events and/or
              making donations.
            </li>
            <li>
              &ldquo;Website&rdquo; means any website under the ownership or
              control of Joti Foundation which links to these terms and
              conditions.
            </li>
          </LegalList>
        </LegalSection>

        <LegalSection heading="Your Use of the Website">
          <LegalParagraph>
            You can view any non-password protected parts of the Website and
            use the Material contained on the Website for your own purposes
            provided you:
          </LegalParagraph>
          <LegalList>
            <li>
              use it for information purposes and/or reproduction for
              personal use only, and not for reproduction on any other
              website or for commercial gain;
            </li>
            <li>
              notify and seek Joti Foundation&rsquo;s approval before
              creating any links to the Website; and
            </li>
            <li>
              do not copy, store, or transmit in any form or by any means to
              any third party, any part of the Website, without Joti
              Foundation&rsquo;s written permission.
            </li>
          </LegalList>
        </LegalSection>

        <LegalSection heading="Copyright and Trademarks">
          <LegalParagraph>
            Joti Foundation is the owner or licensee of the copyright in the
            Material. Unauthorised use of the Material (including
            reproduction, storage, modification, distribution or
            republication) without prior written consent is not allowed.
          </LegalParagraph>
          <LegalParagraph>
            The Joti Foundation name and logos are some of Joti
            Foundation&rsquo;s registered trademarks. You may not use Joti
            Foundation&rsquo;s unregistered or registered trademarks without
            the prior consent of Joti Foundation.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Your Lawful Use of the Website">
          <LegalParagraph>When you use the Website, you must not:</LegalParagraph>
          <LegalList>
            <li>in any way breach any applicable law or regulation;</li>
            <li>
              infringe the copyright, trademarks or other intellectual
              property rights of third parties;
            </li>
            <li>
              in any way be abusive, vulgar, obscene, unlawful, fraudulent,
              threatening, defamatory and/or hateful to any person;
            </li>
            <li>violate the privacy or other personal rights of others;</li>
            <li>
              have the intention of harming or attempting to harm any person
              in any way;
            </li>
            <li>
              knowingly transmit any data, send or upload any material that
              contains viruses or any other harmful programs or similar
              computer code designed to adversely affect the operation of
              any computer software or hardware.
            </li>
          </LegalList>
          <LegalParagraph>
            Any content you upload to the Website will be considered
            non-confidential and non-proprietary. You retain all ownership
            rights in the content but agree to grant Joti Foundation a
            perpetual, royalty-free, non-exclusive licence to use the
            content on the Website. This includes storing, copying and
            making the content available to third parties.
          </LegalParagraph>
          <LegalParagraph>
            Joti Foundation has the right to remove any content uploaded by
            you if, in our opinion, it does not comply with these terms and
            conditions.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Limitation of Liability">
          <LegalParagraph>
            Joti Foundation will not be liable for any direct, indirect or
            consequential damages (even if foreseeable) whether based on
            contract, tort or otherwise, to the fullest extent permitted by
            law. This includes but is not limited to liability for: loss of
            data or profits; interruptions or delays to the Website; the
            provision of or failure to provide services; any information,
            Material, goods and services obtained through the Website; or
            otherwise arising out of your use of the Website.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Reliance on Information on This Website">
          <LegalParagraph>
            The content on this Website is provided for general information
            only. Every effort has been made to ensure the accuracy of the
            information given on this website, but inaccuracies may
            nevertheless occur. If you come across any information which you
            consider to be inaccurate, please contact{" "}
            <a href="mailto:info@jotifoundation.org" className={legalLinkClass}>
              info@jotifoundation.org
            </a>
            .
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Links to Third-Party Websites">
          <LegalParagraph>
            The Website may contain links to websites operated by parties
            other than Joti Foundation. Such links are provided for your
            convenience only. Joti Foundation does not control such
            websites, and is not responsible for their content. Joti
            Foundation&rsquo;s inclusion of links to such websites does not
            imply any endorsement of the material on such websites or any
            association with their operators. You are solely responsible
            for evaluating the accuracy and completeness of any information
            contained on the third-party websites, and also the value and
            integrity of any goods and services offered by such websites.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Linking This Website">
          <LegalParagraph>
            Since a web address is basically the same as a phone number or
            street address, there are no restrictions on the fair use of
            this site&rsquo;s address as a way to receive information from
            Joti Foundation. However, &ldquo;linking&rdquo; a page to this
            site does not imply Joti Foundation&rsquo;s endorsement of the
            page containing the link.
          </LegalParagraph>
          <LegalParagraph>
            Our{" "}
            <Link href="/privacy-policy" className={legalLinkClass}>
              Privacy Policy
            </Link>{" "}
            sets out the terms on which we process any personal data we
            collect from you, or that you provide to us, including our use
            of cookies on this Website.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Viruses">
          <LegalParagraph>
            Although Joti Foundation makes all reasonable attempts to
            exclude viruses from the Website, we cannot ensure such
            exclusion and no liability is accepted for damage caused through
            the downloading of viruses. Therefore, please take all
            appropriate safeguards before downloading information from the
            Website.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="General">
          <LegalParagraph>
            If any provisions of these terms and conditions are held to be
            invalid or unenforceable, this will not affect the validity or
            enforceability of the remaining provisions.
          </LegalParagraph>
          <LegalParagraph>
            These terms and conditions constitute the entire agreement
            between you and Joti Foundation and supersede all other
            communications and proposals, whether electronic or written,
            between the User and Joti Foundation.
          </LegalParagraph>
          <LegalParagraph>
            Any failure of Joti Foundation to exercise or enforce any of its
            rights under these terms and conditions shall not be deemed to
            be a waiver of any such rights.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Jurisdiction">
          <LegalParagraph>
            The terms and conditions and the use by the User of the Website
            are governed by the laws of India. Any disputes arising from or
            relating to the Website, any transactions made on the Website
            and/or these terms and conditions will be subject to the
            exclusive jurisdiction of the English courts.
          </LegalParagraph>
        </LegalSection>

        <LegalSection heading="Contact Us">
          <LegalParagraph>
            You may contact Joti Foundation with any questions about the
            service via{" "}
            <a href="mailto:info@jotifoundation.org" className={legalLinkClass}>
              info@jotifoundation.org
            </a>
            . Joti Foundation will make efforts to address your inquiry
            promptly.
          </LegalParagraph>
        </LegalSection>
      </LegalBody>
    </>
  );
}
