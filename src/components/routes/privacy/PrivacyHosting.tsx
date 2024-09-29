import { useTranslation } from "react-i18next";
import { gotham_bold } from "../../../fonts/gotham_bold";
import { Spacer } from "../../Basic/Spacer";
import { StyledFlexBox } from "../../Basic/StyledFlexBox";
import { StyledHeadline2 } from "../../Basic/StyledHeadline2";
import { StyledLink } from "../../Basic/StyledLink";
import { StyledText } from "../../Basic/StyledText";
import { StyledPrivacySectionWrapper } from "./privacy.styles";

export const PrivacyHosting = () => {
  const { t, i18n } = useTranslation();
  // current lanuage
  const lang = i18n.language === "en" ? "en" : "de";
  return (
    <StyledPrivacySectionWrapper>
      <StyledHeadline2>2. Hosting</StyledHeadline2>
      <StyledText textAlign="justify">
        Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
      </StyledText>
      <StyledText size="18px" style={gotham_bold.style}>
        Amazon Web Services (AWS)
      </StyledText>
      <StyledText textAlign="justify">
        Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F.
        Kennedy, 1855 Luxemburg (nachfolgend AWS). Wenn Sie unsere Website
        besuchen, werden Ihre personenbezogenen Daten auf den Servern von AWS
        verarbeitet. Hierbei können auch personenbezogene Daten an das
        Mutterunternehmen von AWS in die USA übermittelt werden. Die
        Datenübertragung in die USA wird auf die EU-Standardvertragsklauseln
        gestützt. Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
        zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
        auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
        soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar. Das
        Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
        Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
        Europäischen Union und den USA, der die Einhaltung europäischer
        Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
        soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
        diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
        erhalten Sie vom Anbieter unter folgenden Links:
      </StyledText>
      <StyledFlexBox>
        <StyledLink href={`https://aws.amazon.com/${lang}/privacy/?nc1=f_pr`}>
          {`https://aws.amazon.com/${lang}/privacy/?nc1=f_pr`}
        </StyledLink>
        <StyledLink
          href={"https://www.dataprivacyframework.gov/participant/5776"}
        >
          https://www.dataprivacyframework.gov/participant/5776
        </StyledLink>
        <StyledLink
          href={`https://aws.amazon.com/${lang}/blogs/security/aws-gdpr-data-processing-addendum`}
        >
          {`https://aws.amazon.com/${lang}/blogs/security/aws-gdpr-data-processing-addendum`}
        </StyledLink>
      </StyledFlexBox>
      <Spacer $space="1" />
      <StyledText size="18px" style={gotham_bold.style}>
        IONOS
      </StyledText>
      <StyledText textAlign="justify">
        Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur
        (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS
        verschiedene Logfiles inklusive Ihrer IP-Adressen. Die Verwendung von
        IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
        ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung
        unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
        erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
        lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die
        Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
        des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
        Die Einwilligung ist jederzeit widerrufbar. Details entnehmen Sie der
        Datenschutzerklärung von IONOS:
      </StyledText>
      <StyledLink href={"https://www.ionos.de/terms-gtc/terms-privacy"}>
        https://www.ionos.de/terms-gtc/terms-privacy
      </StyledLink>
    </StyledPrivacySectionWrapper>
  );
};
