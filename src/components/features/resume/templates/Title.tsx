import { Text, View } from "@react-pdf/renderer";

import { tw, styles, COLORS } from "../constants";

export default function Title() {
  return (
    <View style={tw("text-left w-1/2")}>
      <Text style={[tw("text-4xl leading-tight lowercase"), { marginTop: -2 }]}>
        Alecia
        <Text style={[styles.fontBold, tw("font-bold"), { color: COLORS.pink }]}>Vogel</Text>
      </Text>
      <Text style={tw("text-base font-light")}>Senior Full-Stack Developer</Text>
    </View>
  );
}
