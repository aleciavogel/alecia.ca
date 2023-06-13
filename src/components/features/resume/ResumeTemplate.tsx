import { Document, Page, View, Font } from "@react-pdf/renderer";

import ResumeWrapper from "./templates/ResumeWrapper";
import ContactInfo from "./templates/ContactInfo";
import ResumeBackground from "./templates/Background";
import Title from "./templates/Title";
import ExperienceSection from "./templates/ExperienceSection";

import {
  styles,
  OTHER_WORK_EXPERIENCE,
  WORK_EXPERIENCES,
  LAST_WORK_EXPERIENCE,
  WORK_EXPERIENCES_CONTINUED,
  COLORS,
  VOLUNTEERING,
} from "./constants";
import SkillsSection from "./templates/SkillsSection";
import ConferencesSection from "./templates/ConferencesSection";
import ResumeFrontPage from "./templates/FrontPage";
import ResumeLastPage from "./templates/LastPage";
import BrandsSection from "./templates/Brands";
import VolunteeringSection from "./templates/VolunteeringSection";

Font.registerHyphenationCallback((word) => [word]);

export default function ResumeTemplate() {
  return (
    <Document>
      <ResumeFrontPage />

      <Page size="A4" style={[styles.page, styles.bgGrey]}>
        <ResumeBackground />
        <ResumeWrapper>
          <View style={{ ...styles.topRow, ...styles.borderBottom }}>
            <Title />
            <ContactInfo />
          </View>
          <ExperienceSection experiences={WORK_EXPERIENCES} />
        </ResumeWrapper>
      </Page>

      <Page size="A4" style={[styles.page, styles.bgIndigo]}>
        <ResumeBackground color={COLORS.bgGrey} />
        <ResumeWrapper>
          <ExperienceSection
            showTitle={false}
            showBorder={false}
            experiences={WORK_EXPERIENCES_CONTINUED}
          />
        </ResumeWrapper>
      </Page>

      <Page size="A4" style={[styles.page, styles.bgGrey]}>
        <ResumeBackground />
        <ResumeWrapper>
          <ExperienceSection
            showBorder={true}
            showTitle={false}
            experiences={LAST_WORK_EXPERIENCE}
          />
          <ExperienceSection
            sectionTitle="Other Professional Experience"
            experiences={OTHER_WORK_EXPERIENCE}
            showBorder={true}
          />
          <SkillsSection />
        </ResumeWrapper>
      </Page>

      <Page size="A4" style={[styles.page, styles.bgIndigo]}>
        <ResumeBackground color={COLORS.bgGrey} />
        <ResumeWrapper>
          <VolunteeringSection experiences={VOLUNTEERING} showBorder={true} />
          <ConferencesSection />
          <BrandsSection />
        </ResumeWrapper>
      </Page>

      <ResumeLastPage />
    </Document>
  );
}
