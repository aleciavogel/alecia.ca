import { View, Text } from "@react-pdf/renderer";
import { tw, styles } from "../constants";

interface Props {
  title: string;
  date: string;
  location: string;
}

export default function ConferenceItem({ title, date, location }: Props) {
  return (
    <View style={tw("w-1/3 mb-3 pr-8")}>
      <Text style={[tw("text-xs leading-snug"), styles.textGray]}>{date}</Text>
      <Text style={[tw("text-xs leading-snug"), styles.textSmol, styles.fontBold]}>{title}</Text>
      <Text style={[tw("text-xs leading-snug"), styles.textGray]}>{location}</Text>
    </View>
  );
}
