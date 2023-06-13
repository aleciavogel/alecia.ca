import { Text, View } from "@react-pdf/renderer";

import ConferenceItem from "./ConferenceItem";
import { CONFERENCES, tw, styles } from "../constants";

export default function ConferencesSection() {
  return (
    <View style={[styles.section, styles.borderBottom]}>
      <Text style={tw("text-base mt-2 mb-2")}>Conferences & Workshops</Text>
      <View style={tw("flex flex-row")}>
        <View style={tw("flex flex-row flex-wrap mr-2")}>
          {CONFERENCES.map((conf, index) => (
            <ConferenceItem
              key={`exp-${index}`}
              title={conf.title}
              location={conf.location}
              date={conf.date}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
