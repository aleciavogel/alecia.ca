import { View } from "@react-pdf/renderer";
import { tw } from "../constants";

export default function ResumeWrapper({ children }: { children: React.ReactNode }) {
  return <View style={tw("p-6 h-full bg-white")}>{children}</View>;
}
