"use client";

import { PDFViewer } from "@react-pdf/renderer";

import PageMain from "@/components/pages/PageMain";
import ResumeTemplate from "@/components/features/resume/ResumeTemplate";
import CoverLetterTemplate from "@/components/features/resume/CoverLetterTemplate";
import BothTemplate from "@/components/features/resume/BothTemplate";

export default function ResumeMain() {
  return (
    <PageMain>
      <PDFViewer width="100%" height="800px">
        <ResumeTemplate />
      </PDFViewer>

      {/* <PDFViewer width="100%" height="800px">
        <BothTemplate />
      </PDFViewer> */}
    </PageMain>
  );
}
