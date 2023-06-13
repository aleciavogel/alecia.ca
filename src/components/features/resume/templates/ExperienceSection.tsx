import { Text, View } from "@react-pdf/renderer";

import { tw, styles } from "../constants";
import { ExperienceItem as ExperienceItemType } from "../types";
import ExperienceItem from "./ExperienceItem";

interface Props {
  experiences: ExperienceItemType[];
  showBorder?: boolean;
  sectionTitle?: string;
  showTitle?: boolean;
}

export default function ExperienceSection({
  experiences,
  showBorder = false,
  sectionTitle = "Industry Experience",
  showTitle = true,
}: Props) {
  const borderStyles = showBorder ? styles.borderBottom : {};
  const sectionStyles = showTitle
    ? [tw("mt-2"), styles.section, borderStyles]
    : [borderStyles, tw("pt-4")];

  return (
    <View style={sectionStyles}>
      {showTitle && <Text style={tw("text-base mb-2")}>{sectionTitle}</Text>}

      {experiences.map((experience, index) => (
        <ExperienceItem key={`exp-${index}`} {...experience} />
      ))}
    </View>
  );
}
