import { Text, View } from "@react-pdf/renderer";

import { tw, styles } from "../constants";
import { ExperienceItem as ExperienceItemType } from "../types";
import ExperienceItem from "./ExperienceItem";

interface Props {
  experiences: ExperienceItemType[];
  showBorder?: boolean;
}

export default function VolunteeringSection({ experiences, showBorder = false }: Props) {
  const borderStyles = showBorder ? styles.borderBottom : {};
  const sectionStyles = [tw("mt-2"), styles.section, borderStyles];

  return (
    <View style={sectionStyles}>
      <Text style={tw("text-base mb-2")}>Volunteering</Text>

      {experiences.map((experience, index) => (
        <ExperienceItem key={`exp-${index}`} {...experience} />
      ))}
    </View>
  );
}
