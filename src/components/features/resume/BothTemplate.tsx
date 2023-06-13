import { Document, Page, StyleSheet, View, Font } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

import ResumeWrapper from "./templates/ResumeWrapper";
import ContactInfo from "./templates/ContactInfo";
import ResumeBackground from "./templates/Background";
import Title from "./templates/Title";
import ExperienceSection from "./templates/ExperienceSection";
import SkillsSection from "./templates/SkillsSection";

import {
  WORK_EXPERIENCES,
  WORK_EXPERIENCES_CONTINUED,
  COVER_LETTER_CONTENT,
  COMPANY,
} from "./constants";
import ConferencesSection from "./templates/ConferencesSection";
import CoverLetterContent from "./cover-letter/CoverLetterContent";

Font.registerHyphenationCallback((word) => [word]);

// The 'theme' object is your Tailwind theme config
export const tw = createTw({
  theme: {
    fontFamily: ["Helvetica", "Helvetica-Bold"],
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

export default function BothTemplate() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <ResumeBackground />
        <ResumeWrapper>
          <View style={{ ...styles.topRow, ...styles.borderBottom }}>
            <Title />
            <ContactInfo />
          </View>
          <ExperienceSection experiences={WORK_EXPERIENCES} />
        </ResumeWrapper>
      </Page>
      <Page size="A4" style={styles.page}>
        <ResumeBackground />
        <ResumeWrapper>
          <View style={{ ...styles.topRow, ...styles.borderBottom }}>
            <Title />
            <ContactInfo />
          </View>
          <ExperienceSection showBorder={true} experiences={WORK_EXPERIENCES_CONTINUED} />
          <SkillsSection />
          <ConferencesSection />
        </ResumeWrapper>
      </Page>
      <Page size="A4" style={styles.page}>
        <ResumeBackground />
        <ResumeWrapper>
          <View style={{ ...styles.topRow, ...styles.borderBottom }}>
            <Title />
            <ContactInfo />
          </View>
          <View style={{ ...styles.topRow }}>
            <CoverLetterContent company={COMPANY} content={COVER_LETTER_CONTENT} />
          </View>
        </ResumeWrapper>
      </Page>
    </Document>
  );
}

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "rgb(226, 226, 226)",
    padding: 30,
    fontFamily: "Helvetica",
  },
  fontBold: {
    fontFamily: "Helvetica-Bold",
  },
  fontOblique: {
    fontFamily: "Helvetica-Oblique",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  section: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  borderBottom: {
    borderBottom: "1px solid #c9c9c9",
  },
  textSmol: {
    fontSize: 10,
  },
  textGray: {
    color: "#666666",
  },
  bulletIcon: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
  },
  bulletPoint: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 6,
  },
  table: {
    display: "flex",
    width: "auto",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableCell: {
    padding: 4,
    textAlign: "center",
  },
  tableHeader: {
    paddingTop: 0,
    fontSize: 10,
    fontWeight: "bold",
  },
  tableContent: {
    color: "#666666",
  },
});
