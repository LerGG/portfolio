import { ContentContainer } from "../src/components/Basic/ContentContainer";
import React from "react";
import { StyledHeadline1 } from "../src/components/Basic/StyledHeadline1";
import { Spacer } from "../src/components/Basic/Spacer";
import { StyledText } from "../src/components/Basic/StyledText";
import { StyledHeadline2 } from "../src/components/Basic/StyledHeadline2";
import { StyledSectionBottomSpacerShort } from "../src/components/Basic/StyledSectionBottomSpacerShort";

export default function Privacy() {
  return (
    <ContentContainer>
      <Spacer space="4" />
      <StyledHeadline1>Impressum</StyledHeadline1>
      <Spacer space="4" />
      <StyledHeadline2>Inhaltsverantwortlicher</StyledHeadline2>
      <Spacer space="1" />
      <StyledText size="16px">
        Timo Waszek <br />
        c/o IP-Management#24193 <br />
        Ludwig-Erhard-Str. 18 <br />
        20459 Hamburg <br />
        <br />
        Kontakt: timo [/ @ /] waszek.de
      </StyledText>
      <StyledSectionBottomSpacerShort />
      <StyledHeadline2>Haftung für Links</StyledHeadline2>
      <Spacer space="1" />
      <StyledText size="16px" textAlign="justify">
        Dieses Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </StyledText>
      <StyledSectionBottomSpacerShort />
      <StyledHeadline2>Urheberrecht</StyledHeadline2>
      <Spacer space="1" />
      <StyledText size="16px" textAlign="justify">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten (waszek.de) unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
        dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
        gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
        werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
        auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </StyledText>
    </ContentContainer>
  );
}
