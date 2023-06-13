import { Text, View } from "@react-pdf/renderer";

import { SKILLS_EXPERIENCE, tw, styles } from "../constants";

const SkillsTable = () => {
  return (
    <View style={{ ...styles.table, ...tw("w-1/3") }}>
      {/* Table Header */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.tableHeader, styles.fontBold]}>Skill</Text>
        <Text style={[styles.tableCell, styles.tableHeader, styles.fontBold]}>Experience</Text>
      </View>

      {/* Table Content */}
      {SKILLS_EXPERIENCE.map((skill) => (
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.tableContent, styles.textSmol]}>
            {skill.title}
          </Text>
          <Text style={[styles.tableCell, styles.tableContent, styles.textSmol]}>{skill.exp}</Text>
        </View>
      ))}

      {/* Add more rows as needed */}
    </View>
  );
};

export default SkillsTable;
