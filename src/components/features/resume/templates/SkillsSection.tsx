import { Text, View } from "@react-pdf/renderer";

import SkillItem from "./SkillItem";
import { SKILLS, tw, styles } from "../constants";
import SkillsTable from "./SkillsTable";

export default function SkillsSection() {
  return (
    <View style={[styles.section, { paddingBottom: 20 }]}>
      <Text style={tw("text-base mt-2 mb-2")}>Skill Summary</Text>
      <View style={tw("flex flex-row")}>
        <View style={tw("flex flex-row flex-wrap w-2/3 mr-2")}>
          {Object.keys(SKILLS).map((skill, index) => (
            <SkillItem key={`exp-${index}`} skill={skill} items={SKILLS[skill]} />
          ))}
        </View>
        <SkillsTable />
      </View>
    </View>
  );
}
