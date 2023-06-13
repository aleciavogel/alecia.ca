import { Text, View } from "@react-pdf/renderer";

import { tw, styles } from "../constants";
import { ExperienceItem as ExperienceItemType } from "../types";

// Load a string containing a cover letter and parse it into a PDF

interface Props {
  content: string;
  company: string;
}

export default function CoverLetterContent({ content, company }: Props) {
  const contentTemplate = `Dear ${company} Hiring Team,

I am writing to express my interest in the Front End Product Software Engineer position you have advertised on LinkedIn. As someone who deeply resonates with Dropbox's mission to design a more enlightened way of working, I find the opportunity to contribute to your objectives particularly exciting.

With 7 years of experience in the software development industry, I have cultivated a strong background in full-stack development, focusing especially on front-end technologies like JavaScript, TypeScript, and React. My roles at Onlea and Gather Town have not only honed my technical skills but have also taught me the value of a user-empathetic mindset. While the layoffs at my last two positions over the past year were unfortunate, those experiences have reinforced the importance of adaptability and resilience, which I believe would be beneficial in Dropbox's dynamic environment.

Your focus on developing the next generation of products for collaboration and distributed work stands out to me. In my previous roles, I've collaborated closely with product managers, designers, and analysts to develop applications that have had a measurable impact on user experience and business outcomes. I thrive in settings where I can work across technologies and contribute to various stages of the product development cycle.

Although I do not have a formal Bachelor's degree, my extensive experience and continuous self-education in coding and software engineering have more than equipped me to excel in technical roles. I have always been a firm believer that practical, hands-on experience often surpasses traditional education paths, and my track record supports this.

I am also willing to participate in on-call rotations and understand the importance of being available for calls during both core and non-core business hours. My priority is contributing to a seamless and reliable product that serves the needs of millions of daily users worldwide.

Thank you for considering my application. I am very eager to contribute to Dropbox's Engineering team and to work on creating a fulfilling and seamless work life for millions around the globe.

Warm regards,
Alecia Vogel
`;

  return (
    <View style={{ ...tw("mt-2"), ...styles.section }}>
      <Text style={tw("text-base mb-2")}>{contentTemplate}</Text>
    </View>
  );
}
