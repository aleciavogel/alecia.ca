import { View, Text } from "@react-pdf/renderer";
import { tw, styles } from "../constants";

export default function SkillItem({ skill, items }: { skill: string; items: string[] }) {
  return (
    <View style={tw("w-1/2 mb-3 pr-8")}>
      <Text
        style={{
          ...tw("text-xs leading-snug"),
          ...styles.textSmol,
          ...styles.fontBold,
        }}
      >
        {skill}
      </Text>
      <Text style={tw("text-xs leading-snug")}>{items.join(", ")}</Text>
    </View>
  );
}
