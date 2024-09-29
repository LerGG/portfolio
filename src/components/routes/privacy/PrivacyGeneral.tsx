import { gotham_bold } from "../../../fonts/gotham_bold";
import { gotham_book } from "../../../fonts/gotham_book";
import { Spacer } from "../../Basic/Spacer";

import { StyledHeadline2 } from "../../Basic/StyledHeadline2";
import { StyledText } from "../../Basic/StyledText";
import { StyledPrivacySectionWrapper } from "./privacy.styles";

export const PrivacyGeneral = () => {
  return (
    <StyledPrivacySectionWrapper>
      <StyledHeadline2>1. Datenschutz auf einen Blick</StyledHeadline2>
      <StyledText size="18px" style={gotham_bold.style}>
        Allgemeine Hinweise
      </StyledText>
      <StyledText textAlign="justify">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </StyledText>
      <Spacer $space="1" />
      <StyledText size="18px" style={gotham_bold.style}>
        Datenerfassung auf dieser Website
      </StyledText>
      <StyledText size="18px" style={gotham_book.style}>
        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
      </StyledText>
      <StyledText textAlign="justify">
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis
        zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
      </StyledText>
      <StyledText size="18px" style={gotham_book.style}>
        Wie erfassen wir Ihre Daten?
      </StyledText>
      <StyledText textAlign="justify">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben. Andere Daten werden automatisch oder nach
        Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme
        erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
        Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
        Daten erfolgt automatisch, sobald Sie diese Website betreten.
      </StyledText>
      <StyledText size="18px" style={gotham_book.style}>
        Wofür nutzen wir Ihre Daten?
      </StyledText>
      <StyledText textAlign="justify">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </StyledText>

      <StyledText size="18px" style={gotham_book.style}>
        Welche Rechte haben Sie bezüglich Ihrer Daten?
      </StyledText>
      <StyledText textAlign="justify">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
        dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
        für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu
        weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
        wenden.
      </StyledText>
    </StyledPrivacySectionWrapper>
  );
};
